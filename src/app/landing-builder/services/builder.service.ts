import { Injectable, signal } from '@angular/core';
import { LandingsServices } from './landings.service';
import { LandingSection, SectionType } from '../models/landing-section.model';

@Injectable({ providedIn: 'root' })
export class BuilderService {

  /* =========================
     STATE (solo edición)
     ========================= */

  sections = signal<LandingSection[]>([]);
  selectedSectionId = signal<string | null>(null);

  constructor(private landings: LandingsServices) {}

  /* =========================
     LOAD DESDE LANDING ACTIVA
     ========================= */

  loadFromActiveLanding() {
    const landing = this.landings.activeLanding();
    if (!landing) return;

    // Clon profundo para evitar mutaciones fantasmas
    this.sections.set(structuredClone(landing.sections));
    this.selectedSectionId.set(null);
  }

  /* =========================
     SELECTION
     ========================= */

  selectSection(section: LandingSection | null) {
    this.selectedSectionId.set(section ? section.id : null);
  }

  selectedSection(): LandingSection | null {
    return (
      this.sections().find(s => s.id === this.selectedSectionId()) ?? null
    );
  }

  /* =========================
     CRUD SECTIONS
     ========================= */

  addSection(type: SectionType, data: any = {}) {
    const section: LandingSection = {
      id: crypto.randomUUID(),
      type,
      data
    };

    this.sections.update(list => [...list, section]);
    this.sync();
  }

  updateSection<T>(id: string, data: Partial<T>) {
    this.sections.update(list =>
      list.map(section =>
        section.id === id
          ? {
              ...section,
              data: {
                ...(section as any).data,
                ...data
              }
            }
          : section
      )
    );
  
    this.sync();
  }
  
  
  
  

  deleteSection(section: LandingSection) {
    this.sections.update(list =>
      list.filter(s => s.id !== section.id)
    );

    this.selectSection(null);
    this.sync();
  }

  duplicateSection(section: LandingSection) {
    const index = this.sections().findIndex(s => s.id === section.id);
    if (index === -1) return;

    const copy: LandingSection = {
      ...structuredClone(section),
      id: crypto.randomUUID()
    };

    this.sections.update(list => {
      const next = [...list];
      next.splice(index + 1, 0, copy);
      return next;
    });

    this.selectSection(copy);
    this.sync();
  }

  moveUp(section: LandingSection) {
    this.swap(section, -1);
  }

  moveDown(section: LandingSection) {
    this.swap(section, 1);
  }

  private swap(section: LandingSection, dir: number) {
    this.sections.update(list => {
      const index = list.findIndex(s => s.id === section.id);
      const target = index + dir;

      if (target < 0 || target >= list.length) return list;

      const next = [...list];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });

    this.sync();
  }

  /* =========================
     SYNC CON LANDING SERVICE
     ========================= */

  private sync() {
    this.landings.updateSections(this.sections());
  }
}

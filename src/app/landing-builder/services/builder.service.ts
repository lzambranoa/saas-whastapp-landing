import { Injectable, signal, inject } from '@angular/core';
import { LandingsServices } from './landings.service';
import { Section, SectionType } from '../models/section.model';

@Injectable({ providedIn: 'root' })
export class BuilderService {

  private landings = inject(LandingsServices);

  sections = signal<Section[]>([]);
  selectedSectionId = signal<string | null>(null);

 
  /* =========================
     LOAD / SYNC
     ========================= */

  loadFromActiveLanding() {
    const landing = this.landings.activeLanding();
    if (!landing) return;

    this.sections.set(landing.sections ?? []);
    this.selectedSectionId.set(null);
  }
  /* =========================
     ADD
     ========================= */

  addSection(type: SectionType) {
    const section: Section = {
      id: crypto.randomUUID(),
      type,
      data: this.defaultData(type),
    };

    this.sections.update(list => [...list, section]);
    this.sync();
  }

  /* =========================
     UPDATE (FIX DEFINITIVO)
     ========================= */

  updateSection(id: string, patch: any) {
    this.sections.update(list =>
      list.map(section =>
        section.id === id
          ? { ...section, data: { ...section.data, ...patch } }
          : section
      )
    );

    this.sync();
  }

  /* =========================
     SELECT
     ========================= */

  selectSection(section: Section | null) {
    this.selectedSectionId.set(section ? section.id : null);
  }

  selectedSection(): Section | null {
    return this.sections().find(s => s.id === this.selectedSectionId()) ?? null;
  }

  /* =========================
     MOVE
     ========================= */

  moveUp(section: Section) {
    this.sections.update(list => {
      const index = list.findIndex(s => s.id === section.id);
      if (index <= 0) return list;

      const newList = [...list];
      [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
      this.sync();
      return newList;
    });
  }

  moveDown(section: Section) {
    this.sections.update(list => {
      const index = list.findIndex(s => s.id === section.id);
      if (index >= list.length - 1) return list;

      const newList = [...list];
      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
      this.sync();
      return newList;
    });
  }

  /* =========================
     DUPLICATE
     ========================= */

  duplicateSection(section: Section) {
  const newSection: Section = {
    ...structuredClone(section),
    id: crypto.randomUUID(),
  };

  this.sections.update(list => {
    const index = list.findIndex(s => s.id === section.id);
    return [
      ...list.slice(0, index + 1),
      newSection,
      ...list.slice(index + 1),
    ];
  });

  // ✅ seleccionar correctamente
  this.selectedSectionId.set(newSection.id);

  this.sync();
}


  /* =========================
     DELETE
     ========================= */

   deleteSection(section: Section) {
    this.sections.update(list =>
      list.filter(s => s.id !== section.id)
    );

    this.selectSection(null);
    this.sync();
  }

  /* -------------------------
     SYNC
  ------------------------- */

  private sync() {
    this.landings.updateSections(this.sections());
  }


  /* =========================
     DEFAULT DATA
     ========================= */

  private defaultData(type: SectionType): any {
    switch (type) {
      case 'hero':
        return {
          title: 'Título',
          subtitle: 'Subtítulo',
          buttonText: 'Contáctanos',
          whatsappNumber: '',
          imageUrl: '',
        };

      case 'features':
        return {
          sectionTitle: 'Características',
          items: [
            { title: 'Feature 1', description: 'Descripción' },
          ],
        };

      case 'cta':
        return {
          title: 'Llamado a la acción',
          subtitle: '',
          buttonText: 'Escríbenos',
          whatsappNumber: '',
        };
    }
  }
}

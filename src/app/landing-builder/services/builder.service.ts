import { effect, Injectable, signal } from '@angular/core';
import { LandingSection } from '../models/landing-section.model';
import { LandingsServices } from './landings.service';

@Injectable({ providedIn: 'root' })

export class BuilderService {

  

  sections = signal<any[]>([]);
  selectedSection = signal<any | null>(null);

  constructor(private landings: LandingsServices) {

    // Cargar secciones cuando hay landing activa
    effect(() => {
      const landing = this.landings.activeLanding();
      if (landing) {
        this.sections.set(landing.sections ?? []);
        this.selectedSection.set(null);
      }
    });

    // Persistir automáticamente los cambios
    effect(() => {
      const landing = this.landings.activeLanding();
      if (!landing) return;
    
      this.landings.updateSections(this.sections());
    });
  }

  /* -------------------------
     Selection
  ------------------------- */

  selectSection(section: any) {
    this.selectedSection.set(section);
  }

  clearSelection() {
    this.selectedSection.set(null);
  }

  /* -------------------------
     Section operations
  ------------------------- */

  addSection(section: any) {
    this.sections.update(list => [...list, section]);
  }

  updateSection(updated: any) {
    this.sections.update(list =>
      list.map(s => s.id === updated.id ? updated : s)
    );
    this.selectedSection.set(updated);
  }

  removeSection(id: string) {
    this.sections.update(list => list.filter(s => s.id !== id));
    this.clearSelection();
  }

  reorderSections(sections: any[]) {
    this.sections.set(sections);
  }
  


  
  updateSectionProps(sectionId: string, newProps: any) {
    this.sections.update(sections =>
      sections.map(section =>
        section.id === sectionId
          ? { ...section, props: { ...section.props, ...newProps } }
          : section
      )
    );

    if (this.selectedSection()?.id === sectionId) {
      this.selectedSection.update(s => s ? { ...s, props: { ...s.props, ...newProps } } : s);
    }
  }

  updateSections(sections: LandingSection[]) {
    this.sections.set(sections);
  }

  duplicateSection(section: any) {
    const index = this.sections().findIndex(s => s.id === section.id);
    if (index === -1) return;
  
    const copy = {
      ...structuredClone(section),
      id: crypto.randomUUID()
    };
  
    this.sections.update(list => {
      const newList = [...list];
      newList.splice(index + 1, 0, copy);
      return newList;
    });
  
    this.selectSection(copy);
  }
  
  deleteSection(section: any) {
    this.sections.update(list => list.filter(s => s.id !== section.id));
    this.clearSelection();
  }
  
  moveUp(section: any) {
    this.swap(section, -1);
  }
  
  moveDown(section: any) {
    this.swap(section, 1);
  }
  
  private swap(section: any, direction: number) {
    this.sections.update(list => {
      const index = list.findIndex(s => s.id === section.id);
      const target = index + direction;
  
      if (target < 0 || target >= list.length) return list;
  
      const newList = [...list];
      [newList[index], newList[target]] = [newList[target], newList[index]];
      return newList;
    });
  }

 
  
  
  
}

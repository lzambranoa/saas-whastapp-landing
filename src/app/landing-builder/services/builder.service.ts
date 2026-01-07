import { Injectable, signal } from '@angular/core';
import { LandingSection } from '../models/landing-section.model';
import { BUILDER_STATE } from '../state/builder.state';

@Injectable({ providedIn: 'root' })
export class BuilderService {

  sections = signal<LandingSection[]>(BUILDER_STATE.sections);

  selectedSection = signal<LandingSection | null>(null);

  clearSelection() {
    this.selectedSection.set(null);
  }
  

  selectSection(section: LandingSection) {
    console.log('selectSection', section);
    this.selectedSection.set(section);
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

import { Injectable, signal } from '@angular/core';
import { LandingSection } from '../models/landing-section.model';
import { BUILDER_STATE } from '../state/builder.state';

@Injectable({ providedIn: 'root' })
export class BuilderService {

  sections = signal<LandingSection[]>(BUILDER_STATE.sections);

  selectedSection = signal<LandingSection | null>(null);

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
}

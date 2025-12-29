import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { BuilderService } from '../../services/builder.service';
import { FeaturesSection } from '../features-section/features-section';
import { FeaturesEditor } from './features-editor/features-editor';
import { LandingSection, BaseSection } from '../../models/landing-section.model';
import { FeaturesProps } from '../../models/features-section.model';

@Component({
  selector: 'app-section-editor',
  imports: [KeyValuePipe, FeaturesEditor],
  templateUrl: './section-editor.html',
  styleUrl: './section-editor.css',
})
export class SectionEditor {

  constructor(public builder: BuilderService) {}

  updateProp(key: string, value: any) {
    const section = this.builder.selectedSection();
    if (!section) return;

    this.builder.updateSectionProps(section.id, { [key]: value });
  }

  getFeaturesItems(section: LandingSection | null | undefined): any[] {
    if (!section || section.type !== 'features') return [];
    return (section as BaseSection<FeaturesProps>).props.items;
  }
}

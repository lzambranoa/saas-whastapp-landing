import { Component, computed } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { HeroEditor } from "../section-editor/hero-editor/hero-editor";
import { FeaturesEditor } from "../section-editor/features-editor/features-editor";
import { CtaEditor } from "../section-editor/cta-editor/cta-editor";
import { LandingSection, BaseSection } from '../../models/landing-section.model';
import { HeroProps } from '../../models/hero-section.model';
import { FeaturesProps } from '../../models/features-section.model';
import { CtaProps } from '../../models/cta-section.model';

@Component({
  selector: 'app-editor-panel',
  imports: [HeroEditor, FeaturesEditor, CtaEditor],
  templateUrl: './editor-panel.html',
  styleUrl: './editor-panel.css',
})
export class EditorPanel {

  // IMPORTANTE: referencia directa al signal
  selectedSection = computed(() => this.builder.selectedSection());
  
  constructor(private builder: BuilderService) {}

  getHeroProps(section: LandingSection | null): HeroProps | null {
    if (!section || section.type !== 'hero') return null;
    return (section as BaseSection<HeroProps>).props;
  }

  getFeaturesProps(section: LandingSection | null): FeaturesProps | null {
    if (!section || section.type !== 'features') return null;
    return (section as BaseSection<FeaturesProps>).props;
  }

  getCtaProps(section: LandingSection | null): CtaProps | null {
    if (!section || section.type !== 'cta') return null;
    return (section as BaseSection<CtaProps>).props;
  }
}

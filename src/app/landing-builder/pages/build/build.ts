import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { TestimonialsSection } from '../../components/testimonials-section/testimonials-section';
import { GallerySection } from '../../components/gallery-section/gallery-section';
import { SectionEditor } from '../../components/section-editor/section-editor';
import { BUILDER_STATE } from '../../state/builder.state';
import { LandingSection, BaseSection } from '../../models/landing-section.model';
import { HeroProps } from '../../models/hero-section.model';
import { FeaturesProps } from '../../models/features-section.model';
import { CtaProps } from '../../models/cta-section.model';
import { BuilderService } from '../../services/builder.service';

@Component({
  selector: 'app-build',
  imports: [HeroSection, 
            FeaturesSection, 
            CtaSection, 
            SectionEditor],
  templateUrl: './build.html',
  styleUrl: './build.css',
})
export class BuildPage {

  constructor(public builder: BuilderService){}
  
  sections: LandingSection[] = BUILDER_STATE.sections;

  getHeroProps(section: LandingSection): HeroProps {
    return (section as BaseSection<HeroProps>).props;
  }

  getFeaturesProps(section: LandingSection): FeaturesProps {
    return (section as BaseSection<FeaturesProps>).props;
  }

  getCtaProps(section: LandingSection): CtaProps {
    return (section as BaseSection<CtaProps>).props;
  }
}

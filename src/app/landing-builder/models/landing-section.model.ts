import { HeroProps } from './hero-section.model';
import { FeaturesProps } from './features-section.model';
import { GalleryProps } from './gallery-section.model';
import { TestimonialsProps } from './testimonials-section.model';
import { CtaProps } from './cta-section.model';

export type SectionType =
  | 'hero'
  | 'features'
  | 'gallery'
  | 'testimonials'
  | 'cta';

export interface BaseSection<T = any> {
  id: string;
  type: SectionType;
  data: T;
}

export type LandingSection =
  | BaseSection<HeroProps>
  | BaseSection<FeaturesProps>
  | BaseSection<GalleryProps>
  | BaseSection<TestimonialsProps>
  | BaseSection<CtaProps>;

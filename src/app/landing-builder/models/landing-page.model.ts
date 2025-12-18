import { LandingSection } from './landing-section.model';

export interface LandingPage {
  id: string;
  slug: string;
  title: string;
  sections: LandingSection[];
  createdAt: Date;
  updatedAt: Date;
}

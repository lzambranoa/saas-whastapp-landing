export type SectionType = 'hero' | 'features' | 'cta';

export interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
  whatsappNumber: string;
  imageUrl: string;
}

export interface FeaturesProps {
  sectionTitle: string;
  items: { title: string; icon: string; description: string }[];
}

export interface CtaProps {
  title: string;
  subtitle: string;
  buttonText: string;
  whatsappNumber: string;
}

export type Section =
  | { id: string; type: 'hero'; data: HeroProps }
  | { id: string; type: 'features'; data: FeaturesProps }
  | { id: string; type: 'cta'; data: CtaProps };

export interface FeatureItem {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface FeaturesProps {
    sectionTitle: string;
    items: FeatureItem[];
  }
  
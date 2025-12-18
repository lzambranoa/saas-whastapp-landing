export interface GalleryImage {
    src: string;
    alt?: string;
  }
  
  export interface GalleryProps {
    sectionTitle: string;
    images: GalleryImage[];
  }
  
import { Component, Input } from '@angular/core';

export interface GalleryImage {
  src: string;
  alt?: string;
}

@Component({
  selector: 'app-gallery-section',
  imports: [],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.css',
})
export class GallerySection {

  @Input() sectionTitle: string = 'Nuestro trabajo';

  @Input() images: GalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      alt: 'Trabajo 1'
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      alt: 'Trabajo 2'
    },
    {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      alt: 'Trabajo 3'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786',
      alt: 'Trabajo 4'
    }
  ];
}

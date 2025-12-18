import { Component, Input } from '@angular/core';

export interface TestimonialItem {
  name: string;
  role?: string;
  message: string;
  avatarUrl?: string;
}

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection {
  @Input() sectionTitle: string = 'Lo que dicen nuestros clientes';

  @Input() testimonials: TestimonialItem[] = [
    {
      name: 'Carlos Pérez',
      role: 'Emprendedor',
      message: 'Desde que uso esta landing mis clientes me escriben directamente por WhatsApp.',
    },
    {
      name: 'Laura Gómez',
      role: 'Marketing Digital',
      message: 'Simple, rápida y enfocada en convertir. Exactamente lo que necesitaba.',
    },
    {
      name: 'Andrés Ruiz',
      role: 'Consultor',
      message: 'En minutos tenía una landing profesional lista para campañas.',
    },
  ];
}

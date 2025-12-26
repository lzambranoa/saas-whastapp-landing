import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  @Input() title: string = 'Título principal de la landing';
  @Input() subtitle: string = 'Subtítulo o descripción breve del servicio';
  @Input() buttonText: string = 'Hablar por WhatsApp';
  @Input() whatsappNumber: string = '573001112233';
  @Input() imageUrl?: string; 
}

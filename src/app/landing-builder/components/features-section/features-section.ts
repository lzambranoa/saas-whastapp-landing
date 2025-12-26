import { Component, Input } from '@angular/core';

export interface FeatureItem {
  icon: String,
  title: String,
  description: String
}

@Component({
  selector: 'app-features-section',
  imports: [],
  templateUrl: './features-section.html',
  styleUrl: './features-section.css',
})
export class FeaturesSection {

  @Input() sectionTitle: string = "¿Porque elegirnos?";

  @Input() items: FeatureItem[] = [
    {
      icon: '💬',
      title: 'Integración WhatsApp',
      description: 'Recibe clientes directamente en tu WhatsApp de forma inmediata.'
    },
    {
      icon: '⚡',
      title: 'Carga ultrarrápida',
      description: 'Optimizada para velocidad, perfecta para campañas de tráfico.'
    },
    {
      icon: '🎯',
      title: 'Alta conversión',
      description: 'Diseños pensados para convertir visitantes en clientes.'
    }
  ];
}

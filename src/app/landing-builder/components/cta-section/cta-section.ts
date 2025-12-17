import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  imports: [],
  templateUrl: './cta-section.html',
  styleUrl: './cta-section.css',
})
export class CtaSection {

  @Input() title: string = '¿Listo para empezar?';
  @Input() subtitle: string = 'Habla con nosotros ahora y recibe atención inmediata.';
  @Input() buttonText: string = 'Escríbenos por WhatsApp';
  @Input() whatsappNumber: string = '573001112233';
}

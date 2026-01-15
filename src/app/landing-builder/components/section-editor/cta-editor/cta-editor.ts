import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { CtaProps } from '../../../models/cta-section.model';

@Component({
  selector: 'app-cta-editor',
  imports: [],
  templateUrl: './cta-editor.html',
  styleUrl: './cta-editor.css',
})
export class CtaEditor {

  @Input() section!: any;

  constructor(private builder: BuilderService) {}

  update(key: keyof CtaProps, value: string) {
    this.builder.updateSection({
      ...this.section,
      data: {
        ...this.section.data,
        [key]: value
      }
    });
  }
}





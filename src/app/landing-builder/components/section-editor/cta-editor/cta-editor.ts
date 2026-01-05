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

  @Input() sectionId!: string;
  @Input() props!: CtaProps;

  constructor(private builder: BuilderService) {}

  update(key: keyof CtaProps, value: string) {
    this.builder.updateSectionProps(this.sectionId, {
      [key]: value
    });
  }

}


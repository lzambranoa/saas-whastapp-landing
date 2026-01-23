import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { CtaProps } from '../../../models/section.model';

@Component({
  selector: 'app-cta-editor',
  templateUrl: './cta-editor.html',
})
export class CtaEditor {

  @Input({ required: true }) section!: {
    id: string;
    data: CtaProps;
  };

  constructor(private builder: BuilderService) {}

  update<K extends keyof CtaProps>(key: K, value: CtaProps[K]) {
    this.builder.updateSection(this.section.id, {
      [key]: value,
    });
  }
}

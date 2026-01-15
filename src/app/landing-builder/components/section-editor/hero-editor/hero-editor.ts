import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.html'
})
export class HeroEditor {

  @Input() section!: any;

  constructor(private builder: BuilderService) {}

  update(key: string, value: any) {
    this.builder.updateSection({
      ...this.section,
      data: {
        ...this.section.data,
        [key]: value
      }
    });
  }
}

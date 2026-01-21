import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.html'
})
export class HeroEditor {

  @Input({ required: true }) section!: any;

  constructor(private builder: BuilderService) {}

  update(key: string, value: any) {
    this.builder.updateSection(this.section.id, {
      title: value
    });
    
  }
}

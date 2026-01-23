import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { HeroProps } from '../../../models/hero-section.model';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.html'
})
export class HeroEditor {

  @Input({ required: true }) section!: any;

  constructor(private builder: BuilderService) {}

  update(key: keyof HeroProps, value: any) {
  this.builder.updateSection(
    this.section.id,
    { [key]: value }
  );
}
}

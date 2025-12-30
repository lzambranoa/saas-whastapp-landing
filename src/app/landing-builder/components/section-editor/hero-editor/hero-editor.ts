import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { HeroProps } from '../../../models/hero-section.model';

@Component({
  selector: 'app-hero-editor',
  imports: [],
  templateUrl: './hero-editor.html',
  styleUrl: './hero-editor.css',
})
export class HeroEditor {

  
  @Input() sectionId!: string;
  @Input() props!: HeroProps;

  constructor(private builder: BuilderService) {}

  update(key: keyof HeroProps, value: string) {
    this.builder.updateSectionProps(this.sectionId, {
      [key]: value
    });
  }

}

import { Component, Input } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-section-wrapper',
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './section-wrapper.html',
  styleUrl: './section-wrapper.css',
})
export class SectionWrapper {
  @Input({ required: true }) section!: any;

  constructor(public builder: BuilderService) {}

  select() {
    this.builder.selectSection(this.section);
  }

  isSelected(): boolean {
    return this.builder.selectedSection()?.id === this.section.id;
  }
}

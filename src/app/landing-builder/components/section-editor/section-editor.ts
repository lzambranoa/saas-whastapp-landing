import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { BuilderService } from '../../services/builder.service';

@Component({
  selector: 'app-section-editor',
  imports: [KeyValuePipe],
  templateUrl: './section-editor.html',
  styleUrl: './section-editor.css',
})
export class SectionEditor {

  constructor(public builder: BuilderService) {}

  updateProp(key: string, value: any) {
    const section = this.builder.selectedSection();
    if (!section) return;

    this.builder.updateSectionProps(section.id, { [key]: value });
  }
}

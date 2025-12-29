import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';

@Component({
  selector: 'app-features-editor',
  imports: [],
  templateUrl: './features-editor.html',
  styleUrl: './features-editor.css',
})
export class FeaturesEditor {

  @Input() sectionId!: string;
  @Input() items: any[] = [];

  constructor(private builder: BuilderService) {}

  updateItem(index: number, key: string, value: string) {
    const updated = [...this.items];
    updated[index] = { ...updated[index], [key]: value };

    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }

  addItem() {
    const updated = [...this.items, { icon: '⭐', title: '', description: '' }];
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }

  removeItem(index: number) {
    const updated = this.items.filter((_, i) => i !== index);
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }


}

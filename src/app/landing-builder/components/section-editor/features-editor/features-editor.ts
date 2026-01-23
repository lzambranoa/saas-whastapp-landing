import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { FeaturesProps } from '../../../models/section.model';

@Component({
  selector: 'app-features-editor',
  templateUrl: './features-editor.html',
})
export class FeaturesEditor {

  @Input({ required: true }) section!: {
    id: string;
    data: FeaturesProps;
  };

  constructor(private builder: BuilderService) {}

  updateSectionTitle(value: string) {
    this.builder.updateSection(this.section.id, {
      sectionTitle: value,
    });
  }

  updateItemTitle(index: number, value: string) {
    const items = [...this.section.data.items];
    items[index] = { ...items[index], title: value };

    this.builder.updateSection(this.section.id, { items });
  }

  updateItemDescription(index: number, value: string) {
    const items = [...this.section.data.items];
    items[index] = { ...items[index], description: value };

    this.builder.updateSection(this.section.id, { items });
  }

  updateItemIcon(index: number, value: string) {
    const items = [...this.section.data.items];
    items[index] = { ...items[index], icon: value };

    this.builder.updateSection(this.section.id, { items });
  }

  addItem() {
    const items = [
      ...this.section.data.items,
      { title: '', icon: '', description: '' },
    ];

    this.builder.updateSection(this.section.id, { items });
  }

  removeItem(index: number) {
    const items = this.section.data.items.filter((_, i) => i !== index);
    this.builder.updateSection(this.section.id, { items });
  }
}

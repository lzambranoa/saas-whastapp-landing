import { Component, Input } from '@angular/core';
import { BuilderService } from '../../../services/builder.service';
import { CdkDragDrop, moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-features-editor',
  imports: [DragDropModule],
  templateUrl: './features-editor.html',
  styleUrl: './features-editor.css',
})
export class FeaturesEditor {

  @Input() sectionId!: string;
  @Input() items: any[] = [];

  constructor(private builder: BuilderService) {}

  drop(event: CdkDragDrop<any[]>) {
    const updated = [...this.items];
    moveItemInArray(updated, event.previousIndex, event.currentIndex);
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }

  updateItem(index: number, key: string, value: string) {
    const updated = [...this.items];
    updated[index] = { ...updated[index], [key]: value };
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }

  /*
  addItem() {
    const updated = [...this.items, { icon: '⭐', title: '', description: '' }];
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }

  removeItem(index: number) {
    const updated = this.items.filter((_, i) => i !== index);
    this.builder.updateSectionProps(this.sectionId, { items: updated });
  }
*/

}

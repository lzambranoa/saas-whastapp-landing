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

  @Input() section!: any;

  constructor(private builder: BuilderService) {}

  drop(event: CdkDragDrop<any[]>) {
    const updatedItems = [...this.section.data.items];
    moveItemInArray(updatedItems, event.previousIndex, event.currentIndex);

    this.builder.updateSection({
      ...this.section,
      data: {
        ...this.section.data,
        items: updatedItems
      }
    });
  }

  updateItem(index: number, key: string, value: string) {
    const updatedItems = [...this.section.data.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [key]: value
    };

    this.builder.updateSection({
      ...this.section,
      data: {
        ...this.section.data,
        items: updatedItems
      }
    });
  }
}




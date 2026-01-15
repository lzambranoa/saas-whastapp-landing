import { Component, computed } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { HeroEditor } from "../section-editor/hero-editor/hero-editor";
import { FeaturesEditor } from "../section-editor/features-editor/features-editor";
import { CtaEditor } from "../section-editor/cta-editor/cta-editor";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-panel',
  templateUrl: './editor-panel.html',
  imports: [HeroEditor, FeaturesEditor, CtaEditor, CommonModule]
})
export class EditorPanel {

  selectedSection = computed(() => this.builder.selectedSection());

  constructor(public builder: BuilderService) {}
}

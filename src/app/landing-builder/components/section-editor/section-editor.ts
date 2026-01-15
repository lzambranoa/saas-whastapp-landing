import { Component } from '@angular/core';
import { BuilderService } from '../../services/builder.service';
import { FeaturesEditor } from './features-editor/features-editor';
import { HeroEditor } from './hero-editor/hero-editor';
import { CtaEditor } from "./cta-editor/cta-editor";

@Component({
  selector: 'app-section-editor',
  imports: [ FeaturesEditor, HeroEditor, CtaEditor],
  templateUrl: './section-editor.html',
  styleUrl: './section-editor.css',
})
export class SectionEditor {

  constructor(public builder: BuilderService) {}

}

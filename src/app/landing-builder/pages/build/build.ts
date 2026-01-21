import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { BuilderService } from '../../services/builder.service';
import { LandingsServices } from '../../services/landings.service';

import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { EditorPanel } from '../../components/editor-panel/editor-panel';
import { SectionWrapper } from '../../components/section-wrapper/section-wrapper';

@Component({
  selector: 'app-build',
  standalone: true,
  imports: [
    HeroSection,
    FeaturesSection,
    CtaSection,
    DragDropModule,
    EditorPanel,
    SectionWrapper
  ],
  templateUrl: './build.html',
  styleUrl: './build.css',
})
export class BuildPage implements OnInit {

  private route = inject(ActivatedRoute);
  private landings = inject(LandingsServices);

  constructor(public builder: BuilderService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    // 1️⃣ seleccionar landing activa
    this.landings.select(id);

    // 2️⃣ cargar secciones en el builder
    this.builder.loadFromActiveLanding();
  }

  /* =========================
     REORDER
     ========================= */

  onSectionDrop(event: CdkDragDrop<any[]>) {
    if (event.previousIndex === event.currentIndex) return;

    const sections = [...this.builder.sections()];
    moveItemInArray(sections, event.previousIndex, event.currentIndex);
    this.builder.sections.set(sections);

    // mantener selección
    const selected = this.builder.selectedSection();
    if (selected) {
      this.builder.selectSection(
        sections.find(s => s.id === selected.id) ?? null
      );
    }

    // sincronizar
    this.landings.updateSections(sections);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { SectionEditor } from '../../components/section-editor/section-editor';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BuilderService } from '../../services/builder.service';
import { LandingSection, BaseSection } from '../../models/landing-section.model';
import { HeroProps } from '../../models/hero-section.model';
import { FeaturesProps } from '../../models/features-section.model';
import { CtaProps } from '../../models/cta-section.model';
import { EditorPanel } from "../../components/editor-panel/editor-panel";
import { SectionWrapper } from "../../components/section-wrapper/section-wrapper";
import { ActivatedRoute } from '@angular/router';
import { LandingsServices } from '../../services/landings.service';

@Component({
  selector: 'app-build',
  imports: [HeroSection,
    FeaturesSection,
    CtaSection,
    DragDropModule, EditorPanel, SectionWrapper],
  templateUrl: './build.html',
  styleUrl: './build.css',
})
export class BuildPage implements OnInit{

  
  private route = inject(ActivatedRoute);
  private landings = inject(LandingsServices);

  constructor(public builder: BuilderService) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // this.landings.select(id);
      this.builder.loadLanding(id);
    }
  }


  getHeroProps(section: LandingSection): HeroProps {
    return (section as BaseSection<HeroProps>).props;
  }

  getFeaturesProps(section: LandingSection): FeaturesProps {
    return (section as BaseSection<FeaturesProps>).props;
  }

  getCtaProps(section: LandingSection): CtaProps {
    return (section as BaseSection<CtaProps>).props;
  }

  /**
   * Reordena las secciones del landing
   */
  onSectionDrop(event: CdkDragDrop<any[]>) {
    if (event.previousIndex === event.currentIndex) {
      return;
    }

    const sections = [...this.builder.sections()];
    moveItemInArray(sections, event.previousIndex, event.currentIndex);
    this.builder.sections.set(sections);

    // Mantener selección después del reorder
    const selectedId = this.builder.selectedSection()?.id;
    if (selectedId) {
      const found = sections.find(s => s.id === selectedId);
      if (found) {
        this.builder.selectSection(found);
      }
    }
  }
}

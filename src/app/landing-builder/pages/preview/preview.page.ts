import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RenderService } from '../../services/render.service';

import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { BuilderNavbar } from "../../components/builder-navbar/builder-navbar/builder-navbar";

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    HeroSection,
    FeaturesSection,
    CtaSection,
    BuilderNavbar
],
  templateUrl: './preview.page.html',
})
export class PreviewPage implements OnInit {

  private route = inject(ActivatedRoute);
  render = inject(RenderService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.render.loadLanding(id);
  }
}

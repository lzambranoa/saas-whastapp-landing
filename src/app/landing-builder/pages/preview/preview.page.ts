import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { LandingsServices } from '../../services/landings.service';
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
  landings = inject(LandingsServices);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    // 🔑 misma landing, misma fuente de verdad
    this.landings.select(id);
  }
}

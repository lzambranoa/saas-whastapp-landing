import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';

@Component({
  selector: 'app-build',
  imports: [HeroSection, FeaturesSection, CtaSection],
  templateUrl: './build.html',
  styleUrl: './build.css',
})
export class BuildPage {

}

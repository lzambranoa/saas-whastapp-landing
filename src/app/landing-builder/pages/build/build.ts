import { Component } from '@angular/core';
import { HeroSection } from '../../components/hero-section/hero-section';
import { FeaturesSection } from '../../components/features-section/features-section';
import { CtaSection } from '../../components/cta-section/cta-section';
import { TestimonialsSection } from '../../components/testimonials-section/testimonials-section';
import { GallerySection } from '../../components/gallery-section/gallery-section';

@Component({
  selector: 'app-build',
  imports: [HeroSection, 
            FeaturesSection, 
            CtaSection, 
            TestimonialsSection,
            GallerySection],
  templateUrl: './build.html',
  styleUrl: './build.css',
})
export class BuildPage {

}

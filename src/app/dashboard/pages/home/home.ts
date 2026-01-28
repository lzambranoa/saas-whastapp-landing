  import { Component, inject } from '@angular/core';
  import { Router } from '@angular/router';
  import { LandingsServices } from '../../../landing-builder/services/landings.service';
  import { DatePipe } from '@angular/common';
import { Navbar } from "../../../layout/components/navbar/navbar";

  @Component({
    selector: 'app-home',
    imports: [DatePipe, Navbar],
    templateUrl: './home.html',
    styleUrl: './home.css',
  })
  export class Home {
    
  landings = inject(LandingsServices);
  private router = inject(Router);

  createLanding() {
    const landing = this.landings.create('Nueva Landing');
    this.openLanding(landing.id);
  }

  openLanding(id: string) {
    // 🚨 NAVEGACIÓN ABSOLUTA (OBLIGATORIA)
    this.router.navigate(['/builder', id]);
    }
  }
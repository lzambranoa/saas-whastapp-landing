  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { LandingsServices } from '../../../landing-builder/services/landings.service';
  import { DatePipe } from '@angular/common';

  @Component({
    selector: 'app-home',
    imports: [DatePipe],
    templateUrl: './home.html',
    styleUrl: './home.css',
  })
  export class Home {
    constructor(
      public landings: LandingsServices,
      private router: Router
    ) {}

    createLanding() {
      const landing = this.landings.create('Nueva Landing');
      this.router.navigate(['/dashboard/builder', landing.id]);
    }

    openLanding(id: string) {
      console.log(id)
      this.landings.select(id);
      this.router.navigate(['/dashboard/builder', id]);
    }
  }

import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-builder-navbar',
  imports: [],
  templateUrl: './builder-navbar.html',
  styleUrl: './builder-navbar.css',
})
export class BuilderNavbar {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

   get isPreview(): boolean {
    return this.router.url.includes('/preview');
  }

  goEdit() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  goPreview() {
    this.router.navigate(['preview'], { relativeTo: this.route });
  }

  goBack() {
    this.router.navigate(['/dashboard/home']);
  }
}

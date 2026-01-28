import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-builder-navbar',
  imports: [RouterModule],
  templateUrl: './builder-navbar.html',
  styleUrl: './builder-navbar.css',
})
export class BuilderNavbar {

  private route = inject(ActivatedRoute);

  landingId = computed(() =>
    this.route.snapshot.paramMap.get('id')
  );
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LandingsServices } from '../../../landing-builder/services/landings.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(public landings: LandingsServices) {}
}

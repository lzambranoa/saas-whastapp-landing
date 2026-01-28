import { Injectable, signal } from '@angular/core';
import { LandingsServices } from './landings.service';
import { Section } from '../models/section.model';

@Injectable({
  providedIn: 'root',
})
export class RenderService {

  private readonly sectionsSignal = signal<Section[]>([]);

  constructor(private landings: LandingsServices) {}

  /* =========================
     LOAD
     ========================= */

  loadLanding(landingId: string) {
    const landing = this.landings
      .landings()
      .find(l => l.id === landingId);

    if (!landing) {
      this.sectionsSignal.set([]);
      return;
    }

    // ⚠️ CLONE defensivo (render nunca muta)
    this.sectionsSignal.set(
      structuredClone(landing.sections)
    );
  }

  /* =========================
     READ ONLY
     ========================= */

  sections() {
    return this.sectionsSignal();
  }

  /* =========================
     CLEANUP
     ========================= */

  clear() {
    this.sectionsSignal.set([]);
  }
}

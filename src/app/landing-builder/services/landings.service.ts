import { Injectable, signal } from '@angular/core';
import { Section } from '../models/section.model';

export interface Landing {
  id: string;
  name: string;
  sections: Section[];
  updatedAt: number;
}

@Injectable({
  providedIn: 'root',
})
export class LandingsServices {

  private readonly STORAGE_KEY = 'landing-builder-landings';

  /* -------------------------
     State
  ------------------------- */

  landings = signal<Landing[]>(this.load());
  activeLanding = signal<Landing | null>(null);

  /* -------------------------
     Persistence
  ------------------------- */

  private load(): Landing[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private save() {
    localStorage.setItem(
      this.STORAGE_KEY,
      JSON.stringify(this.landings())
    );
  }

  /* -------------------------
     CRUD
  ------------------------- */

  create(name: string): Landing {
    const landing: Landing = {
      id: crypto.randomUUID(),
      name,
      sections: [],
      updatedAt: Date.now(),
    };

    this.landings.update(list => [...list, landing]);
    this.save();

    // opcional: dejarla activa al crear
    this.activeLanding.set(landing);

    return landing;
  }

  select(id: string) {
    const landing = this.landings().find(l => l.id === id) ?? null;
    this.activeLanding.set(landing);
  }

  updateSections(sections: Section[]) {
    const current = this.activeLanding();
    if (!current) return;

    const updated: Landing = {
      ...current,
      sections,
      updatedAt: Date.now(),
    };

    this.landings.update(list =>
      list.map(l => (l.id === updated.id ? updated : l))
    );

    this.activeLanding.set(updated);
    this.save();
  }

  /* -------------------------
     Helpers
  ------------------------- */

  getActiveSections(): Section[] {
    return this.activeLanding()?.sections ?? [];
  }
}

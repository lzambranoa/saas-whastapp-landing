import { effect, Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'landings';

@Injectable({ providedIn: 'root' })
export class BuilderService {

  sections = signal<any[]>([]);
  selectedSectionId = signal<string | null>(null);
  currentLandingId: string | null = null;

  /* =========================
     STORAGE
     ========================= */

  private getAllLandings(): any[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  private saveAllLandings(landings: any[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(landings));
  }

  /* =========================
     LOAD LANDING
     ========================= */

  loadLanding(id: string) {
    const landings = this.getAllLandings();
    const landing = landings.find(l => l.id === id);

    if (!landing) return;

    this.currentLandingId = id;
    this.sections.set(landing.sections || []);
    this.selectedSectionId.set(null);
  }

  private persistLanding() {
    if (!this.currentLandingId) return;

    const landings = this.getAllLandings();
    const index = landings.findIndex(l => l.id === this.currentLandingId);

    if (index === -1) return;

    landings[index] = {
      ...landings[index],
      sections: this.sections()
    };

    this.saveAllLandings(landings);
  }

  /* =========================
     SELECTION
     ========================= */

  selectSection(section: any | null) {
    this.selectedSectionId.set(section ? section.id : null);
  }

  selectedSection() {
    return this.sections().find(
      s => s.id === this.selectedSectionId()
    ) ?? null;
  }

  /* =========================
     CRUD SECTIONS
     ========================= */

  addSection(type: string, data: any = {}) {
    const section = {
      id: crypto.randomUUID(),
      type,
      data
    };

    this.sections.update(list => [...list, section]);
    this.persistLanding();
  }

  updateSection(section: any) {
    this.sections.update(list =>
      list.map(s => s.id === section.id ? section : s)
    );

    this.persistLanding();
  }

  deleteSection(section: any) {
    this.sections.update(list =>
      list.filter(s => s.id !== section.id)
    );

    this.selectSection(null);
    this.persistLanding();
  }

  duplicateSection(section: any) {
    const index = this.sections().findIndex(s => s.id === section.id);
    if (index === -1) return;

    const copy = {
      ...structuredClone(section),
      id: crypto.randomUUID()
    };

    this.sections.update(list => {
      const next = [...list];
      next.splice(index + 1, 0, copy);
      return next;
    });

    this.selectSection(copy);
    this.persistLanding();
  }

  moveUp(section: any) {
    this.swap(section, -1);
  }

  moveDown(section: any) {
    this.swap(section, 1);
  }

  getSelectedSection() {
    return this.sections().find(
      s => s.id === this.selectedSectionId()
    );
  }

  private swap(section: any, dir: number) {
    this.sections.update(list => {
      const index = list.findIndex(s => s.id === section.id);
      const target = index + dir;

      if (target < 0 || target >= list.length) return list;

      const next = [...list];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });

    this.persistLanding();
  }
}




import { Location } from '@angular/common';
import { Component, HostListener, input, OnInit, output } from '@angular/core';

import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-navigation',
  imports: [SharedModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
  // Mets à jour activeId dès que le fragment change (scroll spy, clic, etc.)
  @HostListener('window:hashchange')
  @HostListener('window:section-fragment-change')
  public onHashChange() {
    this._updateActiveFromUrl();
  }

  public readonly isTest = input.required<boolean>();
  public readonly needHide = input.required<boolean>();
  public readonly outReset = output();

  public sections: { id: string; label: string }[] = [
    { id: 'intro', label: 'Introduction' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'passions', label: 'Passions' },
    { id: 'projets', label: 'Projets' },
    { id: 'personnalite', label: 'Personnalité' },
    { id: 'couple', label: 'Couple' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'sexe', label: 'Sexe' },
    { id: 'contact', label: 'Contact' },
  ];

  public activeId: string;

  constructor(private _location: Location) {}

  public ngOnInit() {
    this._updateActiveFromUrl();
  }

  public hasNoPrev() {
    return this.sections.findIndex(s => s.id === this.activeId) === 0;
  }

  public hasNoNext() {
    return this.sections.findIndex(s => s.id === this.activeId) === this.sections.length - 1;
  }

  public reset() {
    this.outReset.emit();
  }

  public getLabel(direction: 'prev' | 'next') {
    const index = this.sections.findIndex(s => s.id === this.activeId);
    const targetIndex = direction === 'prev' ? index - 1 : index + 1;
    return this.sections[targetIndex]?.label || '';
  }

  public getHash(direction: 'prev' | 'next') {
    const index = this.sections.findIndex(s => s.id === this.activeId);
    const targetIndex = direction === 'prev' ? index - 1 : index + 1;
    return '#' + (this.sections[targetIndex]?.id || '');
  }

  private _updateActiveFromUrl() {
    // Inclut le hash grâce à `true`
    const full = this._location.path(true); // ex: "/route?x=1#couple"
    const hash = full.split('#')[1] || '';
    // Si pas de hash ou hash inconnu, on prend la première section
    this.activeId = this.sections.some(s => s.id === hash) ? hash : this.sections[0].id;
  }
}

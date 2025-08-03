import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

import { PageTitles } from '@src/models/pages.model';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-header',
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this._toggleOverflowHidden();
  }

  public pages = PageTitles;
  public showSubmenu = false;

  public sections = [
    { id: 'musiques-jeux-films', title: 'Mes Passions', icon: '🎵' },
    { id: 'galerie', title: 'Galerie Photo', icon: '📸' },
    { id: 'en-couple', title: 'En Couple', icon: '💕' },
    { id: 'qualites-defauts', title: 'Qualités & Défauts', icon: '👤' },
    { id: 'ce-que-je-recherche', title: 'Ce Que Je Recherche', icon: '🔍' },
    { id: 'section-hot', title: 'Section + Hot', icon: '🔥' },
  ];

  public activeOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'ignored',
    fragment: 'exact',
  };

  constructor(@Inject(PLATFORM_ID) private _platformId: object) {}

  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public openMenu() {
    this.showSubmenu = true;
    this._toggleOverflowHidden();
  }

  public closeMenu() {
    this.showSubmenu = false;
    this._toggleOverflowHidden();
  }

  private _toggleOverflowHidden() {
    if (isPlatformBrowser(this._platformId)) {
      const overflowHidden = this.showSubmenu && window.innerWidth <= 674;
      if (overflowHidden) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}

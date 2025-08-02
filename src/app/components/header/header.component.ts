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

  public activeOptions: IsActiveMatchOptions = {
    paths: 'exact',
    matrixParams: 'exact',
    queryParams: 'ignored',
    fragment: 'exact',
  };

  constructor(@Inject(PLATFORM_ID) private _platformId: object) {}

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

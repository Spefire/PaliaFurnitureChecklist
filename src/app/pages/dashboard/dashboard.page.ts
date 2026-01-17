import { Component } from '@angular/core';

import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'dashboard-page',
  imports: [MainLayoutBlockComponent, MainLayoutComponent],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  public pages = PageTitles;
}

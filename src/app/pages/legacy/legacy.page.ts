import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '@lucca-front/ng/button';
import { ContainerComponent } from '@lucca-front/ng/container';
import { IconComponent } from '@lucca-front/ng/icon';
import { LinkComponent } from '@lucca-front/ng/link';
import { MainLayoutBlockComponent, MainLayoutComponent } from '@lucca-front/ng/main-layout';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'legacy-page',
  imports: [RouterLink, MainLayoutBlockComponent, MainLayoutComponent, PageHeaderComponent, ContainerComponent, ButtonComponent, LinkComponent, IconComponent],
  templateUrl: './legacy.page.html',
})
export class LegacyPage {
  public pages = PageTitles;
}

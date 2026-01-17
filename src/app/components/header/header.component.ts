import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonComponent } from '@lucca-front/ng/button';
import { LuDropdownItemDirective, LuDropdownPanelComponent, LuDropdownTriggerDirective } from '@lucca-front/ng/dropdown';
import { IconComponent } from '@lucca-front/ng/icon';

import { PageTitles } from '@src/models/pages.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, LuDropdownTriggerDirective, LuDropdownPanelComponent, LuDropdownItemDirective, ButtonComponent, IconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public pages = PageTitles;
}

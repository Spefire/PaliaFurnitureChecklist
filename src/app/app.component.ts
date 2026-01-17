import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppLayoutComponent } from '@lucca-front/ng/app-layout';

import { HeaderComponent } from '@src/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppLayoutComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}

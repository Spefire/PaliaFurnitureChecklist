import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'welcome-guests',
  imports: [SharedModule, CardComponent],
  templateUrl: './welcome-guests.component.html',
  styleUrl: '../welcome.page.scss',
})
export class WelcomeGuestsComponent {}

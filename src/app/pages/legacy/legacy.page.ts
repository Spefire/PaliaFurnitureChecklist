import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'legacy-page',
  imports: [SharedModule, CardComponent],
  templateUrl: './legacy.page.html',
  styleUrl: './legacy.page.scss',
})
export class LegacyPage {}

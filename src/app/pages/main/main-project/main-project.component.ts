import { Component } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-project',
  imports: [SharedModule, CardComponent],
  templateUrl: './main-project.component.html',
  styleUrl: './main-project.component.scss',
})
export class MainProjectComponent {}

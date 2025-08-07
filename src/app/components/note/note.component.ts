import { Component, input } from '@angular/core';

import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-note',
  imports: [SharedModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
})
export class NoteComponent {
  public readonly heading = input<string>();
}

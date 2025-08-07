import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-header',
  imports: [SharedModule, NoteComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {}

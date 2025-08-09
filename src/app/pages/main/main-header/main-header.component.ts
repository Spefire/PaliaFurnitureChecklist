import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-header',
  imports: [SharedModule, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {}

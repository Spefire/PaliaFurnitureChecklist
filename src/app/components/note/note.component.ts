import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'app-note',
  imports: [SharedModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {
  public readonly icon = input<string>();
  public readonly heading = input<string>();
  public readonly isDark = input<boolean>();
  public readonly isSmall = input<boolean>();
}

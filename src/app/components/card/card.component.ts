import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public readonly heading = input<string>();
  public readonly subtitle = input<string>();
  public readonly isMain = input<boolean>();
  public readonly isSubMain = input<boolean>();
  public readonly isCenter = input<boolean>();
}

import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { TestState } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-contact',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-contact.component.html',
  styleUrl: './main-contact.component.scss',
})
export class MainContactComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outReset = output();

  public test: TestState;
  public score: number;
  public tier: CompatibilityTier;

  public friendsTiers: CompatibilityTier[] = [
    {
      min: 0,
      max: 25,
      showContact: false,
      title: '🙈​ Zéro affinité',
      subtitle: 'On n’a pas grand-chose en commun désolé...',
      description: 'Nos univers semblent très éloignés, et c’est ok ! On se retrouvera sans doute autour d’un café mais plus entre connaissances qu’en amis.',
    },
    {
      min: 25,
      max: 50,
      showContact: false,
      title: '🌱 Germes d’amitié',
      subtitle: 'Il y a une base...',
      description:
        'Quelques points communs nous rapprochent, mais nos modes de vie ou centres d’intérêt peuvent être trop différents pour une vraie complicité.',
    },
    {
      min: 50,
      max: 75,
      showContact: false,
      title: '🌈 Bonne vibe',
      subtitle: 'On pourrait bien s’entendre !',
      description:
        'On partage déjà pas mal de goûts et de visions : de quoi passer de bons moments ensemble. Ce n’est pas parfait, mais l’amitié peut évoluer naturellement 😊',
    },
    {
      min: 75,
      max: 101, // 100 inclus
      showContact: true,
      title: '🔥 Âmes complices',
      subtitle: 'On se capte direct !',
      description:
        'C’est fluide, naturel et fun ! Nos centres d’intérêt et nos valeurs se recoupent largement : conversations jusqu’à 3h du matin et souvenirs en vue 😜',
    },
  ];

  public loversTiers: CompatibilityTier[] = [
    {
      min: 50,
      max: 75,
      showContact: true,
      title: '💞 Potentiel amoureux',
      subtitle: 'Les bases sont là !',
      description: 'On a suffisamment de points communs et de compatibilité pour imaginer quelque chose... à voir si la chimie opère en vrai 👀​',
    },
    {
      min: 75,
      max: 101, // 100 inclus
      showContact: true,
      title: '💍 Match parfait',
      subtitle: 'On pourrait écrire une belle histoire !',
      description: 'Valeurs, goûts, envies... tout semble aligné ! Si l’attirance est là, on a toutes les chances pour une relation épanouissante 😉',
    },
  ];

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.test = this._testService.state;
    this._calculate();
  }

  public previous() {
    this.outPrevious.emit();
  }

  public reset() {
    this.outReset.emit();
  }

  private _calculate() {
    const listPbs = [];
    this.score = 0;
    this.tier = this._getTier(listPbs.length > 0 || this.score < 50, this.score);
  }

  private _getTier(isFriendship: boolean, score: number): CompatibilityTier | null {
    const tiers = isFriendship ? this.friendsTiers : this.loversTiers;
    const s = Math.max(0, Math.min(100, Math.round(score)));
    return tiers.find(t => s >= t.min && s < t.max) ?? null;
  }
}

interface CompatibilityTier {
  min: number; // Inclus
  max: number; // Exclus
  showContact: boolean;
  title: string;
  subtitle: string;
  description: string;
}

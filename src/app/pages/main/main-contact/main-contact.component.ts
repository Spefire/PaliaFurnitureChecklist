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
      max: 15,
      isLover: false,
      showContact: false,
      title: '💥 Incompatibilité totale',
      subtitle: 'On ferait mieux de garder nos distances !',
      description:
        'Nos visions, envies, et possiblement valeurs semblent aller dans des directions opposées. Cela va rendre toute entente durable très improbable 🙁',
    },
    {
      min: 15,
      max: 35,
      isLover: false,
      showContact: false,
      title: `🙈​ Peu d'affinité`,
      subtitle: 'On n’a pas grand-chose en commun désolé...',
      description: 'Nos univers semblent éloignés, et c’est ok ! On se retrouvera sans doute autour d’un café mais plus entre connaissances qu’en amis 😅​',
    },
    {
      min: 35,
      max: 60,
      isLover: false,
      showContact: false,
      title: '🌱 Germes d’amitié',
      subtitle: 'Il y a une base !',
      description:
        'Quelques points communs nous rapprochent, mais peut-être que nos modes de vie ou centres d’intérêt pourraient être trop différents pour une vraie complicité ? À voir 😮​',
    },
    {
      min: 60,
      max: 80,
      isLover: false,
      showContact: true,
      title: '🌈 Bonne vibe',
      subtitle: 'On pourrait bien s’entendre !',
      description:
        'On partage déjà pas mal de goûts et de visions : de quoi passer de bons moments ensemble. Ce n’est pas parfait, mais l’amitié peut évoluer 😊',
    },
    {
      min: 80,
      max: 101, // 100 inclus
      isLover: false,
      showContact: true,
      title: '🔥 Âmes complices',
      subtitle: 'On se capte direct !',
      description:
        'C’est fluide, naturel et fun ! Nos centres d’intérêt et nos valeurs se recoupent largement : conversations jusqu’à 3h du matin et souvenirs en vue 😜',
    },
  ];

  public loversTiers: CompatibilityTier[] = [
    {
      min: 60,
      max: 80,
      isLover: true,
      showContact: true,
      title: '💞 Potentiel amoureux',
      subtitle: 'Les bases sont là !',
      description: 'On a suffisamment de points communs et de compatibilité pour imaginer quelque chose... à voir si la chimie opère en vrai 👀​',
    },
    {
      min: 80,
      max: 101, // 100 inclus
      isLover: true,
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
    const answers = this.test.answers;
    let hasPb = false;
    this.score = 0;
    // Galerie
    this.score += this._getRange(answers.galerie.value); // Entre 0 et 10 => Entre 0 et 5
    // Passions
    const bonusPassion = +1;
    const malusPassion = -1;
    this.score += answers.passions.musics; // Entre 0 et 5
    this.score += answers.passions.music01 === true ? bonusPassion : answers.passions.music01 === false ? malusPassion : 0;
    this.score += answers.passions.music02 === true ? bonusPassion : answers.passions.music02 === false ? malusPassion : 0;
    this.score += answers.passions.music03 === true ? bonusPassion : answers.passions.music03 === false ? malusPassion : 0;
    this.score += answers.passions.music04 === true ? bonusPassion : answers.passions.music04 === false ? malusPassion : 0;
    this.score += answers.passions.music05 === true ? bonusPassion : answers.passions.music05 === false ? malusPassion : 0;
    this.score += answers.passions.music06 === true ? bonusPassion : answers.passions.music06 === false ? malusPassion : 0;
    this.score += answers.passions.games; // Entre 0 et 5
    this.score += answers.passions.game01 === true ? bonusPassion : answers.passions.game01 === false ? malusPassion : 0;
    this.score += answers.passions.game02 === true ? bonusPassion : answers.passions.game02 === false ? malusPassion : 0;
    this.score += answers.passions.game03 === true ? bonusPassion : answers.passions.game03 === false ? malusPassion : 0;
    this.score += answers.passions.game04 === true ? bonusPassion : answers.passions.game04 === false ? malusPassion : 0;
    this.score += answers.passions.game05 === true ? bonusPassion : answers.passions.game05 === false ? malusPassion : 0;
    this.score += answers.passions.game06 === true ? bonusPassion : answers.passions.game06 === false ? malusPassion : 0;
    this.score += answers.passions.game07 === true ? bonusPassion : answers.passions.game07 === false ? malusPassion : 0;
    this.score += answers.passions.game08 === true ? bonusPassion : answers.passions.game08 === false ? malusPassion : 0;
    this.score += answers.passions.game09 === true ? bonusPassion : answers.passions.game09 === false ? malusPassion : 0;
    this.score += answers.passions.movies; // Entre 0 et 5
    this.score += answers.passions.movie01 === true ? bonusPassion : answers.passions.movie01 === false ? malusPassion : 0;
    this.score += answers.passions.movie02 === true ? bonusPassion : answers.passions.movie02 === false ? malusPassion : 0;
    this.score += answers.passions.movie03 === true ? bonusPassion : answers.passions.movie03 === false ? malusPassion : 0;
    this.score += answers.passions.movie04 === true ? bonusPassion : answers.passions.movie04 === false ? malusPassion : 0;
    this.score += answers.passions.movie05 === true ? bonusPassion : answers.passions.movie05 === false ? malusPassion : 0;
    this.score += answers.passions.movie06 === true ? bonusPassion : answers.passions.movie06 === false ? malusPassion : 0;
    this.score += answers.passions.movie07 === true ? bonusPassion : answers.passions.movie07 === false ? malusPassion : 0;
    this.score += answers.passions.movie08 === true ? bonusPassion : answers.passions.movie08 === false ? malusPassion : 0;
    this.score += answers.passions.movie09 === true ? bonusPassion : answers.passions.movie09 === false ? malusPassion : 0;
    // Projets
    if (answers.projets.isDev) this.score += 3;
    if (answers.projets.isRP) this.score += 3;
    if (answers.projets.wantRP) this.score += 1;
    if (answers.projets.isArt) this.score += 3;
    // Personnalité
    const bonusPerso = +1;
    const malusPerso = -2;
    this.score += answers.personnalite.astro === true ? bonusPerso : answers.personnalite.astro === false ? malusPerso : 0;
    this.score += answers.personnalite.quality01 === true ? bonusPerso : answers.personnalite.quality01 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality02 === true ? bonusPerso : answers.personnalite.quality02 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality03 === true ? bonusPerso : answers.personnalite.quality03 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality04 === true ? bonusPerso : answers.personnalite.quality04 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality05 === true ? bonusPerso : answers.personnalite.quality05 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality06 === true ? bonusPerso : answers.personnalite.quality06 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality07 === true ? bonusPerso : answers.personnalite.quality07 === false ? malusPerso : 0;
    this.score += answers.personnalite.quality08 === true ? bonusPerso : answers.personnalite.quality08 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw01 === true ? bonusPerso : answers.personnalite.flaw01 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw02 === true ? bonusPerso : answers.personnalite.flaw02 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw03 === true ? bonusPerso : answers.personnalite.flaw03 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw04 === true ? bonusPerso : answers.personnalite.flaw04 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw05 === true ? bonusPerso : answers.personnalite.flaw05 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw06 === true ? bonusPerso : answers.personnalite.flaw06 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw07 === true ? bonusPerso : answers.personnalite.flaw07 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw08 === true ? bonusPerso : answers.personnalite.flaw08 === false ? malusPerso : 0;
    // Couple
    if (answers.couple.first !== null) this.score += answers.couple.first; // Entre -1 et 5
    if (answers.couple.second !== null) this.score += answers.couple.second; // Entre -1 et 5
    if (answers.couple.relations !== null) this.score += answers.couple.relations; // Entre -1 et 5
    // Recherche
    const bonusSearch = +2;
    const malusSearch = -2;
    if (answers.recherche.bonus01) this.score += bonusSearch;
    if (answers.recherche.bonus02) this.score += bonusSearch;
    if (answers.recherche.bonus03) this.score += bonusSearch;
    if (answers.recherche.bonus04) this.score += bonusSearch;
    if (answers.recherche.bonus05) this.score += bonusSearch;
    if (answers.recherche.bonus06) this.score += bonusSearch;
    if (answers.recherche.malus01) this.score += malusSearch;
    if (answers.recherche.malus02) this.score += malusSearch;
    if (answers.recherche.malus03) this.score += malusSearch;
    if (answers.recherche.malus04) this.score += malusSearch;
    if (answers.recherche.malus05) this.score += malusSearch;
    if (answers.recherche.malus06) this.score += malusSearch;
    if (!answers.recherche.canFree) hasPb = true;
    if (answers.recherche.hasFree) this.score += 3;
    if (answers.recherche.distance) this.score += 3;
    this.score += this._getRange(answers.recherche.physical); // Entre 0 et 10 => Entre 0 et 5
    // Sexe
    if (answers.sexe.role !== null) this.score += answers.sexe.role; // Entre -1 et 3
    if (answers.sexe.penetration !== null) this.score += answers.sexe.penetration; // Entre -1 et 3
    if (answers.sexe.orgasm !== null) this.score += answers.sexe.orgasm; // Entre -1 et 3
    this.score += this._getRange(answers.sexe.physical); // Entre 0 et 10 => Entre 0 et 5
    this.score += this._getRange(answers.sexe.sexe); // Entre 0 et 10 => Entre 0 et 5
    // Tiers
    this.score = this._normalizeScore(this.score);
    this.tier = this._getTier(hasPb || this.score < 60, this.score);
  }

  private _getTier(isFriendship: boolean, score: number): CompatibilityTier | null {
    const tiers = isFriendship ? this.friendsTiers : this.loversTiers;
    const s = Math.max(0, Math.min(100, Math.round(score)));
    return tiers.find(t => s >= t.min && s < t.max) ?? null;
  }

  private _getRange(value: number): number {
    const v = Math.max(0, Math.min(10, value));
    return Math.round((v / 10) * 5);
  }

  private _normalizeScore(score: number, min = -73, max = 125): number {
    const clamped = Math.max(min, Math.min(max, score));
    return Math.round(((clamped - min) / (max - min)) * 100);
  }
}

interface CompatibilityTier {
  min: number; // Inclus
  max: number; // Exclus
  isLover: boolean;
  showContact: boolean;
  title: string;
  subtitle: string;
  description: string;
}

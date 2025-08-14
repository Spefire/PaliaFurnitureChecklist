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
    // Min score (-62)
    this.test.answers = {
      galerie: { value: 0 },
      passions: {
        musics: 0,
        music01: false,
        music02: false,
        music03: false,
        music04: false,
        music05: false,
        music06: false,
        games: 0,
        game01: false,
        game02: false,
        game03: false,
        game04: false,
        game05: false,
        game06: false,
        movies: 0,
        movie01: false,
        movie02: false,
        movie03: false,
        movie04: false,
        movie05: false,
        movie06: false,
        others: 0,
      },
      projets: {
        isDev: false,
        isRP: false,
        wantRP: false,
        isArt: false,
      },
      personnalite: {
        astro: false,
        quality01: false,
        quality02: false,
        quality03: false,
        quality04: false,
        quality05: false,
        quality06: false,
        flaw01: false,
        flaw02: false,
        flaw03: false,
        flaw04: false,
        flaw05: false,
        flaw06: false,
      },
      couple: {
        first: -1,
        second: -1,
        relations: -1,
      },
      recherche: {
        bonus01: false,
        bonus02: false,
        bonus03: false,
        bonus04: false,
        bonus05: false,
        bonus06: false,
        malus01: true,
        malus02: true,
        malus03: true,
        malus04: true,
        malus05: true,
        malus06: true,
        canFree: false,
        hasFree: false,
        distance: false,
        physical: 0,
      },
      sexe: {
        role: -1,
        penetration: -1,
        orgasm: -1,
        physical: 0,
        sexe: 0,
      },
    };
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
    const listPbs = [];
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
    this.score += answers.passions.movies; // Entre 0 et 5
    this.score += answers.passions.movie01 === true ? bonusPassion : answers.passions.movie01 === false ? malusPassion : 0;
    this.score += answers.passions.movie02 === true ? bonusPassion : answers.passions.movie02 === false ? malusPassion : 0;
    this.score += answers.passions.movie03 === true ? bonusPassion : answers.passions.movie03 === false ? malusPassion : 0;
    this.score += answers.passions.movie04 === true ? bonusPassion : answers.passions.movie04 === false ? malusPassion : 0;
    this.score += answers.passions.movie05 === true ? bonusPassion : answers.passions.movie05 === false ? malusPassion : 0;
    this.score += answers.passions.movie06 === true ? bonusPassion : answers.passions.movie06 === false ? malusPassion : 0;
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
    this.score += answers.personnalite.flaw01 === true ? bonusPerso : answers.personnalite.flaw01 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw02 === true ? bonusPerso : answers.personnalite.flaw02 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw03 === true ? bonusPerso : answers.personnalite.flaw03 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw04 === true ? bonusPerso : answers.personnalite.flaw04 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw05 === true ? bonusPerso : answers.personnalite.flaw05 === false ? malusPerso : 0;
    this.score += answers.personnalite.flaw06 === true ? bonusPerso : answers.personnalite.flaw06 === false ? malusPerso : 0;
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
    if (!answers.recherche.canFree) listPbs.push('Tu ne sembles pas en accord avec la relation libre.');
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
    this.tier = this._getTier(listPbs.length > 0 || this.score < 50, this.score);
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
}

interface CompatibilityTier {
  min: number; // Inclus
  max: number; // Exclus
  showContact: boolean;
  title: string;
  subtitle: string;
  description: string;
}

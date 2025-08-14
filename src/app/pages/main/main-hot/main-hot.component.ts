import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { AnswersSexe } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

export const HOT_PASSWORD = 'BOUH';
export const VERY_HOT_PASSWORD = 'BAH';

@Component({
  selector: 'main-hot',
  imports: [SharedModule, CardComponent, ObserveSectionDirective],
  templateUrl: './main-hot.component.html',
  styleUrl: './main-hot.component.scss',
})
export class MainHotComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public item: AnswersSexe;

  public isRevealed = false;
  public isRevealedHot = false;
  public isRevealedVeryHot = false;
  public showPhoto = false;

  public passwordHot = '';
  public passwordVeryHot = '';
  public readonly HOT_PASSWORD = HOT_PASSWORD;
  public readonly VERY_HOT_PASSWORD = VERY_HOT_PASSWORD;

  public roleList = [
    { label: `Je n'aime la pénétration`, value: -1 },
    { label: 'Je préfère donner (actif)', value: 0 },
    { label: 'Je préfère recevoir (passif)', value: 1 },
    { label: 'Je suis versatile (avec ou sans préférence)', value: 3 },
  ];

  public penetrationList = [
    { label: 'Pénétration anale indispensable', value: -1 },
    { label: 'Pénétration anale le plus souvent', value: 0 },
    { label: `Pas besoin de pénétration, selon l'envie du moment`, value: 3 },
  ];

  public orgasmList = [
    { label: `Oui, faut qu'on finisse tous les deux`, value: 0 },
    { label: 'Oui, j’ai besoin forcément de finir', value: 1 },
    { label: 'Non, je peux apprécier même sans final', value: 3 },
  ];

  public hotTopics = [
    {
      icon: '↕️​',
      title: 'Versatile',
      description: `Parfois passif, souvent actif, dominant ou dominé, j'aime varier selon l'envie, le moment et la personne...
      Et pas forcément de la pénétration : on peut se faire plaisir un tas de manière 😜​`,
    },
    {
      icon: '💕',
      title: 'Intimité physique et mentale',
      description: `Il me faut un minimum de complicité ou d'échanges avant de passer à une intimité physique.
      Un léger côté demi-sexuel ou sapio qui me dit qu'un physique ne fait pas tout (et pas du tout fan de plans cul).`,
    },
    {
      icon: '💭',
      title: 'Fantasmes',
      description: `Plutôt vanilla / simple dans l'ensemble, mais pas contre certains fantasmes explorations... expérimentations 🧪​ ?`,
    },
    {
      icon: '⏰',
      title: 'Fréquence',
      description: `Ca dépendra de nos libidos ! J'aime beaucoup la spontaniété, pas trop prévoir... et parfois juste des câlins suffisent amplement 🤗​`,
    },
  ];

  public stats = [
    { key: 'Taille', value: '180 cm' },
    { key: 'Poids', value: '120 kg' },
    { key: 'Muscles', value: '+ des jambes que des bras' },
    { key: 'Gras', value: 'Un peu partout' },
    { key: 'Pilosité générale', value: 'Poilu, mais pas trop' },
    { key: 'Tatouage', value: `Juste sur le bras droit (pour l'instant)` },
  ];

  public otherStats = [
    { key: 'Pilosité pubienne', value: 'Entretenu' },
    { key: 'Type', value: 'Pénis de sang' },
    { key: 'Taille', value: `Dans la moyenne (13-14cm ?)` },
    { key: 'Épaisseur', value: `Un peu + que la moyenne` },
    { key: 'Circoncis', value: 'Non' },
    { key: 'Testicules', value: `Gros mais pas pendants` },
    { key: 'Zone érogène', value: 'À toi de trouver 😋' },
  ];

  public likes = [
    `Fellations (en donner + qu'en recevoir)`,
    `Doigtage (en faire + que m'en faire)`,
    'Massages (surtout tantriques)',
    'Cum-covering',
    'Shibari (à tester !)',
  ];

  public boundaries = ['Insultes, surnoms dévalorisants, rabaissements', 'Anulingus', 'Furry', 'Uro, scato, ...', 'Et à discuter sur le reste ?'];

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.item = this._testService.getAnswer('sexe');
  }

  public checkPassword(level: 'safe' | 'hot' | 'very') {
    if (level === 'safe') {
      this.isRevealed = true;
    } else if (level === 'hot' && this.passwordHot === HOT_PASSWORD) {
      this.isRevealedHot = true;
    } else if (level === 'very' && this.passwordVeryHot === VERY_HOT_PASSWORD) {
      this.isRevealedVeryHot = true;
    }
  }

  public revealContent() {
    this.isRevealed = true;
  }

  public revealHotContent() {
    this.isRevealedHot = true;
  }

  public revealVeryHotContent() {
    this.isRevealedVeryHot = true;
  }

  public openPhoto() {
    this.showPhoto = true;
  }

  public closePhoto() {
    this.showPhoto = false;
  }

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this._testService.setAnswer('sexe', this.item);
    this.outNext.emit();
  }
}

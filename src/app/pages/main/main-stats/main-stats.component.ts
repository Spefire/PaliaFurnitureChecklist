import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { AnswersPersonnalite } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-stats',
  imports: [SharedModule, CardComponent, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-stats.component.html',
  styleUrl: './main-stats.component.scss',
})
export class MainStatsComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public item: AnswersPersonnalite;
  public qualities: (boolean | null)[];
  public flaws: (boolean | null)[];

  public qualityList = [
    {
      icon: '😶',
      title: 'Empathique',
      description: `Je ressens facilement les émotions des autres, et j'ai une très bonne intuition quand quelque chose cloche. Mais je peux aussi être une vraie éponge.`,
      color: '#fded00',
    },
    {
      icon: '✨',
      title: 'Spirituel',
      description: `Je ne crois pas forcément en l'astrologie ni en une religion, mais je garde l’idée qu’une force ou un hasard guidé relie les choses et les gens.`,
      color: '#fded00',
    },
    {
      icon: '💡',
      title: 'Créatif',
      description: `J'ai des idées plein la tête, des tas de projets à faire, que ce soit dans mon travail ou dans mes loisirs.`,
      color: '#fded00',
    },
    {
      icon: '📅',
      title: 'Organisé',
      description: `J'aime quand les choses sont bien structurées, planifiées (et t'as vu toutes ses listes ?)... sinon je stresse.`,
      color: '#fded00',
    },
    {
      icon: '🤏',
      title: 'Minimaliste',
      description: `J'achète peu, et si j'achète quelque chose, ça doit me servir. Ça peut se retranscrire sur mes vêtements...`,
      color: '#fded00',
    },
    {
      icon: '👄',
      title: 'Communicatif',
      description: `Si j'aime une personne, je communique beaucoup, à l'oral, à l'écrit, en envoyant des vidéos Tiktok ou Insta...`,
      color: '#fded00',
    },
    {
      icon: '💭',
      title: 'Transparence',
      description: `J'essaie de dire généralement ce que je ressens, mon visage est très expressif sinon xD, et je n'ai globalement aucun sujet tabou.`,
      color: '#fded00',
    },
    {
      icon: '🚭',
      title: 'Non-fumeur',
      description: `Je bois de l'alcool en soirée, mais je ne fume pas : ma principale addiction c'est la bouffe mdr.`,
      color: '#fded00',
    },
  ];

  public flawList = [
    {
      icon: '😖',
      title: 'Anxieux',
      description: `Je me stresse parfois pour un rien, j'ai pas souvent confiance en moi et plus rarement aux autres.`,
      color: '#cf4e3f',
    },
    {
      icon: '🔋',
      title: 'Introversion',
      description: `Je suis sociable mais j'ai besoin de mon besoin de temps seul pour me ressourcer.`,
      color: '#cf4e3f',
    },
    {
      icon: '💔',
      title: 'Sensible',
      description: `Je peux vite prendre les choses personnellement et être affecté par les critiques.`,
      color: '#cf4e3f',
    },
    {
      icon: '🎯',
      title: 'Besoin fort d’attention',
      description: `J’ai tendance à vouloir être au centre de l’attention des gens que j’aime (seulement) : j'adore rayonner.`,
      color: '#cf4e3f',
    },
    {
      icon: '💻',
      title: 'Sédentaire',
      description: `J'adore chiller, je joue / suis beaucoup avec des potes en ligne / en vocal. Je reste un peu trop dans mon appart...`,
      color: '#cf4e3f',
    },
    {
      icon: '🔒',
      title: 'Routine sécuritaire',
      description: `J’ai du mal à me lancer dans des activités nouvelles ou hors de ma zone de confort. Je voyage peu du coup.`,
      color: '#cf4e3f',
    },
    {
      icon: '📋',
      title: 'Mordu de travail',
      description: `J’adore travailler (très souvent sur mon PC...) et j'ai du mal à décrocher d'une activité : j'ai peur de l'ennui.`,
      color: '#cf4e3f',
    },
    {
      icon: '😓​',
      title: 'Enfants',
      description: `Je n'envisage pas du tout d'avoir d'enfant, possiblement adopter mais là encore, j'y suis pas du tout prêt.`,
      color: '#cf4e3f',
    },
  ];

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.item = this._testService.getAnswer('personnalite');
    this.qualities = [
      this.item.quality01,
      this.item.quality02,
      this.item.quality03,
      this.item.quality04,
      this.item.quality05,
      this.item.quality06,
      this.item.quality07,
      this.item.quality08,
    ];
    this.flaws = [
      this.item.flaw01,
      this.item.flaw02,
      this.item.flaw03,
      this.item.flaw04,
      this.item.flaw05,
      this.item.flaw06,
      this.item.flaw07,
      this.item.flaw08,
    ];
  }

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this.item.flaw01 = this.flaws[0];
    this.item.flaw02 = this.flaws[1];
    this.item.flaw03 = this.flaws[2];
    this.item.flaw04 = this.flaws[3];
    this.item.flaw05 = this.flaws[4];
    this.item.flaw06 = this.flaws[5];
    this.item.quality01 = this.qualities[0];
    this.item.quality02 = this.qualities[1];
    this.item.quality03 = this.qualities[2];
    this.item.quality04 = this.qualities[3];
    this.item.quality05 = this.qualities[4];
    this.item.quality06 = this.qualities[5];
    this._testService.setAnswer('personnalite', this.item);
    this.outNext.emit();
  }
}

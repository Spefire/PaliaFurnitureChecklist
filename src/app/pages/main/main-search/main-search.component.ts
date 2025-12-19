import { Component, input, OnInit, output } from '@angular/core';

import { CardComponent } from '@src/components/card/card.component';
import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { AnswersRecherche } from '@src/models/test.model';
import { TestService } from '@src/services/test.service';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-search',
  imports: [SharedModule, CardComponent, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.scss',
})
export class MainSearchComponent implements OnInit {
  public readonly isTest = input.required<boolean>();
  public readonly outPrevious = output();
  public readonly outNext = output();

  public item: AnswersRecherche;

  public importantTraits = [
    {
      src: 'assets/search/key_01.png',
      title: `Clé du Sentiment`,
      description: `Une clé qu'on ne contrôle pas et qui parle d'elle-même : on a beau avoir des critères, le coeur parle en premier !`,
      color: '#aa2b34',
    },
    {
      src: 'assets/search/key_02.png',
      title: `Clé de l'Attirance physique`,
      description: `Je craque généralement sur les loutres, minets, un peu barbus et poilus, sveltes ou maigres... et les yeux bleus (oups).`,
      color: '#c9744e',
    },
    {
      src: 'assets/search/key_03.png',
      title: `Clé de l'Admiration`,
      description: `Les projets, l'ambition, sa créativité... sont plusieurs choses qui me mettent des étoiles dans les yeux.
      Partager le quotidien et l'univers de l'autre en est devenue une clé.`,
      color: '#dfb354',
    },
    {
      src: 'assets/search/key_04.png',
      title: `Clé de la Confiance et de la Communication`,
      description: `Celle des meilleures conversations, des mots qui donnent envie de se confier. Sans confiance et communication, aucune relation n'est possible.`,
      color: '#3d8758',
    },
    {
      src: 'assets/search/key_05.png',
      title: `Clé de l'Équilibre et de la Liberté`,
      description: `Le besoin d'être moi, que tu sois toi, et qu'on soit nous. Chacun notre espace, faire ce qu'il nous plait, mais aussi nous retrouver.`,
      color: '#257784',
    },
    {
      src: 'assets/search/key_06.png',
      title: `Clé de la Sécurité`,
      description: `Le besoin d'espérer un avenir ensemble où on sera bien tous les deux, surtout si on commence en relation à distance.`,
      color: '#384981',
    },
  ];

  public bonus: boolean[] = [];
  public malus: boolean[] = [];

  public dealBreakers = [
    `Ne pas vouloir vivre sur Nantes (sur le long terme)`,
    `L'absence totale d'ambition ou de projets professionnels`,
    `L'envie de bouger / de voyager en permanence (avec moi)`,
    `Être une star d'un microsystème gay / avoir son fan club de mecs`,
    `Être matérialiste sur les vêtements / objets de luxe, acheter sans réfléchir`,
    `Fumer (désolé, je n'aime pas l'odeur sur la personne après...)`,
  ];

  public niceToHave = [
    `Aimer chanter, danser, dessiner, s'exprimer artistiquement 📷​`,
    `Avoir un ou plusieurs chats 😻​`,
    `Aimer les émissions où l'on peut juger : 4 mariages pour 1 lune de miel, Eurovision 📺​`,
    'Un goût pour la bouffe : je suis gourmand de mon côté 🤭',
    `Être un signe de Feu 🔥​ (Lion, Bélier, Sagittaire) ou d'Air 🌬️​ (Balance, Gémeaux, Verseau)`,
    `Être sensibilisé à la psychologie (bipolarité, dépression, anxiété...)`,
  ];

  constructor(private _testService: TestService) {}

  public ngOnInit() {
    this.item = this._testService.getAnswer('recherche');
    this.bonus = [this.item.bonus01, this.item.bonus02, this.item.bonus03, this.item.bonus04, this.item.bonus05, this.item.bonus06];
    this.malus = [this.item.malus01, this.item.malus02, this.item.malus03, this.item.malus04, this.item.malus05, this.item.malus06];
  }

  public previous() {
    this.outPrevious.emit();
  }

  public next() {
    this.item.bonus01 = this.bonus[0];
    this.item.bonus02 = this.bonus[1];
    this.item.bonus03 = this.bonus[2];
    this.item.bonus04 = this.bonus[3];
    this.item.bonus05 = this.bonus[4];
    this.item.bonus06 = this.bonus[5];
    this.item.malus01 = this.malus[0];
    this.item.malus02 = this.malus[1];
    this.item.malus03 = this.malus[2];
    this.item.malus04 = this.malus[3];
    this.item.malus05 = this.malus[4];
    this.item.malus06 = this.malus[5];
    this._testService.setAnswer('recherche', this.item);
    this.outNext.emit();
  }
}

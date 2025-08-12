import { Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-search',
  standalone: true,
  imports: [SharedModule, NoteComponent, ObserveSectionDirective],
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.scss'],
})
export class MainSearchComponent {
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
      description: `Je craque généralement sur les loutres, les minets, un peu barbus et poilus, sveltes ou maigres... et un coup de coeur sur les yeux bleus.`,
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
      description: `Celle des meilleures conversations, des mots qui donnent envie de se confier. Sans communication, aucune relation n'est possible.`,
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
      description: `Le fait de pouvoir être soi-même et le besoin d'espérer un avenir ensemble, surtout si on est en relation à distance.`,
      color: '#384981',
    },
  ];

  public dealBreakers = [
    `Ne pas vouloir vivre sur Nantes sur le long terme`,
    `L'absence totale d'ambition ou de projets professionnels`,
    `L'envie de bouger / de voyager en permanence`,
    `Être une star du microcosme gay / avoir un fan club de mecs`,
    `Être matérialiste / acheter sans compter, sans réfléchir`,
  ];

  public niceToHave = [
    `Aimer chanter, danser ou dessiner, s'exprimer artistiquement 📷​`,
    `Avoir un ou plusieurs chats 😻​`,
    `Aimer les émissions où l'on peut juger : 4 mariages 1 lune de miel, Eurovision 📺​`,
    'Un goût pour la cuisine : je suis gourmand 🤭',
    `Être un signe de Feu 🔥​ (Lion, Bélier, Sagittaire) ou d'Air 🌬️​ (Balance, Gémeaux, Verseau)`,
  ];
}

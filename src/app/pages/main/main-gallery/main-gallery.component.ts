import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NoteComponent } from '@src/components/note/note.component';
import { ObserveSectionDirective } from '@src/directives/observe-section.directive';
import { SharedModule } from '@src/shared.module';

@Component({
  selector: 'main-gallery',
  imports: [SharedModule, ObserveSectionDirective, NoteComponent],
  templateUrl: './main-gallery.component.html',
  styleUrl: './main-gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainGalleryComponent {
  public photos: Photo[] = [
    {
      src: 'assets/gallery/me-0.jpg',
      alt: 'Photo de moi n°1',
      description: `Découverte d'une passion des bretelles`,
      category: 'Vie quotidienne',
    },
    {
      src: 'assets/gallery/me-1.jpg',
      alt: 'Photo de moi n°2',
      description: 'Paré pour une randonnée en montagne',
      category: 'Voyage',
    },
    {
      src: 'assets/gallery/me-2.jpg',
      alt: 'Photo de moi n°3',
      description: 'Sieste du weekend...',
      category: 'Vie quotidienne',
    },
    {
      src: 'assets/gallery/me-3.jpg',
      alt: 'Photo de moi n°4',
      description: 'Rapide séjour à Paris donc "photo Eiffel" obligée !',
      category: 'Voyage',
    },
    {
      src: 'assets/gallery/me-4.jpg',
      alt: 'Photo de moi n°5',
      description: 'Avant la séance, encore frais...',
      category: 'Sport',
    },
    {
      src: 'assets/gallery/me-5.jpg',
      alt: 'Photo de moi n°6',
      description: 'Moi qui te juge.',
      category: 'Vie quotidienne',
    },
  ];

  public selectedPhoto: Photo = null;

  public openPhoto(photo: Photo) {
    this.selectedPhoto = photo;
  }

  public closePhoto() {
    this.selectedPhoto = null;
  }
}

class Photo {
  public src: string;
  public alt: string;
  public description: string;
  public category: string;
}

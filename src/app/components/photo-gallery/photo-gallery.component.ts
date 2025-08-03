import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
})
export class PhotoGalleryComponent {
  photos = [
    {
      src: 'assets/perso1.png',
      alt: 'Photo de moi 1',
      description: 'Un moment de détente',
      category: 'Loisirs',
    },
    {
      src: 'assets/perso2.png',
      alt: 'Photo de moi 2',
      description: 'En voyage quelque part',
      category: 'Voyages',
    },
    {
      src: 'assets/perso3.png',
      alt: 'Photo de moi 3',
      description: 'Avec des amis',
      category: 'Social',
    },
    {
      src: 'assets/guests/0.jpg',
      alt: 'Photo de moi 4',
      description: 'Un bon moment',
      category: 'Loisirs',
    },
    {
      src: 'assets/guests/1.jpg',
      alt: 'Photo de moi 5',
      description: 'En pleine nature',
      category: 'Nature',
    },
    {
      src: 'assets/guests/2.jpg',
      alt: 'Photo de moi 6',
      description: 'Un sourire authentique',
      category: 'Portrait',
    },
  ];

  selectedPhoto: any = null;

  openPhoto(photo: any) {
    this.selectedPhoto = photo;
  }

  closePhoto() {
    this.selectedPhoto = null;
  }
}

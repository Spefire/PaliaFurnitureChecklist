import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'main-gallery',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './main-gallery.component.html',
  styleUrls: ['./main-gallery.component.scss'],
})
export class MainGalleryComponent {
  public photos: Photo[] = [
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 1',
      description: 'Un moment de détente',
      category: 'Loisirs',
    },
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 2',
      description: 'En voyage quelque part',
      category: 'Voyages',
    },
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 3',
      description: 'Avec des amis',
      category: 'Social',
    },
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 4',
      description: 'Un bon moment',
      category: 'Loisirs',
    },
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 5',
      description: 'En pleine nature',
      category: 'Nature',
    },
    {
      src: 'assets/gallery/me-0.png',
      alt: 'Photo de moi 6',
      description: 'Un sourire authentique',
      category: 'Portrait',
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

import { DecorativePalette, Palette } from '@lucca-front/ng/core';

import { Furniture, IFurniture } from '@src/models/furniture.model';

export interface ICollection {
  name: string;
  palette: Palette | DecorativePalette;
  color: 0 | 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  items: IFurniture[];
}

export class Collection {
  public name: string;
  public palette: Palette | DecorativePalette;
  public color: 0 | 25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  public items: Furniture[];

  public get code(): string {
    let code = this.name;
    code = code.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    code = code.replace(/\s/g, '');
    return code.toUpperCase();
  }

  constructor(obj: ICollection) {
    this.name = obj.name;
    this.palette = obj.palette;
    this.color = obj.color;
    this.items = [];
    obj.items.forEach(item => {
      this.items.push(new Furniture(item));
    });
  }
}

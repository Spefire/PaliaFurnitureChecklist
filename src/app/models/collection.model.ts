import { Furniture, IFurniture } from '@src/models/furniture.model';

export interface ICollection {
  name: string;
  items: IFurniture[];
}

export class Collection {
  public name: string;
  public items: Furniture[];

  public get code(): string {
    let code = this.name;
    code = code.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    code = code.replace(/\s/g, '');
    return code.toUpperCase();
  }

  constructor(obj: ICollection) {
    this.name = obj.name;
    this.items = [];
    obj.items.forEach(item => {
      this.items.push(new Furniture(item));
    });
  }
}

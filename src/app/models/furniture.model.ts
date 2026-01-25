import { TagFurniture } from '@src/data/furniture.data';

export interface IFurniture {
  name: string;
  tags?: TagFurniture[];
  image: string;
}

export class Furniture {
  public name: string;
  public tags?: TagFurniture[];
  public image: string;

  public get code(): string {
    let code = this.name;
    code = code.normalize('NFD').replace(/\p{Diacritic}/gu, '');
    code = code.replace(/\s/g, '');
    return code.toUpperCase();
  }

  constructor(obj: IFurniture) {
    this.name = obj.name;
    this.tags = obj.tags;
    this.image = obj.image;
  }
}

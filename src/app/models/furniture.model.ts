import { Tag } from '@src/data/furniture.data';

export interface IFurniture {
  name: string;
  tags?: Tag[];
  image: string;
}

export class Furniture {
  public name: string;
  public tags?: Tag[];
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

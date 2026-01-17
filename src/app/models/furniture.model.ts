import { DecorativePalette, Palette } from '@lucca-front/ng/core';

export enum Collection {}

export interface IFurniture {
  libelle: string;
  code: string;
  description: string;
  color: Palette | DecorativePalette;
}

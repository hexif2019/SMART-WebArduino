import {Coordonne} from './coordonne.model';

class Casier {
  id?: string;
  volume?: number;
  longueur?: number;
  largeur?: number;
  hauteur?: number;
  isOpen?: boolean;
  nbEll?: number;
}

export class Residence {
  id?: string;
  adresse?: string;
  codePostal?: string;
  ville?: string;
  position?: Coordonne;
  casiers?: Casier[];
}



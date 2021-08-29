import { PoivronsEnRondelles } from './../classes/ingredients/legumes/PoivronsEnRondelles';
import { Legumes } from './legumes/Legumes';
import { Pate } from './pates/Pate';
import { MoulesFraiches } from './../classes/ingredients/legumes/MoulesFraiches';
import { PoivronRouge } from './../classes/ingredients/legumes/PoivronRouge';
import { Reggiano } from './../classes/ingredients/Reggiano';
import { SauceMarinara } from './../classes/ingredients/SauceMarinara';

export interface FabriqueIngredientsPizza {

    creerPate (): Pate;
    creerSauce(): SauceMarinara;
    creerFromage(): Reggiano;
    creerLegumes(): Legumes[];
    creerPoivrons(): PoivronRouge|PoivronsEnRondelles;
    creerMoules(): MoulesFraiches;

}
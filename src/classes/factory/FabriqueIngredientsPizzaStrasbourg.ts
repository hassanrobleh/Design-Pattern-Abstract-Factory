import { Aubergines } from './../ingredients/legumes/Aubergines';
import { Epinards } from './../ingredients/legumes/Epinards';
import { OlivesNoires } from './../ingredients/legumes/OlivesNoires';
import { MoulesSurgelees } from './../ingredients/MoulesSurgelees';
import { FabriqueIngredientsPizza } from '../../interfaces/FabriqueIngredientsPizza';
import { Sauce } from '../../interfaces/sauces/Sauce';
import { Pate } from '../../interfaces/pates/Pate';
import { Fromage } from '../../interfaces/fromages/Fromage';
import { Legumes } from '../../interfaces/legumes/Legumes';
import { PoivronsEnRondelles } from "../ingredients/legumes/PoivronsEnRondelles";
import { PateFine } from "../ingredients/PateFine";
import { Reggiano } from "../ingredients/Reggiano";
import { SauceMarinara } from "../ingredients/SauceMarinara";


export class FabriqueIngredientsPizzaStrasbourg implements FabriqueIngredientsPizza {

    creerPate(): Pate {
        return new PateFine();
    }

    creerSauce(): Sauce {
        return new SauceMarinara();
    }

    creerFromage(): Fromage {
        return new Reggiano();
    }

    creerLegumes(): Legumes[]  {
        const legume: Legumes[] = [new OlivesNoires(), new Epinards(), new Aubergines()] ;
        return legume;
    }

    creerPoivrons() {
        return new PoivronsEnRondelles();
    }
    
    creerMoules() {
        return new MoulesSurgelees();
    }

}
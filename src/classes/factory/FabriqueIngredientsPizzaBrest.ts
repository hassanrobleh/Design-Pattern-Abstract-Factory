import { Mozzarella } from './../ingredients/Mozzarella';
import { SauceTomatesCerise } from './../ingredients/SauceTomatesCerise';
import { PateSoufflee } from './../ingredients/PateSoufflee';
import { FabriqueIngredientsPizza } from './../../interfaces/FabriqueIngredientsPizza';
import { Sauce } from '../../interfaces/sauces/Sauce';
import { Pate } from '../../interfaces/pates/Pate';
import { Fromage } from '../../interfaces/fromages/Fromage';
import { Legumes } from '../../interfaces/legumes/Legumes';
import { Ail } from "../ingredients/legumes/Ail";
import { Champignon } from "../ingredients/legumes/Champignon";
import { MoulesFraiches } from "../ingredients/legumes/MoulesFraiches";
import { Oignon } from "../ingredients/legumes/Oignon";
import { PoivronRouge } from "../ingredients/legumes/PoivronRouge";
import { PoivronsEnRondelles } from "../ingredients/legumes/PoivronsEnRondelles";



export class FabriqueIngredientsPizzaBrest implements FabriqueIngredientsPizza {

    creerPate(): Pate {
        return new PateSoufflee();
    }

    creerSauce(): Sauce {
        return new SauceTomatesCerise();
    }

    creerFromage(): Fromage {
        return new Mozzarella();
    }

    creerLegumes(): Legumes[]  {
        const legume: Legumes[] = [new Ail(), new Oignon(), new Champignon(), new PoivronRouge()] ;
        return legume;
    }

    creerPoivrons() {
        return new PoivronsEnRondelles();
    }
    
    creerMoules() {
        return new MoulesFraiches();
    }

}
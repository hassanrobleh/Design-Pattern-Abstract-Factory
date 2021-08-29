import { FabriqueIngredientsPizza } from "../interfaces/FabriqueIngredientsPizza";
import { Pizza } from "./Pizza";

export class PizzaPoivrons extends Pizza  {

    fabriqueIngredients: FabriqueIngredientsPizza;

    constructor(f: FabriqueIngredientsPizza) {
        super()
        this.fabriqueIngredients = f;
    }

    preparer() {
        
        this.fabriqueIngredients.creerPate();
        this.fabriqueIngredients.creerSauce();
        this.fabriqueIngredients.creerFromage();

        return `Préparation de ${this.nom}`;
    }

}
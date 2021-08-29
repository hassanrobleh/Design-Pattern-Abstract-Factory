import { FabriqueIngredientsPizzaStrasbourg } from './factory/FabriqueIngredientsPizzaStrasbourg';
import { Pizzeria } from "./Pizzeria";
import { FabriqueIngredientsPizza } from '../interfaces/FabriqueIngredientsPizza';
import { Pizza } from './Pizza';
import { PizzaFromage } from './PizzaFromage';
import { PizzaFruitDeMer } from './PizzaFruitDeMer';
import { PizzaPoivrons } from './PizzaPoivrons';

export class PizzeriaStrasbourg extends Pizzeria {

    creerPizza(item: string) {

        let fabriqueIngredients: FabriqueIngredientsPizza = new FabriqueIngredientsPizzaStrasbourg();
        let pizza: Pizza = new PizzaFromage(fabriqueIngredients);

        if(item = "fromage") {
            pizza = new PizzaFromage(fabriqueIngredients);
            pizza.setNom("Pizza au fromage style Brest");
        } else if(item = "vegetarienne") {
            pizza = new PizzaFromage(fabriqueIngredients);
            pizza.setNom("Pizza végétarienne style Brest");
        } else if(item = "fruitsDeMer") {
            pizza = new PizzaFruitDeMer(fabriqueIngredients);
            pizza.setNom("Pizza aux fruits de mer style Brest");
        } else if(item = "poivrons") {
            pizza = new PizzaPoivrons(fabriqueIngredients);
            pizza.setNom("Pizza aux poivrons style Brest")
        }

        return pizza;
    }


}
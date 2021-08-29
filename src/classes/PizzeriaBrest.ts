import { PizzaFruitDeMer } from './PizzaFruitDeMer';
import { FabriqueIngredientsPizzaBrest } from './factory/FabriqueIngredientsPizzaBrest';
import { FabriqueIngredientsPizza } from './../interfaces/FabriqueIngredientsPizza';
import { Pizzeria } from "./Pizzeria";
import { Pizza } from './Pizza';
import { PizzaFromage } from './PizzaFromage';
import { PizzaPoivrons } from './PizzaPoivrons';

export class PizzeriaBrest extends Pizzeria {

    creerPizza(item: string) {

        let fabriqueIngredients: FabriqueIngredientsPizza = new FabriqueIngredientsPizzaBrest();
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
import { Pizza } from './Pizza';

export abstract class Pizzeria {

    commanderPizza(type: string) {
        let pizza: Pizza ;

        pizza = this.creerPizza(type);
        
        pizza.preparer();
        pizza.cuire();
        pizza.couper();
        pizza.emballer();

        return pizza;
    }

    abstract creerPizza(type: string): any
}
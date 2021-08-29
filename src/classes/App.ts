import { PizzeriaStrasbourg } from './PizzeriaStrasbourg';
import { PizzeriaBrest } from './PizzeriaBrest';
import { Pizzeria } from './Pizzeria';
import { Pizza } from './Pizza';

export class App {

    pizzeriaFromageStyleBrest() { 
        let pizzeriaBrest: Pizzeria = new PizzeriaBrest();
        let pizza:Pizza = pizzeriaBrest.commanderPizza("fromage");
        return "Marc a commandé " + pizza.getNom();
    }

    pizzeriaFromageStyleStrasbourg() { 
        let pizzeriaBrest: Pizzeria = new PizzeriaStrasbourg();
        let pizza:Pizza = pizzeriaBrest.commanderPizza("fromage");
        return "Jean a commandé " + pizza.getNom();
    }
}

// const app = new App();
// app.main()
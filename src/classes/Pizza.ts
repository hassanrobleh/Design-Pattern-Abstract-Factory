
export abstract class Pizza {

    nom: string = "";
   
    abstract preparer(): string;

    cuire(): string {
        return "Cuisson 25 minutes à 180° ";
    }

    couper(): string {
        return "Découpage en parts triangulaires";
    }

    emballer(): string {
        return "Emballage dans une boîte officielle";
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getNom() {
        return this.nom;
    }

    toString() {
        // Code qui affiche la pizza;
    }

}
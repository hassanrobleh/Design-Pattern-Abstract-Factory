import { App } from './../src/classes/App';

describe('Pattern Factory test', () => {
    
    it("should be return Marc a commandé Pizza au fromage style Brest", () => {
        const app = new App();
        expect(app.pizzeriaFromageStyleBrest()).toBe("Marcgit  a commandé Pizza au fromage style Brest");
    });


    it("should be return Jean a commandé Pizza au fromage style Brest", () => {
        const app = new App();
        expect(app.pizzeriaFromageStyleStrasbourg()).toBe("Jean a commandé Pizza au fromage style Brest");
    });
})

export interface Page {
    pageUp(): void
    pageDown(): void
    pageOpen(): void
    pageClose(): void
}

export class Window {
    constructor(private page: Page){}

    WindowOpen():void{
        this.page.pageOpen()
    }

    WindowClose():void{
        this.page.pageClose()
    }

    WindowUp():void{
        this.page.pageUp()
    }
    WindowDown():void{
        this.page.pageDown()
    }
       
}

export class Button implements Page {
    pageOpen(): void {
        console.log(`Abrindo pagina Button`);
    }

    pageDown(): void {
        console.log(`Descendo pagina Button`);
    }

    pageUp(): void {
        console.log(`Subindo pagina Button`);
    }

    pageClose(): void {
        console.log(`Fechando pagina Button`);
    }
}
export class Menu implements Page {
    pageOpen(): void {
        console.log(`Abrindo pagina Menu`);
    }

    pageDown(): void {
        console.log(`Descendo pagina Menu`);
    }

    pageUp(): void {
        console.log(`Subindo pagina Menu`);
    }

    pageClose(): void {
        console.log(`Fechando pagina Menu`);
    }
}
export class List implements Page {
    pageOpen(): void {
        console.log(`Abrindo pagina List`);
    }

    pageDown(): void {
        console.log(`Descendo pagina List`);
    }

    pageUp(): void {
        console.log(`Subindo pagina List`);
    }

    pageClose(): void {
        console.log(`Fechando pagina List`);
    }
}
export class Text implements Page {
    pageOpen(): void {
        console.log(`Abrindo pagina Text`);
    }

    pageDown(): void {
        console.log(`Descendo pagina Text`);
    }

    pageUp(): void {
        console.log(`Subindo pagina Text`);
    }

    pageClose(): void {
        console.log(`Fechando pagina Text`);
    }
}

const page1 = new Window(new Text());
const page2 = new Window(new Menu());
const page3 = new Window(new List());
const page4 = new Window(new Button());

page1.WindowOpen()
page2.WindowOpen()
page3.WindowOpen()
page4.WindowOpen()
page1.WindowDown()
page2.WindowUp()
page3.WindowDown()
page4.WindowClose()

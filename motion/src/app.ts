import { PageComponent } from "./components/page.js";

class App {
  private readonly content: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.content = new PageComponent();
    this.content.attachTo(appRoot);
  }
}

new App(document.querySelector(".contents") as HTMLElement);

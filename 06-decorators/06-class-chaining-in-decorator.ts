function WithTemplate(template: string, id: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(id);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent! = this.name;
        }
      }
    };
  };
}

@WithTemplate('<h1>This is a template</h1>', 'app')
class Vehicle1 {
  name: string = 'Vehicle';

  constructor() {
    console.log('Vehicle object created');
  }
}

const v = new Vehicle1(); // needs instantiation to use the above defined specific decorator

function Logger1(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, id: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(id);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent! = p.name;
    }
  };
}

// decorators executed bottom to up structure
@Logger1('Logging...')
@WithTemplate('<h1>This is a template</h1>', 'app')
class Vehicle {
  name: string = 'Vehicle';

  constructor() {
    console.log('Vehicle object created');
  }
}

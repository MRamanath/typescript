function Log1(target: any, propertyName: string | Symbol) {
  console.log('property decorator');
  console.log(target, propertyName);
}

// we can return something on accessor decorator
function Log2(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log('Accessor Decorator');
  console.log(target, propertyName, descriptor);
}

// we can return something on method decorator
function Log3(
  target: any,
  propertyName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method Decorator');
  console.log(target, propertyName, descriptor);
}

function Log4(target: any, propertyName: string | Symbol, position: number) {
  console.log('Parameter Decorator');
  console.log(target, propertyName, position);
}

class Product1 {
  @Log1
  public title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error('Invalid price');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

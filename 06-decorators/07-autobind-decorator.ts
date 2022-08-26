function Autobind(
  _1: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  public message: string = 'This works!';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}
const p = new Printer();
const b = document.querySelector('button')! as HTMLButtonElement;

b.addEventListener('click', p.showMessage);

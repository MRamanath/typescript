interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function RequiredPrperty(target: any, propertyName: string) {
  console.log(target);
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      'required',
    ],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      'positive',
    ],
  };
}

function validate(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid: boolean = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @RequiredPrperty
  title: string;

  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector('form')! as HTMLFormElement;

courseForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const titleEl = document.getElementById('course-title')! as HTMLInputElement;
  const priceEl = document.getElementById('course-price')! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    // throw new Error('Invalid input - try again');
    alert('nvalid input - try again');
    return;
  }
  console.log(createdCourse);
});

// decorators receive args must have

function Logger(constructor: Function) {
    console.log('logging.....');
    console.log(constructor);
  }
  
  @Logger
  class User {
    name = 'John';
  
    constructor() {
      console.log('creating person object');
    }
  }
  
  const u =new User();
  console.log(u);
// we get better type saftey with generics type;
// we get additional type information;

const names: Array<string> = []; // string[]
names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then((data) => {
    data.split(' ');
})
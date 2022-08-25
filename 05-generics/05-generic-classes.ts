class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const storage = new DataStorage<string>();
storage.addItem('item1');
storage.addItem('item2');

console.log(storage.getItems());

storage.removeItem('item1');
console.log(storage.getItems());


const storage2 = new DataStorage<number>();
storage2.addItem(123);
storage2.addItem(456);

console.log(storage2.getItems());

storage2.removeItem(123);
console.log(storage2.getItems());


const storage3 = new DataStorage<number | string>();
storage3.addItem(123);
storage3.addItem('aaa');

console.log(storage3.getItems());

storage3.removeItem(123);
console.log(storage3.getItems());

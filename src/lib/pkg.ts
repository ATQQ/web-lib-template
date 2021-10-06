import { DataItem } from '../types';

class PKG {
    private name: string

    public dataList: DataItem[]

    constructor(name: string) {
      console.log('hello world');
      this.name = name;
      this.dataList = [];
    }

    setName(name: string) {
      this.name = name;
    }

    getName() {
      return this.name;
    }

    sayHello() {
      console.log('hello', this.getName());
    }
}

export default PKG;

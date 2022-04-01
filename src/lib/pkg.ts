import { DataItem } from '../types';
import { addStyleDom } from '../utils';
import style from '../styles/pkg.scss';

class PKG {
  private name: string;

  private tagEl:HTMLElement | undefined;

  public dataList: DataItem[];

  constructor(name: string) {
    console.log('hello world');
    this.name = name;
    this.dataList = [];
    this.initTag();
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

  initTag() {
    const $div = document.createElement('div');
    // 添加内容
    $div.textContent = 'tpl web library ';
    // 添加样式
    $div.classList.add('pkg-wrapper');
    addStyleDom($div, style);
    document.body.append($div);

    this.tagEl = $div;
  }

  destroy() {
    if (this.tagEl) {
      this.tagEl.remove();
    }
  }
}

export default PKG;

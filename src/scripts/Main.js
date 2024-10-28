import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import Atropos from 'atropos';

class Main {
  constructor() {
    this.init();
    this.initAtropos();
  }

  init() {
    Icons.load();

    document.documentElement.classList.add('has-js');

    new ComponentFactory();
  }

  initAtropos() {
    const atroposInstances = document.querySelectorAll('.my-atropos');
    for (let i = 0; i < atroposInstances.length; i++) {
      Atropos({
        el: atroposInstances[i],
        shadow: false,
        highlight: false,
        rotateTouch: 'scroll-y',
      });
    }
  }
}
new Main();

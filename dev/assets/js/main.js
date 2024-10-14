'use strict';

import Erfahrungen from './modules/Erfahrungen';
import Sprachen from './modules/Sprachen';
import Clickme from './modules/startseite';

(() => {
  const DOM = {};
  DOM.body = document.querySelector('body'); // document.body;
  // == INIT ============
  const init = () => {
    console.log('init!');

    const page = DOM.body.dataset.page; // TODO: url parser

    switch (page) {
      case 'werdegang/erfahrung':
        Erfahrungen();
        break;
      case 'faehigkeit/sprachen':
        Sprachen();
        break;
      default:
        console.log('main JS');
        Clickme();
    }
  };

  init();
})();

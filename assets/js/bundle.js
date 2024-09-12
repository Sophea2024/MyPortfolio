(function () {
  'use strict';

  var Erfahrungen=function Erfahrungen(){// === DOM & VARS =======
  var DOM={};DOM.module=document.querySelector('.m-erfahrung-manager');DOM.table=DOM.module.querySelector('table');DOM.tBody=DOM.module.querySelector('tbody');DOM.templateProductRow=DOM.module.querySelector('.template-erfahrung-row');//console.log(DOM);
  //=== INIT ===============
  var init=function init(){console.log('Erfahrung testing!');fetch('../data/erfahrungen.json').then(function(res){if(!res.ok){throw new Error('`HTTP error! Status: ${res.status}`');}return res.json();}).then(function(data){console.log(data);data.forEach(function(erfahrung){addErfahrung(erfahrung);});})["catch"](function(err){return console.log('unable to fetch data:',err);});};//=== FUNKTION =============
  var addErfahrung=function addErfahrung(){var erfahrung=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var _erfahrung$duration=erfahrung.duration,duration=_erfahrung$duration===void 0?'':_erfahrung$duration,_erfahrung$employer=erfahrung.employer,employer=_erfahrung$employer===void 0?'':_erfahrung$employer,_erfahrung$title=erfahrung.title,title=_erfahrung$title===void 0?'':_erfahrung$title,_erfahrung$descriptio=erfahrung.description,description=_erfahrung$descriptio===void 0?'':_erfahrung$descriptio;var trEl=DOM.templateProductRow.content.cloneNode(true);trEl.querySelector('.td-duration').textContent=duration;trEl.querySelector('.td-employer').textContent=employer;trEl.querySelector('.td-title').textContent=title;trEl.querySelector('.td-description').textContent=description;DOM.tBody.appendChild(trEl);};init();};

  var Sprachen=function Sprachen(){// === DOM & VARS =======
  var DOM={};console.log(DOM);//=== INIT ===========
  var init=function init(){console.log('Test Sprache');};init();};

  //console.log(user);
  (function(){var DOM={};DOM.body=document.querySelector('body');// document.body;
  // == INIT ============
  var init=function init(){console.log('init!');var page=DOM.body.dataset.page;// TODO: url parser
  switch(page){case'werdegang/erfahrung':Erfahrungen();break;case'werdegang/sprachen':Sprachen();break;default:console.log('main JS');}};init();})();

})();

//# sourceMappingURL=bundle.js.map

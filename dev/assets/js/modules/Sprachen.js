const Sprachen = () => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.module = document.querySelector('.m-sprache-manager');
  DOM.table = DOM.module.querySelector('table');
  DOM.tBody = DOM.module.querySelector('tbody');

  DOM.templateProductRow = DOM.module.querySelector('.template-sprache-row');

  //console.log(DOM);

  //=== INIT ===============
  const init = () => {
    console.log('Sprachen testing!');

    fetch('../data/sprachen.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('`HTTP error! Status: ${res.status}`');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((sprache) => {
          addSprache(sprache);
        });
      })
      .catchSpracheconsole.log('unable to fetch data:', err);
  };

  //=== FUNKSprache========
  const addSprache = (sprache = {}) => {
    const { name = '', niveau = '' } = sprache;
    const trEl = DOM.templateProductRow.content.cloneNode(true);

    trEl.querySelector('.td-name').textContent = name;
    trEl.querySelector('.td-niveau').textContent = niveau;

    DOM.tBody.appendChild(trEl);
  };

  init();
};

export default Sprachen;

const Erfahrungen = () => {
  // === DOM & VARS =======
  const DOM = {};
  DOM.module = document.querySelector('.m-erfahrung-manager');
  DOM.table = DOM.module.querySelector('table');
  DOM.tBody = DOM.module.querySelector('tbody');

  DOM.templateProductRow = DOM.module.querySelector('.template-erfahrung-row');

  //console.log(DOM);

  //=== INIT ===============
  const init = () => {
    console.log('Erfahrung testing!');

    fetch('../data/erfahrungen.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('`HTTP error! Status: ${res.status}`');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        data.forEach((erfahrung) => {
          addErfahrung(erfahrung);
        });
      })
      .catch((err) => console.log('unable to fetch data:', err));
  };

  //=== FUNKTION =============
  const addErfahrung = (erfahrung = {}) => {
    const { duration = '', employer = '', title = '', description = '' } = erfahrung;

    const trEl = DOM.templateProductRow.content.cloneNode(true);

    trEl.querySelector('.td-duration').textContent = duration;
    trEl.querySelector('.td-employer').textContent = employer;
    trEl.querySelector('.td-title').textContent = title;
    trEl.querySelector('.td-description').textContent = description;

    DOM.tBody.appendChild(trEl);
  };

  init();
};

export default Erfahrungen;

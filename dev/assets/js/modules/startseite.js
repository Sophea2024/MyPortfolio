const Clickme = () => {
  const buttonclick = document.querySelector('.btn-about-me');

  console.log(buttonclick);
  // === Init-Function ===========
  const init = () => {
    buttonclick.addEventListener('click', loadPage);
  };

  // === Funtionen ================

  const loadPage = () => {
    window.location = 'uebermich.html';
  };

  init();
};

export default Clickme;

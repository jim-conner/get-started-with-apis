const buildDom = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
      <div id="display-section" class="d-flex flex-row flex-wrap justify-content-center"></div>
  </div>`;
};

export default buildDom;

const buildJoke = () => {
  document.querySelector('#display-section').innerHTML += `
  <div id="card-container">
    <div class="card text-center" id="joke-card">
      <img class="card-img-top" src="/images/jokegenjs 2.png" alt="Card image cap">
      <div class="card-body">
        <div id="joke-container">
          <h3 id="setup"></h3>
          <h3 id="punchline"></h3>
        </div>
        <div id="button-container">
          <button id="joke-button" type="joke-button" class="btn btn-dark">GET A JOKE</button>
        </div>
      </div>
    </div>
  </div>`;
};

export default buildJoke;

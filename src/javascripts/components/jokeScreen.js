const buildJoke = (jokeArray) => {
  jokeArray.forEach((item) => {
    document.querySelector('#display-section').innerHTML += `
      <div class="card text-center" id="jokeCard">
      <img class="card-img-top" src="/images/jokegenjs 2.png" alt="Card image cap"> 
        <div class="card-body">
          <h3>${item.setup}</h3>
          <h3>${item.punchline}</h3>
          <button id="joke-button--${item.id}" type="joke-button" class="btn btn-dark">GET A JOKE</button>
        </div>
      </div>`;
  });
};

export default buildJoke;

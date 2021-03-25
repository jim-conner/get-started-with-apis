const buildJoke = () => {
  // jokeArray.forEach(() => {
  document.querySelector('#display-section').innerHTML += `
      <div class="card text-center" id="jokeCard">
      <img class="card-img-top" src="/images/jokegenjs 2.png" alt="Card image cap"> 
        <button id="joke-button" type="joke-button" class="btn btn-dark">GET A JOKE</button>
      </div>`;
  // });
};

/* <div class="card-body">
<h3 id="setup">${item.setup}</h3>
<h3 id="punchline">${item.punchline}</h3>
</div> */

export default buildJoke;

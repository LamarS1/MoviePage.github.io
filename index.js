const apiUrlStart = 'http://www.omdbapi.com/?t=';
const apiUrlEnd = '&apikey=d4e17fd6';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

///Search by query
const SEARCHAPI =
  //  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';
  'http://www.omdbapi.com/?t=search&apikey=+d4e17fd6';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const module = document.getElementById('module');

this.data;

var movies = [
  { title: 'Inception', youtubeId: 'YoHD9XEInc0' },
  { title: 'The Departed', youtubeId: 'iojhqm0JTW4' },
  { title: 'Shutter Island', youtubeId: '5iaYLCiq5RM' },
  { title: 'Notorious', youtubeId: 'kDDv6pAbN_U' },
  { title: 'The Intouchables', youtubeId: '34WIbmXkewU' },
  { title: 'The Green Mile', youtubeId: 'Ki4haFrqSrw' },
  { title: 'The Matrix', youtubeId: 'vKQi3bBA1y8' },
  { title: 'The Hateful Eight', youtubeId: 'nIOmotayDMY' },
  { title: 'Interstellar', youtubeId: 'zSWdZVtXT7E' },
  { title: 'Catch Me If You Can', youtubeId: '7pyIxz8Qg' },
  { title: 'Snatch', youtubeId: '9Jar2XkBboo' },
  { title: 'The Usual Suspects', youtubeId: 'oiXdPolca5w' },
  { title: 'Inglorious Basterds', youtubeId: 'KnrRy6kSFF0' },
  { title: 'Django Unchained', youtubeId: '0fUCuvNlOCg' },
  { title: 'Se7en', youtubeId: 'znmZoVkCjpI' },
  { title: 'Scarface', youtubeId: '7pQQHnqBa2E' },
  { title: 'Hacksaw Ridge', youtubeId: 's2-1hz1juBI' },
  { title: 'Gangs of New York', youtubeId: 'qHVUPri5tjA' },
  { title: 'Blood Diamond', youtubeId: 'yknIZsvQjG4' },
  { title: 'Gran Torino', youtubeId: 'RMhbr2XQblk' },
];

showMovies(apiUrlStart, apiUrlEnd);

function showMovies(startUrl, endUrl) {
  let i = 0;

  movies.forEach((movie) => {
    console.log(movie.title);
    fetch(apiUrlStart + movie.title + apiUrlEnd)
      .then((response) => {
        return response.json();
      })
      .then((m) => {
        console.log(m);

        const el = document.createElement('div');
        el.setAttribute('class', 'movie-gallery');
        const image = document.createElement('img');

        const text = document.createElement('h2');
        const description = document.createElement('div');
        const movies = this.movies;

        const reviewBar = document.createElement('div-2');
        const metacriticRating = document.createElement('p');
        const rottenTomatoesRating = document.createElement('p');

        const video = document.createElement('iframe');

        video.setAttribute('class', 'video');
        video.src = 'https://www.youtube.com/embed/' + movie.youtubeId;

        image.src = m.Poster;
        description.innerText = m.Plot;
        text.innerHTML = m.Title;
        metacriticRating.innerText = 'Metacritic: ' + m.Ratings[2].Value;
        rottenTomatoesRating.innerText =
          'RottenTomatoes: ' + m.Ratings[0].Value;

        reviewBar.appendChild(metacriticRating);
        reviewBar.appendChild(rottenTomatoesRating);
        el.appendChild(text);
        // el.appendChild(video);
        //el.appendChild(description);
        el.appendChild(image);
        el.appendChild(reviewBar);
        main.appendChild(el);
      });
  });

  // fetch(movies)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((movies) => {
  //     console.log(movies);
  //     console.log(data.results);
  //     movies.forEach((movie) => {
  //       const card = document.createElement('div');
  //       card.setAttribute('class', 'card');

  //       const h1 = document.createElement('h1');
  //       h1.textContent = movie.title;

  //       card.appendChild(h1);
  //       main.appendChild(card);
  //     });
  //   });

  // showMovies(apiUrl);

  // function showMovies(url) {
  //   let i = 0;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then(function (data) {
  //       console.log(data);
  //       console.log(data.results);
  //       movies.forEach((element) => {
  //         ///const el for short
  //         const el = document.createElement('div');
  //         el.setAttribute('class', 'movie-gallery');
  //         const image = document.createElement('img');
  //         const text = document.createElement('h2');

  //         data = this.data;
  //         ///pass json on each loop
  //         text.innerHTML = `${element.title}`;
  //         image.src = IMGPATH + element.poster_path;

  //         ///content in divs
  //         el.appendChild(image);
  //         el.appendChild(text);
  //         //main div
  //         main.appendChild(el);

  //         ////click and pass values from fetch to be rendered
  //         ///html collection
  //         document
  //           .getElementsByClassName('movie-gallery')
  //           [i].addEventListener('click', function (e) {
  //             //  console.log(element);
  //             contentWrap(element);
  //           });
  //         i++;
  //       });
  //     });
  // }

  contentWrap = (element) => {
    ///clear the elm
    module.innerHTML = '';
    //srcs
    let imagesrc = IMGPATH + element.poster_path;
    // console.log(image.src);

    ///escape string insert values passed from fetch
    module.innerHTML += `
    <div class="Module-inner">
    <img src="${imagesrc}"  id="module-img" alt="">
    <div id="hero"> 
    <h1>${element.title}</h1>
    <p id="info">${element.overview}</p>
    </div>
    </div>
        `;
  };
  ///get stuff to render in

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    main.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
      showMovies(SEARCHAPI + searchTerm);
      search.value = '';
    }
  });

  // // const searchUrl = "http://www.omdbapi.com/?t="+searchTerm+"&apikey="+apiKey;Here is your key: 62ae43fb

  // Please append it to all of your API requests,

  // OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=62ae43fb

  // Click the following URL to activate your key: http://www.omdbapi.com/apikey.aspx?VERIFYKEY=bae0c994-e709-4218-a640-bd63be97cd28
  // If you did not make this request, please disregard this email.
}


var dieHard=  {
    "Title":"Die Hard",
    "Year":"1988",
    "Rated":"R",
    "Released":"20 Jul 1988",
    "Runtime":"131 min",
    "Genre":"Action, Thriller",
    "Director":"John McTiernan",
    "Writer":"Roderick Thorp (novel), Jeb Stuart (screenplay), Steven E. de Souza (screenplay)",
    "Actors":"Bruce Willis, Bonnie Bedelia, Reginald VelJohnson, Paul Gleason",
    "Plot":"New York City Detective John McClane has just arrived in Los Angeles to spend Christmas with his wife. Unfortunatly, it is not going to be a Merry Christmas for everyone. A group of terrorists, led by Hans Gruber is holding everyone in the Nakatomi Plaza building hostage. With no way of anyone getting in or out, it's up to McClane to stop them all. All 12!",
    "Language":"English, German, Italian",
    "Country":"USA",
    "Awards":"Nominated for 4 Oscars. Another 6 wins & 2 nominations.",
    "Poster":"http://ia.media-imdb.com/images/M/MV5BMTY4ODM0OTc2M15BMl5BanBnXkFtZTcwNzE0MTk3OA@@._V1_SX300.jpg",
    "Metascore":"70",
    "imdbRating":"8.3",
    "imdbVotes":"498,849",
    "imdbID":"tt0095016",
    "Type":"movie",
    "Response":"True"
  };



// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */
app.getMovieById = function getMovieById(id) {

  //console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");

  // request URL for omdb's id search
  // http://www.omdbapi.com/?i=tt0095016&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM
  $.ajax({
    type: 'GET',
    url: '',
    dataType: 'json',
    success: function(data){
      var movie = new app.MovieModel(data);
      var view = new app.MovieView(movie);
    },
    failure: function(err){
      console.log('Oh no, we couldn\'t get a movie!  Looks like it\'s king of queens reruns again...');
    }
  })

}

/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {

  //console.log("app.getMovieByTitle() has been called. the form stares at you blankly. wait, what? A title of '" + title + "' was entered");

  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM
  var movie = new app.MovieModel(dieHard);
  var view = new app.MovieView(movie);
  view.render();


  // $.ajax({
  //   type: 'GET',
  //   url: '',
  //   dataType: 'json',
  //   success: function(data){
  //     var movie = new app.MovieModel(data);
  //     var view = new app.MovieView(movie);
  //     view.render();
  //   },
  //   failure: function(error){
  //     console.log('Oh no, we couldn\'t get a movie!  Looks like it\'s king of queens reruns again...');
  //   }
  // })

}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {
  this.id = options.imdbID;
  this.title = options.Title;
  this.rating = options.Rated;
  this.director = options.Director;
  this.plot = options.Plot;
  this.year = options.Year;
  this.genre = options.Genre;
  this.poster = options.Poster;
  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model

}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {

  // options should contain the `model` for which the view is using

  // 1. create a view
  // 2. create a render() method
  // 3. render() should a div with a class of '.movie' via string concatenation
  //    you will want to add the id, title, rating, director, plot, year,
  //    and genre. See design/movielayout.html
  // 4. finally, render() will $(selector).append() each new '.movie' to "#movie-listing".

  var view = '<div class="movie">'+
               '<table>'+
                 '<tr>'+
                   '<td>'+
                     '<img src="'+options.poster+'" alt="'+options.title+'">'+
                   '</td>'+
                   '<td>'+
                     '<h3>'+options.title+'</h3>'+
                     '<p>'+
                       '<strong>Released: </strong>' + options.year+'<br>'+
                       '<strong>Directed By: </strong>' + options.director+'<br>'+
                       '<em>Genre: </em>'+ options.genre +
                     '</p>' +
                     '<p>' + options.plot +'</p>'+
                   '</td>'+
                  '</tr>'+
                '</table>'+
             '</div>';

  this.render = function(){
    $('#movie-listing').append(view);
  }
}

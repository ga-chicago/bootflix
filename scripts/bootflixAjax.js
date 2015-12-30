// ombd api documentation is available here:
// http://www.omdbapi.com/

/**
 * app.getMovieById
 * @param id    - omdb id of the movie you're searching for
 */
app.getMovieById = function getMovieById(id) {

  console.log("app.getMovieById() has been called. nothing happens. wait.. some tumbleweeds are tumbling by! an ID of '" + id + "' was entered.");

  // request URL for omdb's id search
  // http://www.omdbapi.com/?i=tt0095016&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM

  // var apiRequestURL = 'http://www.omdbapi.com/?i=' + id + '&r=json';
  var apiRequestURL = 'http://www.omdbapi.com/?i=' + id + '&r=json';
  console.log(apiRequestURL);

  $.ajax({
    type: 'get',
    dataType: 'json',
    url: apiRequestURL,
    success: function(data) {
      console.log('------Success--------');
      console.log('Title: ' + data.Title);
      console.log('Year: ' + data.Year);
      console.log('Data:');
      console.log(data);
      var movie = new app.MovieModel(data);
      console.log('model movie:');
      console.log(movie);
      var movieView = new app.MovieView(movie);
      movieView.render();
    },
    error: function(error) {
      console.log('------Error--------');
      console.log(error);
      // todo-- what to return??
    }
  });

}

/**
 * app.getMovieByTitle
 * @param title     - title of the movie you're searching for
 */
app.getMovieByTitle = function getMovieByTitle(title) {

  console.log("app.getMovieByTitle() has been called. the form stares at you blankly. wait, what? A title of '" + title + "' was entered");

  // request URL for omdb's title search:
  //http://www.omdbapi.com/?t=Die+Hard&y=1988&plot=full&r=json

  // 1. create your ajax request and then in your success method.
  // 2. you should create a new MovieModel object based on the returned
  // result.
  // var movie = new app.MovieModel(data);
  // 3. you should create a new MovieView object based on movie model
  // 4. you call render() on the view
  // 5. your render() should append the `$el` to the DOM

  var apiRequestURL = 'http://www.omdbapi.com/?t=' + title + '&r=json';
  console.log('url: ' + apiRequestURL);

  $.ajax({
    type: 'get',
    dataType: 'json',
    url: apiRequestURL,
    success: function(data) {
      console.log
      console.log('------Success--------');
      console.log('Title: ' + data.Title);
      console.log('Year: ' + data.Year);
      console.log(data);
      var movie = new app.MovieModel(data);
      var movieView = new app.MovieView(movie);
      movieView.render();

    },
    error: function(error) {
      console.log('------Error--------');
      console.log(error);
      // todo-- what to return??
    }
  });

}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {

  // id, title, rating, director, plot, year, genre should all be in the `options` object
  // store all the information in the model
  this.dood = 'Dood Is Here!';
  this.Title = options.Title;
  this.Year = options.Year;
  this.Rated = options.Rated;
  this.Released = options.Released;
  this.Runtime = options.Runtime;
  this.Genre = options.Genre;
  this.Director = options.Director;
  this.Writer = options.Writer;
  this.Actors = options.Actors;
  this.Plot = options.Plot;
  this.Language = options.Language;
  this.Country = options.Country;
  this.Awards = options.Awards;
  this.Poster = options.Poster;
  this.Metascore = options.Metascore;
  this.imdbRating = options.imdbRating;
  this.imdbVotes = options.imdbVotes;
  this.imdbID = options.imdbID;
  this.Type = options.Type;
  this.Response = options.Response;
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
  this.movieInfo = options;
  this.movieDiv = '';
  this.render = function() {
    console.log('------------this.render()----------');
    console.log(this.movieInfo);
    this.movieDiv = this.movieDiv + '<div class="movie">';
    this.movieDiv = this.movieDiv + '<h3>' + this.movieInfo.Title + '</h3>';
    this.movieDiv = this.movieDiv + '<p>';
    this.movieDiv = this.movieDiv + '<strong>Released:</strong> ' + this.movieInfo.Released + '<br>';
    this.movieDiv = this.movieDiv + '<strong>Directed By:</strong> ' + this.movieInfo.Director + '<br>';
    this.movieDiv = this.movieDiv + '<em>' + this.movieInfo.Genre + '</em>';
    this.movieDiv = this.movieDiv + '</p>';
    this.movieDiv = this.movieDiv + '<p>' + this.movieInfo.Plot + '</p>';
    this.movieDiv = this.movieDiv + '</div>';

    $('#movie-listing').append(this.movieDiv);

    console.log('this.movieDiv:');
    console.log(this.movieDiv);
  };
}

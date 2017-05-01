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
    url: 'http://www.omdbapi.com/?i='+id+'&plot=short&r=json',
    dataType: 'json',
    success: function(data){
      console.log('success!')
      var movie = new app.MovieModel(data);
      var view = new app.MovieView(movie);
      view.render();
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

  var urlTitle = title.replace(' ','+');


  $.ajax({
    type: 'GET',
    url: 'http://www.omdbapi.com/?t='+urlTitle+'&y=&plot=short&r=json',
    dataType: 'json',
    success: function(data){
      console.log('success!');
      var movie = new app.MovieModel(data);
      var view = new app.MovieView(movie);
      view.render();
    },
    failure: function(error){
      console.log('Oh no, we couldn\'t get a movie!  Looks like it\'s king of queens reruns again...');
    }
  })

}


/**
 * app.MovieModel
 * movie model constructor
 * @param options  - options object
 */
app.MovieModel = function MovieModel(options) {
  // Store the important things
  this.id = options.imdbID;
  this.title = options.Title;
  this.rating = options.Rated;
  this.director = options.Director;
  this.plot = options.Plot;
  this.year = options.Year;
  this.genre = options.Genre;
  this.poster = options.Poster;

}

/**
 * app.MovieView
 * movie view constructor
 * @param options  - options object
 */
app.MovieView = function MovieView(options) {
  // If we don't find a movie options.title === undefined
  if (options.title){
    //If there was a message appended saying we couldn't find a move, remove it
    $('#movie-listing h1').remove();
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
      // Add all that stuff ^^ to the top of the page
      $('#movie-listing').prepend(view);
    }
  }else{
    this.render = function(){
      $('#movie-listing').prepend('<h1>We found no titles matching your search results... Try again?</h1>');
    }
  }
}

//1.a
class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }


}




//1.b
class Movie1 {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

//1.c
class Movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }

static getPG(movies) {

return movies.filter(movie => movie.rating === `PG`);

}

}



const moviesArray = [

new Movie(`Movie1, Studio1, PG`),

new Movie(`Movie2, Studio2, PG-13`),

new Movie(`Movie3, Studio3, PG`),

];

const pgMovies = Movie.getPG(moviesArray);

console.log(`PG Rated Movies:`);

pgMovies.forEach(movie => {

    console.log(`Title:, ${movie.title},  Studio:, ${movie.studio},  Rating:, ${movie.rating}`);
});

 
//1.d
const Casino = new movie("Casino Royal", "Eon Productions", "PG13");
console.log(Casino)

const Casino1 = new Movie1("Casino Royal", "Eon Productions");
console.log(Casino1)



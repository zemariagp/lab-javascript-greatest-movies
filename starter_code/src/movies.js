/* eslint no-restricted-globals: 'off' */
const MOVIES = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: 9.0
    }]


// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function calculateAverageMovieRate(movies) {

    return movies.reduce((sum, movie) => sum + movie.rate / movies.length, 0);


}


// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(movies) {
    onlyDrama = movies.filter(movie => movie.genre.includes("Drama"));
    return calculateAverageMovieRate(onlyDrama);

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
    let sortedArray = movies.sort(

        function compare(movieA, movieB) {
            if (movieA.year > movieB.year) return 1;
            else if (movieA.year < movieB.year) return -1;
            else {
                // alphabetically order them;
                tempArray = [movieA, movieB];
                let sortedTempArray = tempArray.sort()
                if (tempArray[0].title === sortedTempArray[0].title) return -1;
            }
        })

    return sortedArray;



}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function countSpielbergDramaMovies(movies) {
    return movies.filter(movie => movie.genre.includes("Drama") && movie.director === "Steven Spielberg").length
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    titlesArray = movies.map(movie => movie.title);
    let sortedTitlesArray = titlesArray.sort();
    return sortedTitlesArray.slice(0, 20);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
     return movies.map(function (movie) {
        function convertTime(stringOfTime) {
            let reducer = function (acc, element) {
                let lastChar = element.charAt(element.length - 1)
                if (lastChar === "h") {
                    return Number(element.substring(0, element.length - 1)) * 60;;
                } else {
                    return (acc + Number(element.substring(0, element.length - 3)))
                }
            }

            return stringOfTime.split(" ").reduce(reducer, 0);
        }
        movie.duration = convertTime(movie.duration);
        return movie;
    })
}


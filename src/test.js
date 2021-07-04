
const movies = require("./data");
const testArr = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      score: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      score: 8.4
    }
  ];
  

const directorsFilter = movies.map((movies) => {
    return movies.title; 
  });

console.log(movies.length);
import axios from 'axios';

export const API_KEY = '00bb2c85647763d13c7f7e27b824373c'; //ключ
export const BASE_URL = 'https://api.themoviedb.org/3/'; //базове юрл


// 'https://api.themoviedb.org/3/trending/all/day?api_key=00bb2c85647763d13c7f7e27b824373c'

// посилання на початковий рендер популярних фільмів
export const popularMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );

    return data.results;
};


// https://api.themoviedb.org/3/search/movie?api_key=00bb2c85647763d13c7f7e27b824373c&language=en-US&page=1&include_adult=false&query=cat

//посилання на пошук фільмів за назвою
export const moviesByName = async (query) => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data;
};

// 'https://api.themoviedb.org/3/movie/20?api_key=00bb2c85647763d13c7f7e27b824373c&language=en-US'

// запит повної інформації про фільм для сторінки кінофільму.
export const movieFullInfo = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};


// 'https://api.themoviedb.org/3/movie/20/credits?api_key=00bb2c85647763d13c7f7e27b824373c&language=en-US'


// запит інформації про акторський склад для сторінки кінофільму
export const movieActors = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};



// 'https://api.themoviedb.org/3/movie/100/reviews?api_key=00bb2c85647763d13c7f7e27b824373c&language=en-US&page=1'

// запит оглядів для сторінки кінофільму
export const movieReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};


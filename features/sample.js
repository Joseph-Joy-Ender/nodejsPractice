const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/movie_id/images';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjEzNTI3MzBjMzNhM2ZjZTAwOTIxMDJhMjg1YTI0NCIsInN1YiI6IjY1ZThhNjRmY2FhYjZkMDE2Mjk1YTc1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mnHWRiQf58ZwPfgY55aJUc9cTMG6NPKtc7pOwNtFNHs'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
import React, { Component } from 'react';
import './App.css';

import Movie from './Movie';

class App extends Component {

    state = {

    }

    componentDidMount() {
        this._getMovies();
    }

    _getMovies = async() => {
        const movies = await this._callApi();
        this.setState({
            movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
         .then(response => response.json())
         .then(json => json.data.movies)
         .catch(err => console.log(err))
    }

    _renderMovies = () => {
        const movies = this.state.movies.map((movie) => {
            return <Movie
                title={movie.title}
                poster={movie.medium_cover_image}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }

  render() {
    return (
      <div className="App">
          {this.state.movies ? this._renderMovies() : 'Loading..???!'}
      </div>
    );
  }
}

export default App;

// componentDidMount() {
//     setTimeout(() => {
//         this.setState({
//             movies: [
//                 {
//                     title: "Matrix",
//                     poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
//                 },
//                 {
//                     title: "Full Metal Jacket",
//                     poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg",
//                 },
//                 {
//                     title: "Old Boy",
//                     poster: "https://www.languagetrainers.com/reviews/foreign-film-reviews/uploads/9214-Oldboy.jpg",
//                 },
//                 {
//                     title: "Star Wars",
//                     poster: "https://i2.wp.com/studybreaks.com/wp-content/uploads/2018/03/Star-Wars-feature-image.jpg?w=1600&ssl=1"
//                 },
//                 {
//                     title: "Thor",
//                     poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg"
//                 }
//             ]
//         })
//     }, 2000)
// }
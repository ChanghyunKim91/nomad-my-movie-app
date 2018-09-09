import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) =>
                        <MovieGenre
                            genre={genre}
                            key={index}
                        />
                    )}
                </div>
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster"/>
    );
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">
            {genre}
        </span>

    )
}

Movie.propTypes = {
    title: PropTypes.toString().isRequired,
    poster: PropTypes.toString().isRequired,
    genres: PropTypes.toString().isRequired,
    synopsis: PropTypes.toString().isRequired,

}

MoviePoster.propTypes = {
    poster: PropTypes.toString().isRequired,
    alt: PropTypes.toString().isRequired,
}

MovieGenre.propTypes = {
    genre: PropTypes.toString().isRequired
}

// class Movie extends Component {
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         );
//     }
// }

// class MoviePoster extends Component {
//     render() {
//         return (
//             <img src={this.props.poster} />
//         )
//     };
// }

export default Movie
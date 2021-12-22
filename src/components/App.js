import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import axios from "axios";
//require(`dotenv`).config();
// error ???

class App extends Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );

    this.setState({
      movies: response.data.results,
    });
  }

  deleteMovie = (movie) => {
    let newMovieList = this.state.movies.filter((mov) => {
      return mov.id !== movie.id;
    });
    this.setState({
      movies: newMovieList,
    });
  };

  searchMovie = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  render() {
    let filteredMovies = this.state.movies.filter((mov) => {
      return (
        mov.title
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SearchBar searchMovieProp={this.searchMovie} />
            </div>
          </div>

          <MovieList
            movies={filteredMovies}
            deleteMovieProps={this.deleteMovie}
          />
        </div>
      </div>
    );
  }
}

export default App;

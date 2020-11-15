import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../firebase";

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("hotstarMovie")
      .on("value", (hotstarMovies) => {
        let movieInfo = [];
        hotstarMovies.forEach((movie) => {
          movieInfo.push({
            id: movie.key,
            url: movie.val().url,
            name: movie.val().name,
            rating: movie.val().rating,
            description: movie.val().description,
            type: movie.val().type,
            language: movie.val().language,
            year: movie.val().year,
            user: this.props.user,
          });
        });
        this.setState({ movies: movieInfo });
      });

    try {
    } catch (err) {
      toast.error(err.message);
    }
  }
  render() {
    let Movies = this.state.movies.map((movie) => (
      <Fragment key={movie.id}>
        <div className="col-md-3">
          <video controls>
            <source src={movie.url}></source>
          </video>
          <h5>{movie.name}</h5>
          <p>{movie.year}</p>
          <p>{movie.description}</p>
          <p>{movie.type}</p>
          <p>{movie.language}</p>
          <p>{movie.rating}</p>
          <p>
            uploaded By : <span>{movie.user.displayName}</span>
            <span>
              <img src={movie.user.photoURL} alt={movie.user.displayName} />
            </span>
          </p>
        </div>
      </Fragment>
    ));

    return (
      <Fragment>
        <section className="moviesBlock">
          <h2>Hindi</h2>
          <article className="row">
            {this.state.movies.length > 0 ? Movies : "loading..."}
          </article>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(ListMovies);

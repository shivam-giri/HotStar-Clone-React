import React, { Component, Fragment } from "react";
class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      year: "",
      description: "",
      rating: 0,
      language: "",
      type: "",
      video: null
    };
  }

  render() {
    return (
      <Fragment>
        <section className="authBlock">
          <section className="card col-md-8 mx-auto">
            <article className="form-block">
              <h5 className="h5 font-weight-bold p-4">Add Movie to continue</h5>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="Genre">Genre</label>
                        <input
                          type="text"
                          className="form-control"
                          name="genre"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="description">description</label>
                        <textarea
                          className="form-control"
                          name="description"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <input
                          type="number"
                          className="form-control"
                          name="rating"
                          max="5"
                          min="0"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="language">Language</label>
                        <input
                          type="text"
                          className="form-control"
                          name="language"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="language">Type</label>
                        <select name="type" id="type" className="form-control">
                          <option value="horror">horror</option>
                          <option value="drama">Drama</option>
                          <option value="action">Action</option>
                          <option value="comedy">Comedy</option>
                          <option value="romance">Romance</option>
                          <option value="thriller">Thriller</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label htmlFor="language">Upload Movie</label>
                        <input
                          type="file"
                          className="form-control"
                          name="video"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group p-2">
                    <button className="btn float-right btn-outline-primary">
                      Add Movie
                    </button>
                  </div>
                </form>
              </div>
            </article>
          </section>
        </section>
      </Fragment>
    );
  }
}

export default AddMovieForm;

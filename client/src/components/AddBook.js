import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';


class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '',
    };
  }

  displayAuthors() {
    var data = this.props.data;

    if (data.loading) {
      return (<option disabled>Loading Authors...</option>);
    } else {
      return data.authors.map(author => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  }

  onSubmit(e) {
    console.log(this.state);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form
          id="add-book"
          onSubmit={this.onSubmit.bind(this)}
        >
          <div className="field">
            <label>Book name:</label>
            <input
              type="text"
              onChange={ (e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Genre:</label>
            <input
              type="text"
              onChange={ (e) => this.setState({ genre: e.target.value })}
            />
          </div>

          <div className="field">
            <label>Author:</label>
            <select
              onChange={ (e) => this.setState({ authorId: e.target.value })}
            >
              <option>Select author</option>
              {this.displayAuthors()}
            </select>
          </div>

          <button>+</button>
        </form>
      </div>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);

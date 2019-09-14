import React from 'react';
import './App.css';
import Axios from 'axios';
import { BookListComponent } from './BookListComponent';
import loader from './loader.gif';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '', 
      loading: false, 
      books: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.search(this.state.value);
  }

  getBooks = async query => {
    const response = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                            .then(res => res.data.items)
                            .catch(error => console.log(error));

    return response;
  }

  search = async val => {
    this.setState({ loading: true });

    const books = await this.getBooks(val.replace(" ", "+"));
    this.setState({ books, loading: false });
  };
 
  renderBooks() {
    let books = <h3 className="text-center text-white">No Books</h3>;
    if (this.state.books) {
      books = <BookListComponent list={this.state.books} />;
    }

    return books;
  };

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">

          <h2 className="text-center my-5 text-white">Bookfinder App</h2>

          <form className="my-3 text-center" onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <input 
                  type="text" 
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control" 
                  placeholder="Search for a book!" 
                  aria-label="Search for a book!" 
                  aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <input className="btn btn-success" type="submit" value="Submit" />
                </div>
              </div>
            </form>
              {this.state.loading ? <img className="center-block" src={loader} alt="loading gif" /> : this.renderBooks()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

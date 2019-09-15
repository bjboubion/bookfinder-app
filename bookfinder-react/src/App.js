import React from 'react';
import './App.css';
import Axios from 'axios';
import { BookListComponent } from './BookListComponent';
import { FormErrors } from './Components/Form/FormErrors';
import loader from './loader.gif';
import SearchComponent from './Components/Form/SearchComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '', 
      formErrors: { query: '' },
      loading: false, 
      books: [],
      queryValid: false,
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value},
        () => { this.validateField(name, value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.query);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let queryValid = this.state.queryValid;
  
    switch(fieldName) {
      case 'query':
        queryValid = value.length > 0;
        fieldValidationErrors.query = queryValid ? '': ' cannot be empty';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    queryValid: queryValid,
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.queryValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  getBooks = async query => {
    const response = await Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
                            .then(res => res.data.items)
                            .catch(error => console.log(error));

    return response;
  }

  emptyInput() {
    return <h1>hey, provide an input</h1>
  }

  search = async val => {
    this.setState({ loading: true });

    const books = await this.getBooks(val.replace(" ", "+"));
    this.setState({ books, loading: false });
  };
 
  renderBooks() {
    let books = <h3 className="text-center text-white">No Books</h3>;
    if (this.state.value === "") {
      books = this.emptyInput();
    } else if (this.state.books) {
      books = <BookListComponent list={this.state.books} />;
    }

    return books;
  };

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h1 className="text-center mt-5 text-white">Bookfinder App</h1>
          <h4 className="text-white text-center mb-5">Author: bjboubion, aka mamba_mentality</h4>
          
          
          <form className="my-3 text-center" onSubmit={this.handleSubmit}>

          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>

            <SearchComponent formValid={!this.state.formValid} errorClass={this.errorClass(this.state.formErrors.query)} value={this.state.query} handleChange={this.handleChange} />
          </form>
            {this.state.loading ? <img className="center-block" src={loader} alt="loading gif" /> : this.renderBooks()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

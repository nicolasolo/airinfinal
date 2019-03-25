import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import popper from 'popper.js';
import 'jquery/dist/jquery';
import path from 'path';
import AppNav from './components/AppNav';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';


import { Provider } from 'react-redux';
import store from './Store';
import Cards2 from './components/Cards2';

class App extends Component {
  render() {
      return (
          <Provider store={store}>
      <div className="App">
                <header class="blog-header py-3">
                    <div class="row flex-nowrap justify-content-between align-items-center">
                        <div class="col-4 pt-1">
                            <a class="text-muted" href="#">Subscribe</a>
                        </div>
                        <div class=" text-center">
                            <a class="blog-header-logo text-dark" href="#">Airin Love For Children</a>
                        </div>
                        <div class="col-4 d-flex justify-content-end align-items-center">
                            <a class="text-muted" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                            </a>
                            <a class="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                        </div>
                    </div>
                </header>
       
            <AppNav />
            <Jumbotron />
                  <Cards />
                  <Cards2 />


              </div>
          </Provider>
    );
  }
}

export default App;

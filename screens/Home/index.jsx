// Home Screen
import React, {Component} from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import './index.scss';

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({dispatch, pushState})

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends Component {
  render() {
    return (
      <section className="home-wrapper">
        <main>
          <h1>Home Page</h1>
        </main>
      </section>
    );
  }
};

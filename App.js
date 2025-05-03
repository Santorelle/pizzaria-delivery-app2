import * as React from 'react';
import { connect } from 'react-redux';

import {Calendar} from './Calendar';

const AppComponent = ({foo}) => (
  <div>
    <h1>Hi</h1>
  </div>
)

const mapStateToProps = (state) => {
  return {
    foo: state.data.txt,
  }
}

export const App = connect(mapStateToProps)(AppComponent);
import './shared/typography.styl';

import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header';

render(
  <Header name="test" />,
  document.getElementById('app')
);

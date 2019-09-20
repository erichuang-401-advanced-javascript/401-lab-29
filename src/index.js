import React from 'react';
import ReactDOM from 'react-dom';

import content from './content.json';
import Page from './components/page/page';

const App = () => {
  return <Page content={content} />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

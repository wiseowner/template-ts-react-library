import React from 'react';
import ReactDom from 'react-dom';
import AReactComponent from '../src';

class App extends React.Component<any> {
  public render() {
    return (
      <div>
        <AReactComponent hello="hello" />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));

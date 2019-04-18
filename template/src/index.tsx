import React, { ChangeEvent } from 'react';

import './index.less';

interface IProps {
  hello: string;
}

export default class AReactComponent extends React.Component<IProps, { value: string }> {
  public readonly state = {
    value: '',
  };
  public handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
  };
  public render() {
    return (
      <div className="a-react-component">
        AReactComponent
        <div>
          <input value={this.state.value} onChange={this.handleChange} />
        </div>
        {this.props.hello}:{this.state.value}
      </div>
    );
  }
}

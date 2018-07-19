import * as React from 'react';
import Tabs from '../../src/components/Tabs';

interface State {
  current?: number;
}

const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class TabTest extends React.PureComponent<{}, State> {
  state = { current: undefined };

  onClick = (idx: number) => () => {
    this.setState({ current: idx });
  }

  render() {
    const { current } = this.state;
    return (
      <Tabs color="primary">
        {count.map((_, idx) => (
          <Tabs.Item key={idx} active={current === idx}>
            <a onClick={this.onClick(idx)}>item{idx}</a>
          </Tabs.Item>
        ))}
      </Tabs>
    );
  }
}

import React from 'react';

class TestComponent extends React.Component {
  render() {
    const props = this.props
    return(
      <div>
        {props.title}
      </div>
    )
  }
}

export default TestComponent

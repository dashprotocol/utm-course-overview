import React from 'react';

const divStyle = {
  padding: '0 20px',
  borderLeft: '1px solid whitesmoke',
  borderRight: '1px solid whitesmoke',
};

class CollapseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data1,
      test1: 'string',
      isToggleOn: true,
      isToggleOn1: true,
      isToggleOn2: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    console.log(this.props.data1.course.course_name);
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  handleClick1() {
    this.setState((state) => ({
      isToggleOn1: !state.isToggleOn1,
    }));
  }

  handleClick2() {
    this.setState((state) => ({
      isToggleOn2: !state.isToggleOn2,
    }));
  }


  render() {
    return (
      <div style={divStyle}> 
        <div>Text goes here</div>
        <button onClick={this.handleClick}>{this.state.test1}</button>
        <TestComponent willRender={this.state.isToggleOn} />
        <button onClick={this.handleClick1}>Button2</button>
        <TestComponent willRender={this.state.isToggleOn1} />
        <button onClick={this.handleClick2}>Button3</button>
        <TestComponent willRender={this.state.isToggleOn2} />
      </div>
    );
  }
}

const TestComponent = (props) => {
  if (props.willRender) {
    return (
      <div className="sectionContent">
        <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
  return null;
};


export default CollapseBar;

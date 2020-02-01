import React from 'react';
import $ from 'jquery';
import CollapseBar from './CollapseBar.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {},
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/test1',
      success: (data) => {
        this.setState({
          course: data,
        });
        console.log(this.state.course);
      },
    });
  }

  render() {
    const { course } = this.state;
    return (
      <div className="container">
        <h1>Accordion</h1>
        <CollapseBar title="Header" data1={course} />
      </div>
    );
  }
}

export default App;
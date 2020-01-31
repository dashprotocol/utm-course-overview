import React from 'react';
import $ from 'jquery';
import CollapseBar from './CollapseBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/test1',
      success: (data) => {
        console.log(data);
        this.setState({data: data});
      },
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Accordion</h1>
        <CollapseBar title="Header" />
      </div>
    );
  }
}

export default App;
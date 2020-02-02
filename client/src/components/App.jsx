import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import CollapseBar from './CollapseBar.jsx';
import styled from 'styled-components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: [],
    };
  }

  componentDidMount() {
    // $.ajax({
    //   type: 'GET',
    //   url: 'http://localhost:3000/test1',
    //   success: (data) => {
    //     this.setState({
    //       course: data,
    //     });
    //     console.log(this.state.course);
    //   },
    // });
    this.getCourseData();
  }

  getCourseData() {
    axios.get('http://localhost:3000/test1')
      .then((response) => {
        console.log(response.data.course.course_name);
        this.setState({
          course: response.data,
        });
      });
  }

  render() {
    const { course } = this.state;
    return (
      <div className="container">
        <h1>Course content <ExpandButton>Expand All</ExpandButton></h1>
        <CollapseBar title="Header" data1={course} />
      </div>
    );
  }
}

const ExpandButton = styled.button`
  border: none;
  background-color: white;
  float: right;
`;

export default App;

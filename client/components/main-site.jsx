import React from 'react';
import $ from 'jquery';


class MainSite extends React.Component {
  constructor() {
    super();
    this.state = {
      main_info: []
    };
  }

  componentDidMount() {
    const that = this;
    console.log('hello')
    //use fetch and promises
    fetch('/info', {
      method: 'POST'
    })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(JSON.stringify(myJson)), 'jason';
      // that.setState({
      //   main_info: myJson
      // });
      return JSON.stringify(myJson);
    });
  }

  render() {
    return (
      <div className='main-site'>
        {this.state.main_info}
      </div>
    )
  }
}

module.exports = MainSite;
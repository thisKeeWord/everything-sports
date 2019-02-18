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
      console.log(response.body, 'response')
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson, 'jason');
      const json_results = [];
      for (let i = 0; i < myJson.length; i++) {
        json_results.push(myJson[i].articles)
      }
      console.log(json_results)
      that.setState({
        main_info: json_results
      });
      return JSON.stringify(myJson);
    })
    .catch(err => console.error(err));
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
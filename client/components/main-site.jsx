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
    $.post('/info', res => {
      that.setState({
        main_info: res
      });
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
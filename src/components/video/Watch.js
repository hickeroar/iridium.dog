import React, { Component } from 'react';

import './Watch.css';

class Watch extends Component {
  render() {
    return (
      <div className="page-body video-watch">
        <iframe title="youtube" width="100%" height="540px" src={`https://www.youtube.com/embed/${this.props.match.params.youtubeId}`} frameBorder="0" allowFullScreen={true}> </iframe>
      </div>
    );
  }
}

export default Watch;

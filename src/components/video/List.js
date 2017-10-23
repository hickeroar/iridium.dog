import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './List.css';

class List extends Component {

  videoList = [
    {
      'title': 'Undeserved',
      'id': 'mb4s6MoF5Fg',
    },
    {
      'title': 'It\'s Gonna Be OK',
      'id': 'osvXLQn5bRQ',
    },
    {
      'title': 'It\'s Gonna Be OK (Instrumental)',
      'id': 'FGKSi3TotBM',
    }
  ];

  render() {
    return (
      <div className="page-body video-list">
        {this.videoList.map((video, idx) => {
          return <div key={idx}><Link to={`/video/${video.id}/`}>
            <div className="video-image"><img src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} alt={video.id}/></div>
            <div className="video-title">{video.title}</div>
          </Link></div>
        })}
      </div>
    );
  }
}

export default List;

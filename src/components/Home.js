import React from 'react';
import { Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react';

import './Home.css';

const Home = () => (
  <div className="page-body home">
    <div><Link to={`/video/`}>
      <div className="title">
        <MaterialIcon icon="ondemand_video" size={75} />
        Video
      </div>
    </Link></div>
    <div><Link to={`/code/`}>
      <div className="title">
        <MaterialIcon icon="code" size={75} />
        Code
      </div>
    </Link></div>
    <div><Link to={`/web/`}>
      <div className="title">
        <MaterialIcon icon="web" size={75} />
        Web
      </div>
    </Link></div>
    <div><Link to={`/about/`}>
      <div className="title">
        <MaterialIcon icon="info_outline" size={75} />
        About
      </div>
    </Link></div>
  </div>
);

export default Home;

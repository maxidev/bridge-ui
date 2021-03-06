import React from 'react';
import { Link } from  'react-router-dom'

export const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/"><i className="header-logo" /></Link>
      <div className="links_container">
        <Link to='/events' className="link">
          <i className="icon_events" /><span className='link_text'>Events</span>
        </Link>
        <Link to='/status' className="link">
          <i className="icon_status" /><span className='link_text'>Status</span>
        </Link>
        <Link to='/statistics' className="link">
          <i className="icon_statistics" /><span className='link_text'>Statistics</span>
        </Link>
      </div>
    </div>
  </header>
);

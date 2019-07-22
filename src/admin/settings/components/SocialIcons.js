import React from 'react';
import { __, sprintf } from '../i18n';
import { Nav } from 'react-bootstrap';

export default () => {

  const { wptelegram_widget: { settings: { assets } } } = window;

  return (
    <Nav variant="pills" className="justify-content-center">
      <Nav.Item className="px-2 py-1">
        <div className="fb-like d-flex" data-href="https://www.facebook.com/WPTelegram" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
      </Nav.Item>
      <Nav.Item className="px-2 py-1">
        <a href="https://twitter.com/WPTelegram" className="twitter-follow-button d-flex" data-show-count="false">{sprintf(__( 'Follow %s' ), '@WPTelegram' )}</a>
      </Nav.Item>
      <Nav.Item className="px-2 py-1">
        <a href="https://t.me/WPTelegram" target="_blank" className="bg-info text-white d-flex" style={{height: '20px',paddingTop:'1px',paddingRight:'8px',paddingLeft:'6px',paddingBottom:'1px', borderRadius: '3px',textDecoration: 'none'}}>
          <img
            src={assets.tg_icon}
            className="d-inline-block align-middle mr-1"
            alt={' '}
          />
          <small>{sprintf(__( 'Join %s' ), '@WPTelegram' )}</small>
        </a>
      </Nav.Item>
    </Nav>
  );
}
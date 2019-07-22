import React from 'react';
import { __, sprintf } from '../i18n';
import Code from './Code';

export default () => {

  const { wptelegram_widget: { settings: { assets: { pull_updates_url } } } } = window;

  return (
    <div>
      <span className="text-danger font-weight-bold my-1 mx-3 d-block">{__('INSTRUCTIONS!')}</span>
      <ol>
        <li dangerouslySetInnerHTML={{ __html: sprintf( __( 'Create a Bot by sending %1$s command to %2$s.' ), '<b><code>/newbot</code></b>', '<a href="https://t.me/BotFather"  target="_blank">@BotFather</a>' ) }}></li>
        <li>{sprintf( __( 'After completing the steps %s will provide you the Bot Token.' ), '@BotFather' )}</li>
        <li dangerouslySetInnerHTML={{ __html: __( 'Copy the token and paste into the Bot Token field below.' ) + ' ' + sprintf( __( 'For ease, use %s' ), '<a href="https://desktop.telegram.org" target="_blank">Telegram Desktop</a>' ) }}></li>
        <li>{__( 'Add the Bot as Administrator to your Channel/Group' )}</li>
      </ol>
      <p style={{color:'#396609',fontSize: 'initial'}} className="m-3">
        <b>{__( 'Tip!' )}{'💡'}</b>{' '}
        <span>
          {__( 'Updates are pulled every five minutes if someone visits your website.' )}
        </span>{' '}
        <span>
          {__( 'To make sure the updates are pulled in time, it is recommended to set up a cron on your hosting server that hits the below URL every five minutes or so.' )}
        </span>
        <br />
        <Code>{pull_updates_url}</Code>
      </p>
    </div>
  );
}
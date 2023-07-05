import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { myPluginPlugin, MyPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(myPluginPlugin)
  .addPage({
    element: <MyPluginPage />,
    title: 'Root Page',
    path: '/my-plugin'
  })
  .render();

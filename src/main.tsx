/// <reference path="../typings/bundle.d.ts"/>

import * as React from 'react';
import {render} from 'react-dom';
import {CommentBox} from './components/CommentBox';

const data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

render(<CommentBox data={data}/>, document.getElementById('content'))

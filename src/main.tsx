/// <reference path="../typings/bundle.d.ts"/>

import * as React from 'react';
import {render} from 'react-dom';
import {CommentBox} from './components/CommentBox';

render(<CommentBox/>, document.getElementById('content'))

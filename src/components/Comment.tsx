/// <reference path="../../typings/bundle.d.ts"/>

import * as React from 'react';
import * as marked from 'marked';

export interface CommentProps {
  author: string;
  key?: string;
  children?: React.ReactElement<any>[];
}

export interface CommentState {

}

export class Comment extends React.Component<CommentProps, CommentState> {

  constructor(props: CommentProps) {
    super(props)
  }

  rawMarkup(): {__html: string} {
    var rawMarkup = marked.parse(this.props.children.toString(), {sanitize: true})
    return {__html: rawMarkup}
  }

  render(): JSX.Element {
    return (
      <div className="comment">
        <h2>{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
      </div>
    )
  }
}

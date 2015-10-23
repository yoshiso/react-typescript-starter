import * as React from 'react';

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

  render(): JSX.Element {
    return (
      <div className="comment">
        <h2>{this.props.author}</h2>
        {this.props.children}
      </div>
    )
  }
}

import * as React from 'react';
import {Comment} from './Comment';

export interface CommentListProps {

}

export interface CommentListState {

}

export class CommentList extends React.Component<CommentListProps, CommentListState> {


  constructor(props: CommentListProps) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke"> This is two comment</Comment>
      </div>
    )
  }
}

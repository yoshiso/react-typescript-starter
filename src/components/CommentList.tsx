import * as React from 'react';
import {Comment} from './Comment';

export interface CommentListProps {
  data: Array<{author: string, text: string}>
}

export interface CommentListState {

}

export class CommentList extends React.Component<CommentListProps, CommentListState> {


  constructor(props: CommentListProps) {
    super(props)
  }

  render(): JSX.Element {
    const commentNodes = this.props.data.map((commentData) => {
      return <Comment author={commentData.author}>{commentData.text}</Comment>
    })

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    )
  }
}

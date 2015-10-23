import * as React from 'react';

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
        Hello, world! I am a CommentList.
      </div>
    )
  }
}

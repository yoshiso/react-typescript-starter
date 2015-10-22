import * as React from 'react';

export interface Props {

}

export interface State {

}

export class CommentBox extends React.Component<Props, State> {


  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    )
  }
}

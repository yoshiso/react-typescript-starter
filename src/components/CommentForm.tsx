import * as React from 'react';

export interface CommentFormProps {

}

export interface CommentFormState {

}

export class CommentForm extends React.Component<CommentFormProps, CommentFormState> {


  constructor(props: CommentFormProps) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    )
  }
}

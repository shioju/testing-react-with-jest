import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
  constructor(props) {
    super();
    this.state = {data: props.data};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    let comments = this.state.data;
    let newComments = [comment].concat(comments);
    this.setState({data: newComments});
  }

  render() {
    return (
      <div className="commentBox">
        <h1 className="bar foo">Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

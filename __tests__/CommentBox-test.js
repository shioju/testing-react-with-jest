jest.dontMock('../components/CommentBox');

import React from 'react/addons';
const CommentBox = require('../components/CommentBox');
const CommentForm = require('../components/CommentForm');
const CommentList = require('../components/CommentList');
const TestUtils = React.addons.TestUtils;

describe('CommentBox', () => {
  let commentBox;
  
  beforeEach(() => {
    commentBox = TestUtils.renderIntoDocument(<CommentBox data='zzz'/>);
  });

  it('initializes state with props', () => {
    expect(commentBox.state.data).toEqual('zzz');
  });

  it('handleCommentSubmit changes state', () => {
    commentBox.handleCommentSubmit('foo');
    commentBox.handleCommentSubmit('bar');
    expect(commentBox.state.data).toEqual(['bar', 'foo', 'zzz']);
  });

  it('renders the correct DOM', () => {
    const renderedDOM = React.findDOMNode(commentBox);
    
    expect(renderedDOM.tagName).toBe('DIV');
    expect(renderedDOM.className).toEqual('commentBox');
      
    const children = renderedDOM.querySelectorAll('h1.foo.bar');
    expect(children.length).toBe(1);
    expect(children[0].innerHTML).toEqual('Comments');
  });

  it('renders a CommentForm', () => {
    const commentForm = TestUtils.findRenderedComponentWithType(commentBox, CommentForm);
    expect(TestUtils.isCompositeComponentWithType(commentForm, CommentForm)).toBe(true);
  });

  it('renders a CommentList', () => {
    const commentList = TestUtils.findRenderedComponentWithType(commentBox, CommentList);
    // console.log(commentList);
    expect(TestUtils.isCompositeComponentWithType(commentList, CommentList)).toBe(true);
  });
});
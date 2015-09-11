jest.dontMock('../components/CommentForm');

import React from 'react/addons';
const CommentForm = require('../components/CommentForm');
const TestUtils = React.addons.TestUtils;

describe('CommentForm', () => {
  let commentForm, callback;
  
  beforeEach(() => {
    callback = jest.genMockFunction();
    commentForm = TestUtils.renderIntoDocument(<CommentForm onCommentSubmit={callback} />);
  });

  it('renders the correct DOM', () => {
    const renderedDOM = React.findDOMNode(commentForm);
    
    expect(renderedDOM.tagName).toBe('FORM');
    expect(renderedDOM.className).toEqual('commentForm');
      
    const children = renderedDOM.querySelectorAll('input');
    expect(children.length).toBe(3);
  });

  describe('the onCommentSubmit callback', () => {
    it('is called with the right params when both author and text filled in', () => {
      const e = { preventDefault: () => {}};
      React.findDOMNode(commentForm.refs.author).value = 'John';
      React.findDOMNode(commentForm.refs.text).value = 'Welcome to ReactJS meetup';
      commentForm.handleSubmit(e);

      expect(callback.mock.calls.length).toBe(1);
      expect(callback.mock.calls[0][0]).toEqual({author: 'John', text: 'Welcome to ReactJS meetup'});
    });

    it('is not called when author and text are blank', () => {
      const e = { preventDefault: () => {}};
      commentForm.handleSubmit(e);

      expect(callback.mock.calls.length).toBe(0);
    });
  });
});
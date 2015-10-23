
var React = require('react'),
    assert = require('power-assert'),
    {CommentBox} = require('../../__build__/lib/components/CommentBox'),
    {CommentList} = require('../../__build__/lib/components/CommentList'),
    TestUtils = require('react-addons-test-utils'),
    // Since we're not using JSX here, we need to wrap the component in a factory
    // manually. See https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
    CommentBoxFactory = React.createFactory(CommentBox);


describe('Todo-item component', function(){

  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <CommentBox />
    );

    // Searching for <input> tag within rendered React component
    // Throws an exception if not found
    this.commentBoxTitleElement = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'h1'
    );

    this.commentBoxTitleElement = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'h1'
    );

    this.commentListComponent = TestUtils.findRenderedComponentWithType(
      renderedComponent,
      CommentList
    )

  });

  it('CommentBox Element has h1 "Comments"', function() {
    assert.strictEqual(this.commentBoxTitleElement.innerHTML, 'Comments');
  });

});

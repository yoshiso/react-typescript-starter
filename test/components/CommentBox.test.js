
var React = require('react'),
    assert = require('power-assert'),
    {CommentBox} = require('../../__build__/lib/components/CommentBox'),
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
    var commentBox = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'commentBox'
    );

    this.commentBoxElement = commentBox;
  });

  it('CommentBox Element says "Hello, world! I am a CommentBox."', function() {
    assert.strictEqual(this.commentBoxElement.innerHTML, 'Hello, world! I am a CommentBox.');
  });

});

var React = require('react');
module.exports = React.createClass({
  render: function() {
    var rawMarkup = this.props.children.toString();
    return (
      <div className="post">
        <h2 className="postAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
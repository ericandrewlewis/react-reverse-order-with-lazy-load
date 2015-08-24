var React = require('react');
var Post = require('./Post.jsx');
var LazyLoad = require('./LazyLoad');

module.exports = React.createClass({
	render: function() {
		var placeHolder = React.createElement('div', {}, 'wait ok');
		var postNodes = this.props.data.map(function(post, index) {
			return (
				// `key` is a React-specific concept and is not mandatory for the
				// purpose of this tutorial. if you're curious, see more here:
				// http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
				<LazyLoad component={placeHolder} key={post.post_id}>
					<Post author={post.author}>
						{post.text}
					</Post>
				</LazyLoad>
			);
		});
		return (
			<div className="postList">
				{postNodes}
			</div>
		);
	}
});
var React = require('react');
var PostList = require('./PostList.jsx');
var PostForm = require('./PostForm.jsx');

module.exports = React.createClass({
	handlePostSubmit: function(post) {
		var posts = this.state.data;
		post.post_id = Math.ceil( Math.random() * 500 );
		posts.unshift(post);
		this.setState({data: posts});
	},
	getInitialState: function() {
		return {
			data: [
				{
					post_id: Math.ceil( Math.random() * 500 ),
					author: 'Eric',
					text: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3evwb1SiaBY" frameborder="0" allowfullscreen></iframe>'
				}
			]
		};
	},
	render: function() {
		return (
			<div className="postBox">
				<h1>Posts</h1>
				<PostList data={this.state.data} />
				<PostForm onPostSubmit={this.handlePostSubmit} />
			</div>
		);
	}
});
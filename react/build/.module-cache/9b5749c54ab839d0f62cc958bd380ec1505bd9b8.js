var Comment = React.createClass({displayName: "Comment",
	rawMarkup:function(){
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render: function() {
		return (
			 React.createElement("div", {className: "comment"}, 
        				React.createElement("h2", {className: "commentAuthor"}, 
          				this.props.author
        				), 
        				 React.createElement("span", {dangerouslySetInnerHTML: this.rawMarkup()})
      			)
		);
	}
});
var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				        	React.createElement(Comment, {author: "Pete Hunt"}, "This is one comment"), 
        					React.createElement(Comment, {author: "Jordan Walke"}, "This is *another* comment")
			)
		);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render:function(){
		return (
			React.createElement("div", {className: "commentForm"}, 
				"Hello, world! I am a CommentForm."
			)
		);
	}
});

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, {data: this.props.data}), 
				React.createElement(CommentForm, null)
			)
		);
	}
});



ReactDOM.render(React.createElement(CommentBox, {data: data}),document.getElementById('content'));
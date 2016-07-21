
var CommentList = React.createClass({displayName: "CommentList",
	render: function() {
		return (
			React.createElement("div", {className: "commentList"}, 
				"Hello,world!I  am a CommentList."
			)
		);
	}
});

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function() {
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments")
			)
		);
	}
});



ReactDOM.render(React.createElement(CommentBox, null),document.getElementById('content'));
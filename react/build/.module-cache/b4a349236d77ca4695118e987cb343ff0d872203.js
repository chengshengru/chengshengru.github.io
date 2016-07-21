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
		var commentNode = this.props.data.map(function(comment){
			return (
				React.createElement(Comment, {author: comment.author}, 
					comment.text
				)
			);
		});	
		return (
			React.createElement("div", {className: "commentList"}, 
				        	commentNode
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
	getInitialState : function(){
		return {data:[]};
	},
	componentDidMount: function() {
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error:function(xhr,status,err){
				console.error(this.props.url,err.toString());
			}.bind(this)
		});
	},
	render: function() { 
		return (
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h1", null, "Comments"), 
				React.createElement(CommentList, {data: this.state.data}), 
				React.createElement(CommentForm, null)
			)
		);
	}
});


ReactDOM.render(React.createElement(CommentBox, {url: "api/comments.json"}),document.getElementById('content'));
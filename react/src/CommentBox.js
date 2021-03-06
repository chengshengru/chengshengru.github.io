var Comment = React.createClass({
	rawMarkup:function(){
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return {__html:rawMarkup};
	},
	render: function() {
		return (
			 <div className="comment">
        				<h2 className="commentAuthor">
          				{this.props.author}
        				</h2>
        				 <span dangerouslySetInnerHTML={this.rawMarkup()} />
      			</div>
		);
	}
});
var CommentList = React.createClass({
	render: function() {
		var commentNode = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});	
		return (
			<div className="commentList">
				        	{commentNode}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render:function(){
		return (
			<div className="commentForm">
				Hello, world! I am a CommentForm.
			</div>
		);
	}
});

var CommentBox = React.createClass({
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
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
		);
	}
});


ReactDOM.render(<CommentBox  url="api/comments.json"/>,document.getElementById('content'));
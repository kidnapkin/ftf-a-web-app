var App = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
		return {
			items: []
		};
	},

	componentWillMount: function() {
		this.firebaseRef = firebase.database().ref();
		this.firebaseRef.on('value', function(dataSnapshot) {

		dataSnapshot.forEach(function(childSnapshot) {

		var item = childSnapshot.val();
			console.log(item);
			
			sthis.setState({

			})
		});

		});
	},

	render: function() {
		return (
				<div>
					<h1>FTF-A WebApp</h1>
					<Posts data={thi} />
				</div>
			)
	}
})


var Posts =  React.createClass({
	render: function() {
		var data = this.props.data;
		var postTemplate = data.map(function(el, index) {
				return 		(
										<div className="col-md-4">
											<div className="card">
												<img className="card-img-top" src="" alt="Card image cap" />
												<div className="card-block">
													<h4 className="card-title">Card title</h4>
													<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
													<a href="#" className="btn btn-primary">Go somewhere</a>
												</div>
											</div>
										</div>
									)
		})

		return (
				<div className="row">
					{postTemplate}s
				</div>
			)
	}
});


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
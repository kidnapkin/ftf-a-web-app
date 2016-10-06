var App = React.createClass({
	mixins: [ReactFireMixin],

	getInitialState: function() {
		return {
			items: []
		};
	},

  componentWillMount: function() {
    this.firebaseRef = firebase.database().ref('items');
    this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
      var items = [];
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item['.key'] = childSnapshot.key;
        items.push(item);
      }.bind(this));

      this.setState({
        items: items
      });
    }.bind(this));
  },

	render: function() {
		return (
				<div>
					<h1>FTF-A WebApp</h1>
					<Posts data={this.state.items} />
				</div>
			)
	}
})


var Posts =  React.createClass({
	render: function() {
		var data = this.props.data;
		var postTemplate = data.map(function(el, index) {
				return 		(
										<div key={index} className="col-md-4">
											<div className="card">
												<img className="card-img-top" src={el.thumbnail} alt="Thumbnail" />
												<div className="card-block">
													<h4 className="card-title">{el.title}</h4>
													<p className="card-text">{el.description}</p>
													<a href="#" className="btn btn-primary">More</a>
												</div>
											</div>
										</div>
									)
		})

		return (
				<div className="row">
					{postTemplate}
				</div>
			)
	}
});


ReactDOM.render(
	<App />,
	document.getElementById('root')
);
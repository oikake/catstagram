import React from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../redux/actionCreators';

class Likes extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.handleLikeButtonClick = this.handleLikeButtonClick.bind(this);
	// 	// this.state = {
	// 	// 	userLikedPhoto: false,
	// 	// 	totalLikes: this.props.totalLikes
	// 	// }
	// }
	// handleLikeButtonClick() {
	// 	// this.setState((state) => {
	// 	// 	return {
	// 	// 		userLikedPhoto: !state.userLiked,
	// 	// 		totalLikes: !state.userLikedPhoto ? state.totalLikes + 1 : state.totalLikes - 1
	// 	// 	};
	// 	// });
	// 	this.props.dispatch(toggleLike(this.props.id));
	// }
	render() {
		return (
			<div className="Likes">
				<span>{ this.props.totalLikes } likes</span>
				<span className="Likes-like-button" onClick={this.props.handleLikeButtonClick}>
					{this.props.userLiked ? 'Unlike' : 'Like'}
				</span>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleLikeButtonClick: () => {
			dispatch(toggleLike(ownProps.id));
		}
	};
};

export default connect(null, mapDispatchToProps)(Likes);
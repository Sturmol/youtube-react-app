import React from 'react';

class SearchBar extends React.Component  {
	state = { input: ''}

	onInputChange = (e) => {
		this.setState({input : e.target.value})
	};

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onInputSubmit(this.state.input);
		//TODO: Make sure we call the callback from parent component
	};

	render() {
		return (
			<div className="search-bar ui semantic">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input
							type="text"
							placeholder='search your video'
							value={this.state.input}
							onChange={this.onInputChange}
						/>
					</div>

				</form>
			</div>

		)
	}
}

export default SearchBar;
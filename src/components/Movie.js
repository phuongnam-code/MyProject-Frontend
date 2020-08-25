import React, { Component } from "react";
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieInfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";
import { API_URL, API_KEY } from "../config";

class Movie extends Component {
	state = {
		loading: true,
	};

	fetchData = async () => {
		const { movieId } = this.props;
		this.setState({
			loading: true,
			error: false,
		});

		try {
			const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
			const result = await (await fetch(endpoint)).json();
			console.log(result);
			const creditEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
			const creditResult = await (await fetch(creditEndpoint)).json();
			const directors = creditResult.crew.filter((member) => member.job === "Director");
			this.setState({ ...result, actor: creditResult.cast, directors, loading: false }, () => {
				localStorage.setItem(movieId, JSON.stringify(this.state));
			});
		} catch (error) {
			this.setState({ error: true });
		}
	};
	componentDidMount() {
		const { movieId } = this.props;
		if (localStorage[movieId]) {
			this.setState(JSON.parse(localStorage[movieId]));
		} else {
			this.fetchData();
		}
	}

	render() {
		const { original_title: originalTitle, runtime, budget, revenue, actor, error, loading } = this.state;
		if (error) {
			return <div>Something went wrong ...</div>;
		}
		if (loading) {
			return <Spinner />;
		}
		return (
			<>
				<Navigation movie={originalTitle} />
				<MovieInfo movie={this.state} />
				<MovieInfoBar time={runtime} budget={budget} revenue={revenue} />
				<Grid header="Actors">
					{actor.map((actor) => (
						<Actor key={actor.credit_id} actor={actor} />
					))}
				</Grid>
				<Spinner />
			</>
		);
	}
}

export default Movie;

import React, { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

export default function useHomeFetch() {
	const [state, setState] = useState({ movies: [] });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	console.log(state);

	const fetchMovie = async (endpoint) => {
		setError(false);
		setLoading(true);

		const isLoadMore = endpoint.search("page");

		try {
			const result = await (await fetch(endpoint)).json();
			setState((prev) => ({
				...prev,
				movies: isLoadMore !== -1 ? [...prev.movies, ...result.results] : [...result.results],
				// heroImage: prev.heroImage,
				heroImage: prev.heroImage || result.results[1],
				currentPage: result.page,
				totalPages: result.total_pages,
			}));
		} catch (error) {
			setError(true);
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchMovie(POPULAR_BASE_URL);
	}, []);

	return [{ state, loading, error }, fetchMovie];
}

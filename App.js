import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
	const [movie, setMovie] = useState({});
	const [err, setErr] = useState(false);

	useEffect(() => {
		const getPopMovies = async () => {
			try {
				const response = await axios.get(
					'https://api.themoviedb.org/3/movie/popular?api_key=778306490922af732ee8ce5aeb1ef02e'
				);
				setMovie(response.data.results[0]);
			} catch (err) {
				setErr(err);
			}
		};
		getPopMovies();
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>{movie.original_title}</Text>
			<Text>{movie.original_language}</Text>
			<Text>{movie.release_date}</Text>
			{err && <Text style={{ color: 'red' }}>Internal Server Error</Text>}
		</View>
	);
};

export default App;

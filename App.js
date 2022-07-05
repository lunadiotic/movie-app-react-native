import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getPopularMovies } from './services/services';

const App = () => {
	const [movie, setMovie] = useState('');
	const [err, setErr] = useState(false);

	useEffect(() => {
		getPopularMovies()
			.then((movies) => {
				setMovie(movies[0]);
			})
			.catch((err) => {
				setErr(err);
			});
	}, []);

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Title: {movie.original_title}</Text>
			<Text>Release Date: {movie.release_date}</Text>
			{err && <Text style={{ color: 'red' }}>Internal Server Error</Text>}
		</View>
	);
};

export default App;

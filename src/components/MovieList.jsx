import MovieCard from './MovieCard';
import styles from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <div className={styles.movie_list}>
      {/* 데이터 없을 경우 undefined이므로 length가 실행되지 않게하고 없을 경우 영화데이터 없음을 표시 */}
      {movies?.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>영화 데이터 없음</p>
      )}
    </div>
  );
}

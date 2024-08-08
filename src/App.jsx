import { useEffect, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieTab from './components/MovieTab';
import Pagination from './components/Pagination';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=b2c2c1be';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('bbc');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    // async: 프로미스를 리턴하는 함수에 사용가능
    async function searchMovie() {
      // await: 비동기 동작을 동기적으로 실행되게 함
      const response = await fetch(
        `${API_URL}&s=${title}&type=${type}&page=${page}`
      );
      // js 객체로 변환
      const data = await response.json();
      // 년도기준 내림차순 정렬
      // 속성명? 붙이면 undefined, null인 경우 ?뒤의 메서드 실행 안 함
      // sort의 리턴 값이 -1이면 내림차순 1이면 오름차순
      const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? -1 : 1));
      // 년도기준 오름차순 정렬
      // const sortData = data.Search?.sort((a, b) => (a.Year > b.Year ? 1 : -1));
      setMovies(sortData);
      // 총 페이지 개수
      setTotalPage(Math.ceil(data.totalResults / 10));
    }
    searchMovie();
  }, [title, type, page]);

  return (
    <div className="app">
      <h2>MovieLand</h2>
      <MovieSearch setTitle={setTitle} setType={setType} setPage={setPage} />
      <MovieTab type={type} setType={setType} setPage={setPage} />
      <MovieList movies={movies} />
      {movies && (
        <Pagination
          totalPage={totalPage}
          limit={3}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
}

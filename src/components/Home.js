import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchMovies } from '../redux/features/moviesSlice';
import truncate from '../functions/truncate';
import Navbar from './Navbar';

function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);

  const navigate = useNavigate();

  const handleClick = (obj) => {
    navigate(`/show-details/${obj.name}`, {
      state: {
        show: obj,
      },
    });
  };

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const getShow = (data) => {
    const array = [];
    data.forEach((d) => {
      if (d.show.image) {
        array.push({
          id: d.show.id,
          name: d.show.name,
          image: d.show.image?.medium,
          summary: d.show.summary,
          rating: d.show.rating.average,
        });
      }
    });
    return array;
  };

  const show = movies && getShow(movies);
  return (
    <>
      <Navbar />
      <main className="row_posters">
        {show && show.map((m) => (
          <div className="poster" key={m.id}>
            <div className="title">
              <p className="movie_title">
                {truncate(m.name, 30)}
              </p>
            </div>
            <img
              alt={m.name}
              src={m.image}
            />
            <button
              type="button"
              className="summary-btn"
              onClick={() => handleClick(m)}
            >
              See More
            </button>
          </div>
        ))}
      </main>
    </>

  );
}

export default Home;

import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Navbar from './Navbar';

function Detail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { show } = state;

  const handleBook = (obj) => {
    navigate("/register", {
      state: {
        name: obj,
      },
    });
  };

  return (
    <>
      <Navbar />
      <section className="table-section">
        <table className="table table-striped mission-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Summary</th>
              <th scope="col">Reserve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{show && show.name}</td>
              <td className="summary">{show && show.summary}</td>
              <td>
                <button
                  className="mission-button"
                  type="button"
                  onClick={() => handleBook(show && show.name)}
                >
                  Book
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Detail;

import React from 'react'
import { useLocation, useNavigate } from 'react-router';
import Navbar from './Navbar';


const Detail = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const { show } = state;

	const handleBook = () => {
    navigate(`/register`);
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
          <td scope="row">{show && show.name}</td>
					<td className='summary'>{show && show.summary}</td>
          <td>
            <button
              className="mission-button"
							type="button"
							onClick={handleBook}
            >
            Book
            </button>
          </td>
        </tr>
    </tbody>
  </table>
</section>
	  </>
	)
}

export default Detail
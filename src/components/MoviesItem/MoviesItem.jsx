import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const MoviesItem = ({ hits }) => {
    const location = useLocation();

    console.log('location:', location);
    
    
    return hits.map(hit => (
      <li key={hit.id}>
        <Link state={{from: location}} to={`/movies/${hit.id}`}>{hit.title}</Link>
      </li>
    ));
}

MoviesItem.propTypes = {
    hits: PropTypes.array.isRequired,
}
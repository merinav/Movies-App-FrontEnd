import { useQuery } from 'react-query';
import axios from 'axios';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

function MovieList(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>;
}

export default MovieList;

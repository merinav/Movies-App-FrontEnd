import { useQuery } from 'react-query';
import axios from 'axios';
import Layout from 'components/Layout/Layout';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);

  return (
    <Layout footer={<>Footer</>}>
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;

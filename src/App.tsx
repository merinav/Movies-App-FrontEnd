import { useQuery } from 'react-query';
import axios from 'axios';
import Layout from 'components/Layout/Layout';
import { MyMoviesLogo } from 'components/Icons';

import styles from './App.module.css';

async function fetchStatus() {
  const { data } = await axios.get('http://localhost:3001/health');
  return data;
}

function App(): JSX.Element {
  const { data: healthy } = useQuery('status', fetchStatus);
  return (
    <Layout
      footer={<>Footer</>}
      header={
        <>
          <MyMoviesLogo className={styles.icon} />
          <> Header</>
        </>
      }
    >
      <p>API Status: {healthy ? 'Is running' : 'Something is wrong!'}</p>
    </Layout>
  );
}

export default App;

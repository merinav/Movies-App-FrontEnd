import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import MainRouter from 'navigation/MainRouter';
import { BrowserRouter as Router } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <Layout footer={<Footer />} header={<Header />}>
        <MainRouter />
      </Layout>
    </Router>
  );
}

export default App;

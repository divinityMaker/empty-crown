import { Container } from './components/Container';
import { Main } from './components/Main';
import { useState, useEffect } from 'react';
import { BarLoader } from 'react-spinners';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

return (
    <Container>
      {
        loading ? 
          <BarLoader
          color={"#FFFFFF"}
          loading={loading}
          />
        :
          <Main />
      }
    </Container>
  );
};

export default App;
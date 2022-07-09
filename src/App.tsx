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

  setTimeout(window.onload = () =>  {
      console.log("%c ", "font-size: 45px;");
      console.log("%cYou know what I gotta say", "color: #ffff; background-color: #b71540; font-size: 45px; font-weight: bold");
      console.log("%cKill 'em all and get locked away", "color: #ffff; background-color: #b71540; font-size: 45px; font-weight: bold");
      console.log("%cKill yourself and just end this pain", "color: #ffff; background-color: #b71540; font-size: 45px; font-weight: bold");
      console.log("%cYou gonna burn in hell anyways", "color: #ffff; background-color: #b71540; font-size: 45px; font-weight: bold");
      console.log("%cFuck the preachers and what they say", "color: #ffff; background-color: #b71540; font-size: 45px; font-weight: bold");
      console.log("%c ", "font-size: 45px;");
  }, 1000);


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
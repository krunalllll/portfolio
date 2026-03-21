import React, { useEffect } from 'react';
import Home from './sections/Home';
import Cursor from './components/Cursor/Cursor';
import Loader from './components/Loader/Loader';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollProgress />
          <Navbar />
          <Home />
        </>
      )}
    </>
  );
};

export default App;

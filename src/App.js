import React from 'react';
import Home from './Home';
import Addblog from './addblog';
import NavBar from './NavBar';

const App = () => {
  return (
    
    <>
      <NavBar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addblog" element={<Addblog />} />
        
       </Routes>
    </>
    
  );
};

export default App;
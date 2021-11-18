import React from 'react';
import SearchForm from './Components/SearchForm';
import  CocktailList from './Components/CocktailList';

import Sidebar from './Components/Sidebar';



function App() {
  return (
    <main>
      <div className='container'>
        
       <Sidebar/>
     
      <SearchForm/>
      
      <CocktailList /> 
      </div>
    </main>
  );
}

export default App;

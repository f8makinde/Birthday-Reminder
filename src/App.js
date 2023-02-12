import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [list, setList] = useState(data)
  function handleClick(){
    setList([])
  }
  return(
    <main>
      <section className='container'>
      <h3>{list.length} birthdays today</h3>
  <List list={list}/>
  <button type='button' className='btn' onClick={handleClick}>Clear All</button>
  </section>
    </main>
  ) 
}

export default App;

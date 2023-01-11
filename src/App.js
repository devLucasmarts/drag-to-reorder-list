import React, { useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';

import './App.css';

const App = () => {

  const [items, setItems] = useState(["React", "CSS", "Motion"]);

  useEffect(() => {
    console.log('Mudou')
  }, [items])

  return (
    <section className='content-section'>
      <Reorder.Group values={ items } onReorder={ setItems }>
        { items.map(item => (
          <Reorder.Item key={ item } value={ item }>
            { item }
          </Reorder.Item>
        )) }
      </Reorder.Group>
    </section>
  );
};

export default App;

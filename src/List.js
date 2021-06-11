import React, { useEffect, useState } from 'react';

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('updaing Items');
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}
    </div>
  );
}

export default List;

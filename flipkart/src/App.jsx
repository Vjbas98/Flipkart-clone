import React, { useState } from 'react';
import Header from './Header';
import { Data } from './Data';
import Card from './Card';

function App() {
  const [category, setCategory] = useState(Data);

  const filter = (names) => {
    const filtered = Data.filter(item => item.name.includes(names));
    console.log(filtered);
    setCategory(filtered);
  }

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {category.map((item) => (
          <Card
            key={item.id} 
            image={item.image}
            name={item.name}
            rating={item.rating}
            actualPrice={item.actualPrice}
            offerPrice={item.offerPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

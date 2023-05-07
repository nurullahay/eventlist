import data from './data';
import React, { useState } from "react";
import './index.css';
import './styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  function handleFilter(newFilter) {
    setActiveFilter(newFilter.toLowerCase());
  }

  return (
    <div className="App">
      <Header/>
      <Navbar onClickFilter={handleFilter} />
      <div className="container">
        {data.filter(event => activeFilter === "all" || event.concept.toLowerCase() === activeFilter).map((event) => (
          <Section
            key={event.id}
            activeFilter={activeFilter}
            date={event.date}
            concept={event.concept.toLowerCase()}
            eventImg={event.eventImg}
            eventTitle={event.eventTitle}
            eventLocation={event.eventLocation}
            eventDescription={event.eventDescription}
          />
        ))}
      </div>
  
    </div>
  );
}

export default App;

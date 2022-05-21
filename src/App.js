import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';

function App() {
  const experienceElements = data.map(experience => {
    return <Card 
    id={experience.id} 
    title={experience.title} 
    description={experience.description}
    price={experience.price}
    coverImg={experience.coverImg}
    rating={experience.rating}
    reviewCount={experience.reviewCount}
    location={experience.location}
    openSpots={experience.openSpots}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div>
        {experienceElements}
      </div>
    </div>
  );
  }

export default App;

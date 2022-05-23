import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';

function App() {
  const experienceElements = data.map(experience => {
    return <Card 
    key={experience.id} 
    experience={experience}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {experienceElements}
      </section>
    </div>
  );
  }

export default App;

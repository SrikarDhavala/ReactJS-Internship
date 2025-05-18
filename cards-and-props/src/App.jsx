import Card from './Card.jsx'
import arthurMorgan from './assets/arthur_morgan.jpg'
import johnMarston from './assets/john_marston.png'
import sadieAdler from './assets/sadie_adler.png'
import dutchVan from './assets/dutch_van.png'

function App() {
  return(
    <>
      <Card img={arthurMorgan} title="Arthur Morgan" text="Legendary gunslinger"/>
      <Card img={johnMarston} title="John Marston" text="Best brother"/>
      <Card img={sadieAdler} title="Sadie Adler" text="Most badass"/>
      <Card img={dutchVan} title="Dutch Van Der Linde" text="The guy with the best drip"/>
    </>
  );
}

export default App

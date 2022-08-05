import "./styles/variables.scss";
import CommonCard from './components/CommonCard'

function App() {
  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div>
        <CommonCard />
      </div>
    </div>
  );
}

export default App;

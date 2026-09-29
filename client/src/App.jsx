import CareerCard from "./components/CareerCard";
import "./App.css";
import { careers } from "./careersData";

function App() {
  const bigCareers = careers.filter((career) => career.skillCount >= 8);
console.log("careers count",careers.length);
  return (
    <>
      <h1>Personal Learning Path Generator</h1>

      <div className="career-list">
        {careers.map((career) => (
          <CareerCard
            key={career.id}
            title={career.title}
            description={career.description}
            skillCount={career.skillCount}
          />
        ))}
      </div>
    </>
  );
}

export default App;
import CareerCard from "./components/CareerCard";
import "./App.css";
function App() {
  return (
    <>
    <h1>Personal Learning Path Generator</h1>
    <div className="career-list">
    <CareerCard
     title="Java Backend Developer" 
      description="Java Backend Developer offers backend contents"
      skillCount={9} 
      />
      <CareerCard
       title="Java frontend  Developer" 
     description="Java frontend Developer offers backend contents" 
       
      />
      <CareerCard 
      title="Java fullstack Developer" 
    decription="Java fullstack Developer offers backend contents"
       skillCount={10} 
       />
       </div>
  </>
  )
}

export default App
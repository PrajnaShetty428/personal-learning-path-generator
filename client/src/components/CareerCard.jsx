function CareerCard({ title, description, skillCount }) {
  return (
    <div className="career-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Required skills: {skillCount}</p>
    </div>
  );
}

export default CareerCard;
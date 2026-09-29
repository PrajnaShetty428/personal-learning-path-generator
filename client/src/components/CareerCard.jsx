function CareerCard({ title,description ,skillCount}) {
  return (
    <div className="career-card">
      <h2>{title}</h2>    {/*props are the input here  title,description and skillCount are the props */}
      <p>{description}</p>
      <p>Required skill:{skillCount}</p>
    </div>
  );
}


export default CareerCard;
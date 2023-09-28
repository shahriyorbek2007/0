import Tour from "./tour";

function Tours({ tours, deleteTour }) {
  return (
    <ul className="grid md:grid-cols-2 h-auto lg:grid-cols-3 gap-7">
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
      })}
    </ul>
  );
}

export default Tours;

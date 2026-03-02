import { Navigate, useNavigate } from "react-router-dom";
import { plases } from "../data/dataForPlaces";


const Places = () => {
     
  const navigate = useNavigate()

  return (
    <div className="mt-3 md:mt-6 p-2.5 md:p-6 text-2xl">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {plases.map((place) => (
          <div
            key={place.id}
            onClick={() => navigate(`/places/${place.id}`)}
            className="flex flex-col rounded-xl overflow-hidden shadow-md shadow-primary"
          >
            <img
              src={place.img}
              alt=""
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {place.title}
              </h2>

              <p className="text-sm text-text/50 mb-2">
                {place.description}
              </p>

              <div className="text-sm text-text/90">
                📍 {place.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;


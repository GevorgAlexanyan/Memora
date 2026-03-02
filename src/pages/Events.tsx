import { useNavigate } from "react-router-dom";
import { events } from "../data/dataForEvents";


function Events() {
  const navigat = useNavigate()
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-2.5 md:p-6 mt-3 md:mt-6">
      {events.map(event => (
        <div
          key={event.id}
          onClick={() => navigat(`/events/${event.id}`)}
          className="rounded-xl shadow-md shadow-primary overflow-hidden">
          <img src={event.image} alt={event.title} className="h-48 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-500">{event.date}</p>
            <p className="mt-2 text-sm">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events 

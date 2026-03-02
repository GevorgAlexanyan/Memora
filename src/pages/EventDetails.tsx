import { useParams, useNavigate } from "react-router-dom";
import { events } from "../data/dataForEvents";


function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const event = events.find((p) => p.id === Number(id));

  if (!event) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Event not found 😕</h2>
        <button
          onClick={() => navigate("/events")}
          className="px-4 py-2 bg-primary text-text rounded hover:bg-primary/80"
        >
          Back to events
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-primary text-text rounded hover:bg-primary/80 "
      >
        ← Back
      </button>

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
      <p className="text-text/40 mb-2">{event.date}</p>
      <p className="text-text/60 mb-4">{event.location}</p>
      <p className="text-text/80 leading-relaxed">{event.description}</p>
    </div>
  );
}

export default EventDetails;

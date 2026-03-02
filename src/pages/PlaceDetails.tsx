import { useParams, useNavigate } from "react-router-dom";
import { plases } from "../data/dataForPlaces";

const PlaceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const place = plases.find((p) => p.id === Number(id));

    const youtubeEmbedUrl = place?.urlYouTube
        ? place.urlYouTube.replace("watch?v=", "embed/")
        : null;

    if (!place) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Place not found 😕</h2>
                <button
                    onClick={() => navigate("/places")}
                    className="px-4 py-2 bg-primary text-text rounded hover:bg-primary/80"
                >
                    Back to places
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto p-2.5 md:p-6">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-primary text-text rounded hover:bg-primary/80 "
            >
                ← Back
            </button>

            <img
                src={place.img}
                alt={place.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-6"
            />

            <h1 className="text-3xl font-bold mb-2">{place.title}</h1>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                <span>📍 {place.location}</span>
                <span>🏷 {place.type}</span>
                <span>⭐ {place.rating}</span>
            </div>

            <p className="text-lg leading-relaxed text-text/70">
                {place.description}
            </p>

            {/* ✅ Render ONLY if YouTube link exists */}
            {youtubeEmbedUrl && (
                <div className="mt-6 mb-6">
                    <iframe
                        className="w-full aspect-video rounded-xl"
                        src={youtubeEmbedUrl}
                        title="YouTube video"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
};

export default PlaceDetails;

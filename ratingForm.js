import { useState } from 'react';

export default function RatingForm() {
  const [service, setService] = useState('');
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rating submitted: ${service} - ${rating} stars, comments: ${comments}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Rate a Service</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Service</label>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

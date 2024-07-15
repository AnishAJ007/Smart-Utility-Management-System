import Header from '../components/Header';
import RatingForm from '../components/RatingForm';

export default function Rating() {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-10">Service Ratings</h1>
      <RatingForm />
    </div>
  );
}

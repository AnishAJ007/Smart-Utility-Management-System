import Header from '../components/Header';
import BookingForm from '../components/BookingForm';

export default function Schedule() {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-10">Booking Schedule</h1>
      <BookingForm />
    </div>
  );
}

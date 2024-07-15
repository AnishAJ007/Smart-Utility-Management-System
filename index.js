import Header from '../components/Header';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-10">Smart Utility Management System</h1>
      <p className="text-center">Manage bookings, ratings, and service requests efficiently.</p>
    </div>
  );
}

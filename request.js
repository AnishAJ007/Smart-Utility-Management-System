import Header from '../components/Header';
import RequestForm from '../components/RequestForm';

export default function Request() {
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-4xl font-bold text-center my-10">Service Requests</h1>
      <RequestForm />
    </div>
  );
}

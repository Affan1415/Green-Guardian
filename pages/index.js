import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold">Welcome to GreenGuardian</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import PortfolioGrid from '@/components/PortfolioGrid';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <PortfolioGrid />
      <BookingForm />
      <Footer />
    </main>
  );
}

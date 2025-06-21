import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import PopularBrands from "@/components/PopularBrands";
import RecentListings from "@/components/RecentListings";
import ServiceCards from "@/components/ServiceCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Найдите свой идеальный автомобиль
            </h1>
            <p className="text-lg text-gray-600">
              Более 50 000 проверенных объявлений от частных лиц и дилеров
            </p>
          </div>

          <SearchForm />
        </div>
      </section>

      <div className="container mx-auto px-4">
        <PopularBrands />
        <RecentListings />
      </div>

      <ServiceCards />

      <Footer />
    </div>
  );
};

export default Index;

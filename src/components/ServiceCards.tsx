import VinChecker from "./VinChecker";
import LoanCalculator from "./LoanCalculator";
import PriceCalculator from "./PriceCalculator";
import NotificationSettings from "./NotificationSettings";

const ServiceCards = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Дополнительные сервисы
          </h2>
          <p className="text-lg text-gray-600">
            Полный набор инструментов для покупки автомобиля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <VinChecker />
          <LoanCalculator />
          <PriceCalculator />
          <NotificationSettings />
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

import CarCard from "./CarCard";

const RecentListings = () => {
  const cars = [
    {
      id: "1",
      brand: "Toyota",
      model: "Camry",
      year: 2022,
      price: 2850000,
      mileage: 25000,
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop",
      location: "Москва",
      bodyType: "Седан",
      transmission: "Автомат",
      engine: "2.5 л",
    },
    {
      id: "2",
      brand: "BMW",
      model: "X5",
      year: 2021,
      price: 4200000,
      mileage: 35000,
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      location: "Санкт-Петербург",
      bodyType: "Внедорожник",
      transmission: "Автомат",
      engine: "3.0 л",
    },
    {
      id: "3",
      brand: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      price: 3650000,
      mileage: 12000,
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
      location: "Екатеринбург",
      bodyType: "Седан",
      transmission: "Автомат",
      engine: "2.0 л",
    },
    {
      id: "4",
      brand: "LADA",
      model: "Vesta",
      year: 2023,
      price: 1250000,
      mileage: 8000,
      image:
        "https://images.unsplash.com/photo-1549399292-3bef98b6ac6c?w=400&h=300&fit=crop",
      location: "Казань",
      bodyType: "Седан",
      transmission: "Механика",
      engine: "1.6 л",
    },
    {
      id: "5",
      brand: "Audi",
      model: "A4",
      year: 2022,
      price: 3200000,
      mileage: 28000,
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
      location: "Новосибирск",
      bodyType: "Седан",
      transmission: "Автомат",
      engine: "2.0 л",
    },
    {
      id: "6",
      brand: "Volkswagen",
      model: "Tiguan",
      year: 2021,
      price: 2750000,
      mileage: 42000,
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      location: "Нижний Новгород",
      bodyType: "Кроссовер",
      transmission: "Автомат",
      engine: "1.4 л",
    },
  ];

  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Последние объявления
        </h2>
        <a href="/catalog" className="text-primary hover:underline font-medium">
          Смотреть все →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default RecentListings;

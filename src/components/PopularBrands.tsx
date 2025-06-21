import { Card } from "@/components/ui/card";

const PopularBrands = () => {
  const brands = [
    { name: "Toyota", logo: "🚗", count: "2,341" },
    { name: "BMW", logo: "🏎️", count: "1,876" },
    { name: "Mercedes", logo: "🚙", count: "1,543" },
    { name: "Audi", logo: "🚗", count: "1,234" },
    { name: "Volkswagen", logo: "🚐", count: "987" },
    { name: "LADA", logo: "🚗", count: "2,876" },
    { name: "Hyundai", logo: "🚗", count: "1,432" },
    { name: "Kia", logo: "🚙", count: "1,098" },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Популярные марки
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {brands.map((brand) => (
          <Card
            key={brand.name}
            className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer hover:border-primary"
          >
            <div className="text-3xl mb-2">{brand.logo}</div>
            <h3 className="font-semibold text-sm">{brand.name}</h3>
            <p className="text-xs text-gray-500">{brand.count} авто</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CarCardProps {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  location: string;
  bodyType: string;
  transmission: string;
  engine: string;
}

const CarCard = ({
  brand,
  model,
  year,
  price,
  mileage,
  image,
  location,
  bodyType,
  transmission,
  engine,
}: CarCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Icon name="Heart" size={16} />
        </Button>
        <Badge className="absolute bottom-2 left-2 bg-primary">{year}</Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-1">
          {brand} {model}
        </h3>
        <p className="text-2xl font-bold text-primary mb-2">
          {price.toLocaleString()} ₽
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center">
            <Icon name="Gauge" size={14} className="mr-1" />
            {mileage.toLocaleString()} км
          </div>
          <div className="flex items-center">
            <Icon name="Settings" size={14} className="mr-1" />
            {transmission}
          </div>
          <div className="flex items-center">
            <Icon name="Car" size={14} className="mr-1" />
            {bodyType}
          </div>
          <div className="flex items-center">
            <Icon name="Fuel" size={14} className="mr-1" />
            {engine}
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Icon name="MapPin" size={14} className="mr-1" />
          {location}
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Посмотреть
          </Button>
          <Button variant="outline" size="sm">
            <Icon name="Phone" size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;

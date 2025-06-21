import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const PriceCalculator = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [condition, setCondition] = useState("");
  const [estimate, setEstimate] = useState<any>(null);

  const calculatePrice = () => {
    // Простая имитация расчёта цены
    const basePrice = 1200000;
    const yearFactor = (2024 - parseInt(year)) * 50000;
    const mileageFactor = parseInt(mileage) * 5;
    const conditionFactor =
      condition === "excellent" ? 1.1 : condition === "good" ? 1.0 : 0.85;

    const estimatedPrice =
      (basePrice - yearFactor - mileageFactor) * conditionFactor;
    const minPrice = estimatedPrice * 0.9;
    const maxPrice = estimatedPrice * 1.1;

    setEstimate({
      min: Math.max(minPrice, 100000),
      max: maxPrice,
      avg: estimatedPrice,
      marketTrend: "стабильный",
    });
  };

  return (
    <Card className="border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" className="text-red-600" size={24} />
          <CardTitle className="text-red-900">Оценка стоимости</CardTitle>
        </div>
        <CardDescription>Узнайте рыночную стоимость автомобиля</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Марка</Label>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="border-red-200">
                <SelectValue placeholder="Выберите марку" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="toyota">Toyota</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="bmw">BMW</SelectItem>
                <SelectItem value="mercedes">Mercedes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Модель</Label>
            <Input
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Camry"
              className="border-red-200 focus:border-red-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Год выпуска</Label>
            <Input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="2020"
              className="border-red-200 focus:border-red-400"
            />
          </div>

          <div>
            <Label>Пробег (км)</Label>
            <Input
              type="number"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              placeholder="50000"
              className="border-red-200 focus:border-red-400"
            />
          </div>
        </div>

        <div>
          <Label>Состояние</Label>
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger className="border-red-200">
              <SelectValue placeholder="Выберите состояние" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Отличное</SelectItem>
              <SelectItem value="good">Хорошее</SelectItem>
              <SelectItem value="average">Среднее</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculatePrice}
          className="w-full bg-red-600 hover:bg-red-700"
          disabled={!brand || !year || !mileage || !condition}
        >
          Оценить стоимость
        </Button>

        {estimate && (
          <div className="p-4 bg-white rounded-lg border border-red-200 space-y-3">
            <div className="text-center">
              <p className="text-sm text-gray-600">Рыночная стоимость</p>
              <p className="text-xl font-bold text-red-700">
                {estimate.min.toLocaleString()} -{" "}
                {estimate.max.toLocaleString()} ₽
              </p>
              <p className="text-lg text-gray-700">
                Средняя: {estimate.avg.toLocaleString()} ₽
              </p>
            </div>
            <div className="flex justify-center">
              <Badge
                variant="outline"
                className="text-green-700 border-green-300"
              >
                Рынок: {estimate.marketTrend}
              </Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;

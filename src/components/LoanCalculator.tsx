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
import Icon from "@/components/ui/icon";

const LoanCalculator = () => {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("12");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(price) - parseFloat(downPayment || "0");
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(term) * 12;

    if (p > 0 && r > 0 && n > 0) {
      const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <Card className="border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon name="Calculator" className="text-red-600" size={24} />
          <CardTitle className="text-red-900">Кредитный калькулятор</CardTitle>
        </div>
        <CardDescription>
          Рассчитайте ежемесячный платёж по автокредиту
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="price">Стоимость автомобиля (₽)</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="1500000"
            className="border-red-200 focus:border-red-400"
          />
        </div>

        <div>
          <Label htmlFor="down">Первоначальный взнос (₽)</Label>
          <Input
            id="down"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            placeholder="300000"
            className="border-red-200 focus:border-red-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="term">Срок (лет)</Label>
            <Select value={term} onValueChange={setTerm}>
              <SelectTrigger className="border-red-200">
                <SelectValue placeholder="Выберите срок" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 год</SelectItem>
                <SelectItem value="2">2 года</SelectItem>
                <SelectItem value="3">3 года</SelectItem>
                <SelectItem value="5">5 лет</SelectItem>
                <SelectItem value="7">7 лет</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="rate">Ставка (%)</Label>
            <Select value={rate} onValueChange={setRate}>
              <SelectTrigger className="border-red-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8">8%</SelectItem>
                <SelectItem value="10">10%</SelectItem>
                <SelectItem value="12">12%</SelectItem>
                <SelectItem value="15">15%</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={calculate}
          className="w-full bg-red-600 hover:bg-red-700"
          disabled={!price || !term}
        >
          Рассчитать платёж
        </Button>

        {monthlyPayment && (
          <div className="p-4 bg-white rounded-lg border border-red-200">
            <div className="text-center">
              <p className="text-sm text-gray-600">Ежемесячный платёж</p>
              <p className="text-2xl font-bold text-red-700">
                {monthlyPayment.toLocaleString("ru-RU", {
                  maximumFractionDigits: 0,
                })}{" "}
                ₽
              </p>
            </div>
            <div className="flex justify-center mt-3 space-x-4 text-xs text-gray-500">
              <span>🏦 Сбербанк</span>
              <span>🏦 ВТБ</span>
              <span>🏦 Тинькофф</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LoanCalculator;

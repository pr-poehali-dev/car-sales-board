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
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const VinChecker = () => {
  const [vin, setVin] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  const checkVin = async () => {
    if (vin.length !== 17) return;

    setLoading(true);
    // Имитация API запроса
    setTimeout(() => {
      setReport({
        make: "Toyota",
        model: "Camry",
        year: 2020,
        accidents: 0,
        owners: 1,
        recalls: 2,
        service: "Регулярное",
        mileage: 45000,
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <Card className="border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon name="Shield" className="text-red-600" size={24} />
          <CardTitle className="text-red-900">Проверка VIN-номера</CardTitle>
        </div>
        <CardDescription>
          Получите полную историю автомобиля по VIN-коду
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Введите 17-значный VIN-код"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            maxLength={17}
            className="border-red-200 focus:border-red-400"
          />
          <Button
            onClick={checkVin}
            disabled={vin.length !== 17 || loading}
            className="bg-red-600 hover:bg-red-700"
          >
            {loading ? (
              <Icon name="Loader2" className="animate-spin" size={16} />
            ) : (
              "Проверить"
            )}
          </Button>
        </div>

        {report && (
          <div className="space-y-3 p-4 bg-white rounded-lg border border-red-100">
            <h4 className="font-semibold text-red-900">
              {report.make} {report.model} {report.year}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center">
                <Icon
                  name="AlertTriangle"
                  size={14}
                  className="mr-1 text-green-600"
                />
                Аварии: {report.accidents}
              </div>
              <div className="flex items-center">
                <Icon name="Users" size={14} className="mr-1 text-blue-600" />
                Владельцев: {report.owners}
              </div>
              <div className="flex items-center">
                <Icon
                  name="Wrench"
                  size={14}
                  className="mr-1 text-orange-600"
                />
                Отзывы: {report.recalls}
              </div>
              <div className="flex items-center">
                <Icon
                  name="CheckCircle"
                  size={14}
                  className="mr-1 text-green-600"
                />
                {report.service} ТО
              </div>
            </div>
            <Badge variant="outline" className="text-red-700 border-red-300">
              Пробег: {report.mileage.toLocaleString()} км
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VinChecker;

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
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      brand: "Toyota",
      model: "Camry",
      maxPrice: 1500000,
      location: "Москва",
      active: true,
    },
    {
      id: 2,
      brand: "BMW",
      model: "X5",
      maxPrice: 3000000,
      location: "СПб",
      active: false,
    },
  ]);

  const [newAlert, setNewAlert] = useState({
    brand: "",
    model: "",
    maxPrice: "",
    location: "",
  });

  const addAlert = () => {
    if (newAlert.brand && newAlert.maxPrice) {
      setNotifications([
        ...notifications,
        {
          id: Date.now(),
          ...newAlert,
          maxPrice: parseInt(newAlert.maxPrice),
          active: true,
        },
      ]);
      setNewAlert({ brand: "", model: "", maxPrice: "", location: "" });
    }
  };

  const toggleAlert = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, active: !n.active } : n)),
    );
  };

  return (
    <Card className="border-2 border-red-100 bg-gradient-to-br from-white to-red-50">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Icon name="Bell" className="text-red-600" size={24} />
          <CardTitle className="text-red-900">Уведомления</CardTitle>
        </div>
        <CardDescription>
          Получайте уведомления о новых объявлениях
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-white rounded-lg border border-red-100">
          <h4 className="font-semibold mb-3 text-red-900">
            Создать уведомление
          </h4>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <Label className="text-sm">Марка</Label>
              <Select
                value={newAlert.brand}
                onValueChange={(v) => setNewAlert({ ...newAlert, brand: v })}
              >
                <SelectTrigger className="border-red-200">
                  <SelectValue placeholder="Марка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toyota">Toyota</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                  <SelectItem value="Mercedes">Mercedes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm">Модель</Label>
              <Input
                value={newAlert.model}
                onChange={(e) =>
                  setNewAlert({ ...newAlert, model: e.target.value })
                }
                placeholder="Любая"
                className="border-red-200 focus:border-red-400"
              />
            </div>
            <div>
              <Label className="text-sm">Макс. цена (₽)</Label>
              <Input
                type="number"
                value={newAlert.maxPrice}
                onChange={(e) =>
                  setNewAlert({ ...newAlert, maxPrice: e.target.value })
                }
                placeholder="2000000"
                className="border-red-200 focus:border-red-400"
              />
            </div>
            <div>
              <Label className="text-sm">Город</Label>
              <Select
                value={newAlert.location}
                onValueChange={(v) => setNewAlert({ ...newAlert, location: v })}
              >
                <SelectTrigger className="border-red-200">
                  <SelectValue placeholder="Город" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Москва">Москва</SelectItem>
                  <SelectItem value="СПб">Санкт-Петербург</SelectItem>
                  <SelectItem value="Екатеринбург">Екатеринбург</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={addAlert}
            className="w-full bg-red-600 hover:bg-red-700"
            disabled={!newAlert.brand || !newAlert.maxPrice}
          >
            Создать уведомление
          </Button>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-red-900">Активные уведомления</h4>
          {notifications.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-100"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{alert.brand}</span>
                  {alert.model && (
                    <span className="text-gray-600">{alert.model}</span>
                  )}
                  <Badge variant="outline" className="text-red-700">
                    до {alert.maxPrice.toLocaleString()} ₽
                  </Badge>
                  {alert.location && (
                    <Badge variant="secondary">{alert.location}</Badge>
                  )}
                </div>
              </div>
              <Switch
                checked={alert.active}
                onCheckedChange={() => toggleAlert(alert.id)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const SearchForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Найти автомобиль
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Марка
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Выберите марку" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="toyota">Toyota</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="volkswagen">Volkswagen</SelectItem>
              <SelectItem value="lada">LADA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Модель
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Выберите модель" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любая модель</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Год от
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Год" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Цена до
          </label>
          <Input placeholder="Максимальная цена" type="number" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Пробег до
          </label>
          <Input placeholder="км" type="number" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Тип кузова
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Любой" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sedan">Седан</SelectItem>
              <SelectItem value="hatchback">Хэтчбек</SelectItem>
              <SelectItem value="suv">Внедорожник</SelectItem>
              <SelectItem value="wagon">Универсал</SelectItem>
              <SelectItem value="coupe">Купе</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Коробка передач
          </label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Любая" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">Автоматическая</SelectItem>
              <SelectItem value="manual">Механическая</SelectItem>
              <SelectItem value="robot">Робот</SelectItem>
              <SelectItem value="variator">Вариатор</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <Button className="bg-primary hover:bg-primary/90 px-8">
          <Icon name="Search" size={16} className="mr-2" />
          Найти автомобили
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;

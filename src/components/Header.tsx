import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Car" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">АвтоДоска</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Главная
            </a>
            <a
              href="/catalog"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Каталог
            </a>
            <a
              href="/add"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Подать объявление
            </a>
            <a
              href="/contacts"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-2">
            <div className="relative hidden lg:block">
              <Input
                placeholder="Поиск автомобилей..."
                className="w-64 pr-10"
              />
              <Icon
                name="Search"
                className="absolute right-3 top-3 text-gray-400"
                size={16}
              />
            </div>

            <Button variant="outline" size="sm">
              <Icon name="Heart" size={16} className="mr-1" />
              Избранное
            </Button>

            <Button variant="outline" size="sm">
              <Icon name="User" size={16} className="mr-1" />
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

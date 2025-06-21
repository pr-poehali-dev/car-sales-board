import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Car" className="text-primary" size={24} />
              <span className="text-xl font-bold text-primary">АвтоДоска</span>
            </div>
            <p className="text-gray-600 text-sm">
              Крупнейшая площадка для покупки и продажи автомобилей в России
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Покупателям</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/catalog" className="text-gray-600 hover:text-primary">
                  Каталог автомобилей
                </a>
              </li>
              <li>
                <a href="/search" className="text-gray-600 hover:text-primary">
                  Поиск
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-gray-600 hover:text-primary">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="/reports" className="text-gray-600 hover:text-primary">
                  Отчёты
                </a>
              </li>
            </ul>
          </div>

          {/* Sellers */}
          <div>
            <h3 className="font-semibold mb-4">Продавцам</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/add" className="text-gray-600 hover:text-primary">
                  Подать объявление
                </a>
              </li>
              <li>
                <a href="/garage" className="text-gray-600 hover:text-primary">
                  Мой гараж
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-600 hover:text-primary">
                  Личный кабинет
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/contacts"
                  className="text-gray-600 hover:text-primary"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a href="/help" className="text-gray-600 hover:text-primary">
                  Помощь
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span className="text-gray-600">8 (800) 555-35-35</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 АвтоДоска. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

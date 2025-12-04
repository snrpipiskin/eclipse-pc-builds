import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Политика <span className="text-primary">конфиденциальности</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей сайта Eclipse PC. Мы уважаем вашу конфиденциальность и стремимся защитить ваши 
                персональные данные.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. Какие данные мы собираем</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                При использовании нашего сайта мы можем собирать следующую информацию:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Адрес доставки</li>
                <li>Информация о заказах</li>
                <li>Техническая информация (IP-адрес, тип браузера, cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Как мы используем ваши данные</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Собранные данные используются для:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Обработки и выполнения заказов</li>
                <li>Связи с вами по вопросам заказа</li>
                <li>Предоставления технической поддержки</li>
                <li>Улучшения качества обслуживания</li>
                <li>Отправки информации о новых продуктах и акциях (с вашего согласия)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Защита данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты ваших персональных данных 
                от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к персональным 
                данным имеют только уполномоченные сотрудники.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Передача данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением случаев, 
                необходимых для выполнения заказа (например, службам доставки) или в соответствии с 
                требованиями законодательства.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Ваши права</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Получить информацию о хранимых данных</li>
                <li>Потребовать исправления неточных данных</li>
                <li>Потребовать удаления ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
                <li>Подать жалобу в контролирующий орган</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По всем вопросам, связанным с обработкой персональных данных, вы можете связаться с нами 
                через форму обратной связи на сайте или по электронной почте.
              </p>
            </section>

            <section>
              <p className="text-muted-foreground text-sm">
                Последнее обновление: декабрь 2024
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

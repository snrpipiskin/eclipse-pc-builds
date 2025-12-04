import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const CookiePolicy = () => {
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
            Политика <span className="text-primary">Cookies</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Что такое Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies (куки) — это небольшие текстовые файлы, которые сохраняются на вашем устройстве 
                при посещении веб-сайтов. Они помогают сайту запоминать информацию о вашем визите, 
                что делает следующее посещение проще и сайт более полезным для вас.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. Какие Cookies мы используем</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Необходимые Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Эти файлы необходимы для работы сайта и не могут быть отключены. Они обычно 
                    устанавливаются в ответ на ваши действия, такие как настройка параметров 
                    конфиденциальности или заполнение форм.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Аналитические Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Помогают нам понять, как посетители взаимодействуют с сайтом, собирая анонимную 
                    информацию. Это позволяет нам улучшать работу сайта.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Функциональные Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Позволяют сайту запоминать сделанный вами выбор (например, язык или регион) 
                    и предоставлять улучшенные персональные функции.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Маркетинговые Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Используются для отслеживания посетителей на веб-сайтах с целью показа релевантной 
                    рекламы. Мы используем их только с вашего согласия.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Срок хранения Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies могут храниться разное время:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Сессионные Cookies</strong> — удаляются после закрытия браузера</li>
                <li><strong>Постоянные Cookies</strong> — хранятся от 30 дней до 2 лет в зависимости от назначения</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Как управлять Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Вы можете контролировать и удалять Cookies по своему усмотрению. Большинство браузеров 
                позволяют:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Просматривать установленные Cookies</li>
                <li>Удалять все или отдельные Cookies</li>
                <li>Блокировать Cookies от определённых сайтов</li>
                <li>Блокировать все Cookies</li>
                <li>Удалять все Cookies при закрытии браузера</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Обратите внимание: если вы отключите Cookies, некоторые функции сайта могут работать 
                некорректно.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Настройки браузеров</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Инструкции по управлению Cookies в популярных браузерах:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google Chrome: Настройки → Конфиденциальность и безопасность → Файлы cookie</li>
                <li>Mozilla Firefox: Настройки → Приватность и защита → Куки и данные сайтов</li>
                <li>Safari: Настройки → Конфиденциальность → Управление данными веб-сайтов</li>
                <li>Microsoft Edge: Настройки → Файлы cookie и разрешения сайтов</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Согласие на использование Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Продолжая использовать наш сайт, вы соглашаетесь на использование Cookies в соответствии 
                с данной политикой. Вы можете отозвать своё согласие в любое время, изменив настройки 
                браузера.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Изменения в политике</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы можем обновлять данную Политику Cookies. Все изменения будут опубликованы на этой 
                странице с указанием даты последнего обновления.
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

export default CookiePolicy;

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const TermsOfService = () => {
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
            Условия <span className="text-primary">использования</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящие Условия использования регулируют отношения между Eclipse PC (далее — «Продавец») 
                и пользователем сайта (далее — «Покупатель») при приобретении товаров и услуг. Используя 
                наш сайт, вы соглашаетесь с данными условиями.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. Товары и услуги</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Мы предлагаем:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Готовые сборки игровых и рабочих компьютеров</li>
                <li>Индивидуальную сборку компьютеров по вашим требованиям</li>
                <li>Комплектующие и периферийные устройства</li>
                <li>Техническую поддержку и обслуживание</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Оформление заказа</h2>
              <p className="text-muted-foreground leading-relaxed">
                Для оформления заказа необходимо связаться с нами через форму на сайте или по телефону. 
                После подтверждения заказа и оплаты мы приступаем к сборке. Вы получите уведомление о 
                готовности заказа и информацию о доставке.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Цены и оплата</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Все цены указаны в российских рублях и включают НДС. Мы принимаем следующие способы оплаты:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Банковские карты (Visa, MasterCard, МИР)</li>
                <li>Наличные при получении</li>
                <li>Банковский перевод для юридических лиц</li>
                <li>Рассрочка от банков-партнёров</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Доставка</h2>
              <p className="text-muted-foreground leading-relaxed">
                Доставка осуществляется по всей России транспортными компаниями или курьерской службой. 
                Стоимость и сроки доставки зависят от региона и рассчитываются индивидуально. Компьютеры 
                упаковываются в специальную защитную упаковку.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Гарантия</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                На все наши сборки предоставляется гарантия 2 года. Гарантия включает:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Бесплатную диагностику неисправностей</li>
                <li>Бесплатный ремонт или замену неисправных компонентов</li>
                <li>Техническую поддержку по телефону и онлайн</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Гарантия не распространяется на механические повреждения, повреждения от перепадов 
                напряжения, и модификации, выполненные без нашего согласия.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Возврат и обмен</h2>
              <p className="text-muted-foreground leading-relaxed">
                Вы можете вернуть товар надлежащего качества в течение 14 дней с момента получения, 
                если он не был в употреблении и сохранён товарный вид. Возврат товара ненадлежащего 
                качества осуществляется в соответствии с законодательством РФ о защите прав потребителей.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">8. Ответственность</h2>
              <p className="text-muted-foreground leading-relaxed">
                Продавец не несёт ответственности за убытки, возникшие в результате неправильной 
                эксплуатации товара, использования несовместимого программного обеспечения или 
                действий третьих лиц.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">9. Изменение условий</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы оставляем за собой право изменять данные Условия использования. Актуальная версия 
                всегда доступна на этой странице. Продолжая использовать сайт после внесения изменений, 
                вы принимаете новые условия.
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

export default TermsOfService;

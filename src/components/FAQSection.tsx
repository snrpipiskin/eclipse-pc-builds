import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Какая гарантия на компьютеры?",
    answer: "Мы предоставляем гарантию 2 года на все наши сборки. Гарантия распространяется на все комплектующие и работу системы. В случае поломки мы бесплатно проведём диагностику и ремонт."
  },
  {
    question: "Сколько времени занимает сборка?",
    answer: "Стандартная сборка занимает 2-3 рабочих дня. Срочная сборка возможна за 1 день при наличии всех комплектующих на складе. После сборки мы проводим тестирование системы в течение 24 часов."
  },
  {
    question: "Можно ли изменить комплектацию готовой сборки?",
    answer: "Да, вы можете изменить любой компонент в наших готовых сборках. Свяжитесь с нами, и мы подберём оптимальную конфигурацию под ваши задачи и бюджет."
  },
  {
    question: "Как осуществляется доставка?",
    answer: "Мы доставляем по всей России. Доставка по Грозному — 1-2 дня, по России — 3-7 дней в зависимости от региона. Сборка занимает 2-3 дня, срочная сборка — от 1 дня. Компьютер упаковывается в специальную защитную упаковку для безопасной транспортировки."
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем оплату банковскими картами, наличными при получении, банковским переводом. Также доступна рассрочка от наших банков-партнёров на срок до 24 месяцев."
  },
  {
    question: "Можно ли заказать индивидуальную сборку?",
    answer: "Конечно! Мы специализируемся на индивидуальных сборках. Расскажите нам о ваших задачах (игры, работа, стриминг и т.д.), и мы подберём оптимальную конфигурацию."
  },
  {
    question: "Что делать если возникла проблема с компьютером?",
    answer: "Свяжитесь с нашей технической поддержкой по телефону или через форму на сайте. Мы поможем решить проблему удалённо или организуем бесплатный ремонт в рамках гарантии."
  },
  {
    question: "Предоставляете ли вы техническую поддержку?",
    answer: "Да, мы предоставляем бесплатную техническую поддержку в течение всего гарантийного срока. Наши специалисты помогут с настройкой системы, установкой программ и решением любых вопросов."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто задаваемые <span className="text-primary">вопросы</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ответы на популярные вопросы о наших услугах
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:bg-card/80"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline hover:text-primary transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

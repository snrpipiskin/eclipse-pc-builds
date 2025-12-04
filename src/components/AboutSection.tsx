import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Zap, Shield, Award, HeadphonesIcon, Rocket } from "lucide-react";
import { usePerformance } from "@/hooks/use-performance";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { isLowPerformance, prefersReducedMotion } = usePerformance();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
      })
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, "-=0.4");

      // Only animate cards on high-performance devices
      if (!isLowPerformance) {
        tl.from(cardsRef.current?.children ?? [], {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.5,
        }, "-=0.3");
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isLowPerformance, prefersReducedMotion]);

  const features = [
    {
      icon: Cpu,
      title: "Только премиальные комплектующие",
      description: "Мы используем исключительно топовые комплектующие от лидеров индустрии, таких как NVIDIA, AMD, Intel и Corsair. Каждая деталь тщательно отобрана для обеспечения надежности и производительности, гарантируя работу вашего ПК на пиковой эффективности на долгие годы.",
    },
    {
      icon: Zap,
      title: "Непревзойденная производительность",
      description: "Наши опытные сборщики оптимизируют каждый аспект вашей системы - от прецизионной прокладки кабелей для оптимального воздушного потока до индивидуальных решений охлаждения. Испытайте молниеносную загрузку, плавную многозадачность и графику, оживляющую ваши игры.",
    },
    {
      icon: Shield,
      title: "Ведущая в отрасли гарантия",
      description: "Каждый ПК Eclipse поставляется с полным гарантийным покрытием и пожизненной технической поддержкой. Мы поддерживаем наше мастерство бесплатной диагностикой, приоритетными каналами поддержки и беспроблемным процессом RMA. Ваши инвестиции защищены.",
    },
    {
      icon: Award,
      title: "Качественное мастерство",
      description: "Каждый ПК тщательно собирается вручную сертифицированными специалистами с многолетним опытом. Мы проводим строгое стресс-тестирование и проверку качества перед отправкой, гарантируя, что ваша система прибудет готовой справиться с любой задачей.",
    },
    {
      icon: Rocket,
      title: "Сборки на будущее",
      description: "Мы проектируем с учетом возможности модернизации. Просторные корпуса, достаточный запас мощности БП и стратегический подбор комплектующих означают, что ваш Eclipse PC может развиваться вместе с технологиями. Оставайтесь впереди без необходимости начинать с нуля.",
    },
    {
      icon: HeadphonesIcon,
      title: "Экспертная поддержка 24/7",
      description: "Наша специализированная команда поддержки доступна круглосуточно для помощи. Нужна ли вам помощь с настройкой, советы по оптимизации или устранение неполадок - мы всего лишь на расстоянии звонка или сообщения. Испытайте первоклассный сервис, который отличает нас.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 relative"
    >
      {/* Animated glowing backgrounds - conditional */}
      {!isLowPerformance && (
        <div className="absolute inset-0 pointer-events-none -top-40 -bottom-40">
          <div className="absolute top-32 -left-20 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[50px] animate-glow-fade" />
          <div className="absolute bottom-20 -right-20 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[50px] animate-glow-pulse" style={{ animationDelay: '2s' }} />
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 glow-text"
          >
            Почему выбирают <span className="text-primary">Eclipse PC</span>
          </h2>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Eclipse PC - место где исключительное качество встречается с передовыми инновациями. Мы не просто собираем ПК - мы дарим опыт, адаптированный для энтузиастов, профессионалов и геймеров, которые требуют только самого лучшего.
          </p>
        </div>

        <div ref={cardsRef} className="hidden grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:shadow-md hover:shadow-primary/20 transition-all duration-200 group cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutSection;

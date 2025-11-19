import { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          onComplete: () => {
            onComplete();
          }
        });
      }
    });

    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
    }, "-=0.5");
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="space-y-8 text-center">
        <div ref={textRef} className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold glow-text">
            Eclipse PC
          </h1>
          <p className="text-muted-foreground text-sm md:text-base tracking-wider">
            LOADING PREMIUM EXPERIENCE
          </p>
        </div>
        
        <div className="w-64 md:w-96 h-1 bg-muted/20 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            style={{ width: "0%" }}
          />
        </div>

        <div className="flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Preloader;

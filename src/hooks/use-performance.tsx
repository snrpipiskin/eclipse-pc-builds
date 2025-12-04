import { useState, useEffect } from "react";

interface PerformanceState {
  isLowPerformance: boolean;
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

export const usePerformance = (): PerformanceState => {
  const [state, setState] = useState<PerformanceState>({
    isLowPerformance: false,
    isMobile: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Check if mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
      || window.innerWidth < 768;

    // Check for low performance indicators
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const deviceMemory = (navigator as any).deviceMemory || 4;
    
    // Consider low performance if:
    // - User prefers reduced motion
    // - Mobile device
    // - Less than 4 CPU cores
    // - Less than 4GB RAM
    const isLowPerformance = 
      prefersReducedMotion ||
      isMobile ||
      hardwareConcurrency < 4 ||
      deviceMemory < 4;

    setState({
      isLowPerformance,
      isMobile,
      prefersReducedMotion,
    });
  }, []);

  return state;
};

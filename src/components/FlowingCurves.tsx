const FlowingCurves = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top flowing curve */}
      <svg
        className="absolute top-0 left-0 w-full h-[600px] opacity-30"
        viewBox="0 0 1920 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow1">
            <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-100 300 Q400 100 800 250 T1600 200 L2000 600 L-100 600 Z"
          fill="url(#gradient1)"
          filter="url(#glow1)"
          className="animate-pulse"
          style={{ animationDuration: '8s' }}
        />
      </svg>

      {/* Middle flowing curve */}
      <svg
        className="absolute top-1/3 left-0 w-full h-[800px] opacity-20"
        viewBox="0 0 1920 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M2000 400 Q1500 200 1000 350 T200 300 L-100 800 L2000 800 Z"
          fill="url(#gradient2)"
          filter="url(#glow2)"
          className="animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
      </svg>

      {/* Bottom flowing curve */}
      <svg
        className="absolute bottom-0 left-0 w-full h-[700px] opacity-25"
        viewBox="0 0 1920 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          </linearGradient>
          <filter id="glow3">
            <feGaussianBlur stdDeviation="18" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path
          d="M-100 0 L-100 400 Q300 250 700 400 T1500 350 L2000 300 L2000 0 Z"
          fill="url(#gradient3)"
          filter="url(#glow3)"
          className="animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '1s' }}
        />
      </svg>

      {/* Floating accent curves */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '3s' }} />
    </div>
  );
};

export default FlowingCurves;

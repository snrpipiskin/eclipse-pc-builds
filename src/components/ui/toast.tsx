import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-[380px] p-0 outline-none toast-stack-container",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "toast-item toast-glass group pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-xl p-4 pr-10 shadow-xl data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-toast-slide-in data-[state=closed]:animate-toast-slide-out",
  {
    variants: {
      variant: {
        default: "border-l-2 border-l-primary",
        success: "border-l-2 border-l-emerald-500",
        destructive: "border-l-2 border-l-destructive",
        info: "border-l-2 border-l-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const ToastIcon = ({ variant }: { variant?: "default" | "success" | "destructive" | "info" | null }) => {
  const iconClass = "h-5 w-5 shrink-0 mt-0.5";
  
  switch (variant) {
    case "success":
      return <CheckCircle2 className={cn(iconClass, "text-emerald-500")} />;
    case "destructive":
      return <AlertCircle className={cn(iconClass, "text-destructive")} />;
    case "info":
      return <Info className={cn(iconClass, "text-blue-500")} />;
    default:
      return <div className={cn("h-2 w-2 rounded-full bg-primary shrink-0 mt-2")} />;
  }
};

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>, VariantProps<typeof toastVariants> {
  duration?: number;
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, variant, duration = 5000, children, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      duration={duration}
      {...props}
    >
      <ToastIcon variant={variant} />
      <div className="flex-1 min-w-0">
        {children}
      </div>
      {/* Progress bar */}
      <div 
        className="toast-progress animate-progress-shrink"
        style={{ animationDuration: `${duration}ms` }}
      />
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-7 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-transparent px-3 text-xs font-medium text-foreground ring-offset-background transition-all hover:bg-primary/10 hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-3 top-3 rounded-lg p-1.5 text-foreground/40 opacity-0 transition-all group-hover:opacity-100 hover:text-foreground hover:bg-muted/50 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-ring",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-3.5 w-3.5" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title 
    ref={ref} 
    className={cn("text-sm font-medium text-foreground leading-tight", className)} 
    {...props} 
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description 
    ref={ref} 
    className={cn("text-xs text-muted-foreground mt-0.5 leading-relaxed", className)} 
    {...props} 
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastPropsExport = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastPropsExport as ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};

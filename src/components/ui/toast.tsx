import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, Check, AlertTriangle, Info } from "lucide-react";

import { cn } from "@/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed bottom-6 right-6 z-[100] flex flex-col-reverse gap-3 w-full max-w-[320px] outline-none",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex items-center gap-3 w-full overflow-hidden rounded-2xl px-4 py-3 shadow-2xl toast-modern data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-toast-enter data-[state=closed]:animate-toast-exit",
  {
    variants: {
      variant: {
        default: "",
        success: "",
        destructive: "",
        info: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const iconStyles = {
  default: "bg-primary/20 text-primary",
  success: "bg-emerald-500/20 text-emerald-400",
  destructive: "bg-red-500/20 text-red-400",
  info: "bg-blue-500/20 text-blue-400",
};

const ToastIcon = ({ variant }: { variant?: "default" | "success" | "destructive" | "info" | null }) => {
  const v = variant || "default";
  const baseClass = cn("h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110", iconStyles[v]);
  
  const iconClass = "h-4 w-4";
  
  switch (v) {
    case "success":
      return <div className={baseClass}><Check className={iconClass} /></div>;
    case "destructive":
      return <div className={baseClass}><AlertTriangle className={iconClass} /></div>;
    case "info":
      return <div className={baseClass}><Info className={iconClass} /></div>;
    default:
      return <div className={baseClass}><Check className={iconClass} /></div>;
  }
};

interface ToastProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>, VariantProps<typeof toastVariants> {
  duration?: number;
}

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, variant, duration = 4000, children, ...props }, ref) => {
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
      "inline-flex h-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 px-3 text-xs font-medium text-primary transition-all hover:bg-primary/20 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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
      "absolute right-2 top-2 rounded-full p-1 text-foreground/30 opacity-0 transition-all duration-200 group-hover:opacity-100 hover:text-foreground hover:bg-foreground/10 focus:opacity-100 focus:outline-none",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-3 w-3" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title 
    ref={ref} 
    className={cn("text-sm font-medium text-foreground", className)} 
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
    className={cn("text-xs text-muted-foreground", className)} 
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

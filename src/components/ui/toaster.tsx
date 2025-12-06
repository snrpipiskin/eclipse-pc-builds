import { useToast } from "@/hooks/use-toast";
import { 
  Toast, 
  ToastClose, 
  ToastDescription, 
  ToastProvider, 
  ToastTitle, 
  ToastViewport 
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }, index) {
        return (
          <Toast 
            key={id} 
            variant={variant as "default" | "success" | "destructive" | "info" | null | undefined}
            style={{
              // Stack effect: slightly offset and scale down items below the first
              transform: index > 0 ? `translateY(${index * -4}px) scale(${1 - index * 0.02})` : undefined,
              zIndex: 100 - index,
            }}
            {...props}
          >
            <div className="grid gap-0.5">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

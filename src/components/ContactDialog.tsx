import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Запрос отправлен! Мы скоро свяжемся с вами по поводу вашей индивидуальной сборки.");
    setOpen(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold glow-text">
            Запрос на индивидуальную сборку
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Расскажите нам о ПК вашей мечты, и мы создадим индивидуальное решение для вас.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
              required
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ваш.email@example.com"
              required
              className="bg-background/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Что вы ищете?</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Расскажите нам о ваших требованиях, бюджете и предполагаемом использовании..."
              required
              className="bg-background/50 min-h-[120px]"
            />
          </div>
          <Button type="submit" className="w-full font-semibold">
            Отправить запрос
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/', '_blank');
  };

  const handleVK = () => {
    window.open('https://vk.com/', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-20">
            <h1 className="text-5xl md:text-7xl font-bold">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our builds? Want a custom configuration? 
              We're here to help you create the perfect PC.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
                      <p className="text-muted-foreground">contact@eclipsepc.com</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-300">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Live Chat</h3>
                      <p className="text-muted-foreground">Available 9AM - 6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <Button 
                    onClick={handleWhatsApp}
                    className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white"
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    onClick={handleTelegram}
                    className="flex-1 bg-[#0088cc] hover:bg-[#0077b5] text-white"
                  >
                    Telegram
                  </Button>
                  <Button 
                    onClick={handleVK}
                    className="flex-1 bg-[#0077FF] hover:bg-[#0066DD] text-white"
                  >
                    VK
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-6">Send Us A Message</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone (Optional)</label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your dream PC build..." 
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full font-semibold group/send hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover/send:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

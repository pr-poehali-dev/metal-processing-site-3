import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      image: 'https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/2d262a06-f567-4390-9d1e-25f95eb8ea7f.jpg',
      title: 'Лазерная резка',
      description: 'Высокоточная резка металла толщиной до 20 мм с минимальными допусками'
    },
    {
      image: 'https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/cbac4ed3-ef5a-4ca5-84b7-d5109318427f.jpg',
      title: 'Гибка металла',
      description: 'Гибка листового металла на современном оборудовании до 3000 мм'
    },
    {
      image: 'https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/b456b5bb-a65e-433b-8cbe-8bb401104516.jpg',
      title: 'Сварка',
      description: 'Все виды сварочных работ: MIG, TIG, контактная сварка'
    },
    {
      image: 'https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/9a9bd566-be13-49ef-885d-e477eb186a13.jpg',
      title: 'Покраска',
      description: 'Порошковая и жидкая окраска с предварительной подготовкой поверхности'
    }
  ];

  const advantages = [
    {
      icon: 'Clock',
      title: 'Быстрые сроки',
      description: 'Выполнение заказов от 1 дня'
    },
    {
      icon: 'Award',
      title: 'Высокое качество',
      description: 'Современное оборудование и контроль качества'
    },
    {
      icon: 'Users',
      title: 'Опытная команда',
      description: 'Более 15 лет на рынке'
    },
    {
      icon: 'TrendingDown',
      title: 'Выгодные цены',
      description: 'Оптимальное соотношение цены и качества'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Factory" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold">МеталлТех</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('order')} className="hidden md:inline-flex">
              Оставить заявку
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Лазерная резка<br />
                <span className="text-primary">и гибка металла</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Высокоточная обработка металла на современном оборудовании. 
                Работаем с черными и цветными металлами любой сложности.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('order')} className="bg-primary hover:bg-primary/90">
                  Получить расчет
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img 
                  src="https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/bbaa0384-39a1-459e-bd88-a3aa662a4f2a.jpg" 
                  alt="Металлообработка" 
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный цикл металлообработки от резки до финишной отделки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in border-border bg-secondary"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-0 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Наши преимущества</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <div 
                key={idx} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-4 mx-auto p-4 bg-accent/10 rounded-full w-fit">
                  <Icon name={adv.icon} size={36} className="text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{adv.title}</h3>
                <p className="text-muted-foreground">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/5d911962-5b6f-45de-ba4c-88ba2ea2ff8c/files/dbbd0eae-d52a-4fd9-aae4-f04bdf258cea.jpg" 
                alt="О компании" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-heading font-bold mb-6">О компании</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                МеталлТех — современное производственное предприятие, специализирующееся 
                на высокоточной обработке металла. Мы используем новейшее оборудование 
                европейского производства и работаем по международным стандартам качества.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                За 15 лет работы мы реализовали более 5000 проектов для предприятий 
                машиностроения, строительства и других отраслей промышленности.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">5000+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Оставить заявку</h2>
            <p className="text-muted-foreground text-lg">
              Заполните форму и мы свяжемся с вами для расчета стоимости
            </p>
          </div>
          <Card className="animate-scale-in border-border bg-card">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Описание заказа *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите ваш заказ: тип металла, толщина, количество деталей..."
                    className="mt-2 min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-heading font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center animate-fade-in border-border bg-secondary">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Промышленная, д. 15</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in border-border bg-secondary" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in border-border bg-secondary" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@metaltech.ru</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 МеталлТех. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
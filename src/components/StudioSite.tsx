import React, { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FlowingBackground } from "@/components/FlowingBackground";
const studioInterior = "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/CL_0444-scaled-1.jpg";
const pilatesPractice = "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/CL_0437-scaled-1.jpg";
const personalizedCare = "https://images.unsplash.com/photo-1678985854460-94df3afe13f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const renataPortrait = "https://res.cloudinary.com/ifuatk2z/image/upload/v1783536612/1_tss9vp.jpg";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Star,
  Users,
  Heart,
  Award,
  Sparkles,
  ArrowRight,
  ArrowUp,
  Instagram,
  Facebook,
  BookOpen,
} from "lucide-react";

const WHATSAPP = "https://api.whatsapp.com/send/?phone=5519998327180&text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20aulas%20de%20Pilates.";

export function StudioSite() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back-to-top button starting from section 2 (scrollY > 500)
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Offerings />
      <MethodSection />
      <BenefitsSection />
      <RenataSection />
      <Differentials />
      <Testimonials />
      <SocialNetworks />
      <FAQSection />
      <Contact />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary border border-primary/20 shadow-lg hover:bg-slate-50 transition-colors duration-300"
            title="Voltar ao topo"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
          title="Fale conosco no WhatsApp"
          aria-label="Fale conosco no WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-8 w-8 fill-white"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.1 480.9c-3.8 10 1 21.4 10.8 25.3 3.3 1.3 6.8 2 10.3 2 4.1 0 8.1-.9 11.8-2.6l115.7-48.3c32.8 17.9 69.6 27.4 107.4 27.4 122.4 0 222-99.6 222-222 0-59.3-23.1-115-65.1-157.1zM223.9 453c-33.1 0-65.6-8.8-94-25.5l-6.7-4-69.8 29.1 29.6-67.9-4.4-7c-18.4-29.3-28.1-63.1-28.1-97.7 0-101.5 82.6-184.1 184.1-184.1s184.1 82.6 184.1 184.1S325.4 453 223.9 453zM308.2 328.5c-4.6-2.3-27.1-13.4-31.3-14.9-4.2-1.5-7.2-2.3-10.3 2.3-3 4.6-11.8 14.9-14.5 18-2.7 3-5.3 3.4-9.9 1.1-4.6-2.3-19.4-7.2-37.1-22.9-13.7-12.3-23-27.4-25.7-32-2.7-4.6-.3-7.1 2-9.4 2-2 4.6-5.3 6.9-8 2.3-2.7 3-4.6 4.6-7.6 1.5-3 .8-5.7-.4-8-1.1-2.3-10.3-24.8-14.1-34-3.7-9-7.5-7.7-10.3-7.7-2.7-.1-5.7-.1-8.8-.1-3 0-8 1.1-12.2 5.7-4.2 4.6-16 15.6-16 38s16.4 44.1 18.7 47.1c2.3 3 32.2 49.2 78.1 69 11 4.7 19.5 7.5 26.2 9.6 11 3.5 21 3 29 1.8 8.7-1.3 27.1-11.1 30.9-21.3 3.8-10.2 3.8-19.1 2.7-21-1.1-1.9-4.2-3-8.8-5.3z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ------------------------------ NAV ------------------------------ */
function Nav() {
  const [isLightBg, setIsLightBg] = useState(true);

  useEffect(() => {
    const checkBg = () => {
      const darkElements = document.querySelectorAll('[data-theme="dark"]');
      let isOverDark = false;
      const header = document.querySelector('header');
      if (header) {
        const rectHeader = header.getBoundingClientRect();
        const headerCenterY = rectHeader.top + rectHeader.height / 2;

        darkElements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (headerCenterY >= rect.top && headerCenterY <= rect.bottom) {
            isOverDark = true;
          }
        });
      }
      setIsLightBg(!isOverDark);
    };

    window.addEventListener("scroll", checkBg, { passive: true });
    window.addEventListener("resize", checkBg, { passive: true });
    checkBg();
    return () => {
      window.removeEventListener("scroll", checkBg);
      window.removeEventListener("resize", checkBg);
    };
  }, []);

  const links = [
    { href: "#studio", label: "O Studio" },
    { href: "#metodo", label: "O Método" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#renata", label: "A Renata" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 w-max`}
    >
      <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-3 px-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-[20px] border backdrop-blur-md px-4 py-1.5 text-sm font-medium transition-colors ${
              isLightBg
                ? "border-foreground/30 bg-foreground/5 text-foreground hover:bg-foreground/10"
                : "border-white/40 bg-white/5 text-white hover:bg-white/20"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const bgImg = "https://res.cloudinary.com/ifuatk2z/image/upload/v1783538038/kneh8jpbgafglyvxgqxb_kagdim.png";
  const overlayImg = "https://res.cloudinary.com/ifuatk2z/image/upload/v1783538038/RENATA_PNG_zvnjvt.png";

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#d7cfc5]"
    >
      {/* 1) Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgImg})`, y }}
      />
      
      {/* Gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#a98972]/80 via-[#a98972]/20 to-transparent pointer-events-none z-[1]" />

      {/* 2) Huge Text "RENATA FREITAS" (Below Overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-[2]">
        <div className="flex w-full px-4 md:px-8 justify-start opacity-0">
          <p className="text-xl md:text-3xl font-light tracking-wide whitespace-nowrap -mb-2 md:-mb-4 lg:-mb-8">
            Pilates o movimento que cura
          </p>
        </div>
        <h1 
          className="w-full flex flex-col text-[18vw] md:text-[21vw] font-serif font-bold text-white/20 leading-[0.85] tracking-tighter mt-4 px-4 md:px-8" 
        >
          <span className="text-left">RENATA</span>
          <span className="text-right">FREITAS</span>
        </h1>
      </div>

      {/* 3) Overlay Image (Above Huge Text) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-[3]"
        style={{ backgroundImage: `url(${overlayImg})`, y }}
      />

      {/* 4) Small Text "Pilates..." (Above Overlay) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden z-[4]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex w-full px-4 md:px-8 justify-start"
        >
          <p className="text-white text-xl md:text-3xl font-light tracking-wide drop-shadow-sm whitespace-nowrap -mb-2 md:-mb-4 lg:-mb-8">
            Pilates o movimento que cura
          </p>
        </motion.div>
        <h1 
          className="w-full flex flex-col text-[18vw] md:text-[21vw] font-serif font-bold opacity-0 leading-[0.85] tracking-tighter mt-4 px-4 md:px-8" 
        >
          <span className="text-left">RENATA</span>
          <span className="text-right">FREITAS</span>
        </h1>
      </div>

      {/* 5) UI Elements over everything */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 min-h-screen flex flex-col pt-32 pb-12">
        <div className="flex-1" />

        {/* Bottom CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-auto flex flex-col sm:flex-row justify-center gap-4"
        >
          <a href="#studio" className="flex items-center justify-center rounded-[24px] bg-white px-8 py-3.5 text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors shadow-lg">
            Conheça o Studio
          </a>
          <a href="#experiencias" className="flex items-center justify-center rounded-[24px] border border-white/40 bg-white/5 backdrop-blur-md px-8 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-colors shadow-lg">
            Explorar com calma
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ ABOUT ------------------------------ */
function About() {
  return (
    <section id="studio" className="relative py-28 overflow-hidden">
      <FlowingBackground />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <FadeUp>
          <div className="relative">
            <img
              src={studioInterior}
              alt="Interior do Studio Renata Freitas"
              width={1280}
              height={960}
              loading="lazy"
              className="shadow-soft rounded-[2rem]"
            />
            <div className="glass absolute -bottom-8 -right-6 max-w-xs rounded-2xl p-5">
              <p className="text-script text-primary text-2xl leading-none">Rua Emilio Ribas</p>
              <p className="text-foreground/70 mt-2 text-sm">
                No coração do Cambuí — estacionamento próprio & manobrista.
              </p>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Conheça o Studio</span>
          <h2 className="text-primary mt-4 text-4xl md:text-5xl">
            Fundado em 2012, dedicado à<br />
            <span className="italic">qualidade da sua vida.</span>
          </h2>
          <p className="text-foreground/75 mt-6 text-lg leading-relaxed">
            Nosso compromisso é oferecer serviços de excelência, com profissionais dedicados e
            qualificados. Estamos preparados para quem busca melhor condicionamento físico,
            qualidade de vida, postura e perda de peso.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { k: "12+", v: "anos de estúdio" },
              { k: "100%", v: "fisioterapeutas" },
              { k: "5.0", v: "no Google" },
              { k: "50min", v: "por sessão" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-5 py-4">
                <p className="text-primary font-serif text-3xl italic">{s.k}</p>
                <p className="text-foreground/60 mt-1 text-xs tracking-wide uppercase">{s.v}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------ OFFERINGS ------------------------------ */
function Offerings() {
  const items = [
    {
      title: "Aulas personalizadas",
      body: "Sessões adaptadas ao seu nível e às suas necessidades individuais.",
      image: "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/CL_0283-scaled-1.jpg",
    },
    {
      title: "Instrutores qualificados",
      body: "Fisioterapeutas certificados garantindo ensino de alta qualidade.",
      image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1783548231/Captura_de_tela_2026-07-08_190242_bsk3ai.png",
    },
    {
      title: "Ambiente inspirador",
      body: "Um espaço tranquilo e convidativo, que estimula foco e motivação.",
      image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1783548322/Captura_de_tela_2026-07-08_190414_mh8j4n.png",
    },
    {
      title: "Equipamentos de ponta",
      body: "Os melhores aparelhos para uma prática eficiente e segura.",
      image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1783548355/Captura_de_tela_2026-07-08_190447_jlfsra.png",
    },
    {
      title: "Atendimento especializado",
      body: "Idosos, crianças e gestantes com o cuidado que cada um merece.",
      image: "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/CL_0431-scaled-1-1024x683.jpg",
    },
    {
      title: "Localização & conveniência",
      body: "Cambuí, estacionamento próprio e serviço de manobrista.",
      image: "https://res.cloudinary.com/ifuatk2z/image/upload/v1783548477/Captura_de_tela_2026-07-08_190650_ddsohk.png",
    },
  ];
  return (
    <section className="bg-lavender-grad relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase">O que oferecemos</span>
            <h2 className="text-primary mt-4 text-4xl md:text-5xl">
              Um cuidado inteiro, <span className="italic">só seu.</span>
            </h2>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {items.map((it, i) => (
            <FadeUp key={it.title} delay={i * 0.06}>
              <div className="bg-white border border-primary/5 hover:border-primary/10 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col h-full overflow-hidden">
                {/* Image Container flush with top, left, and right */}
                <div className="overflow-hidden rounded-b-[1.5rem] aspect-[1.1] w-full bg-slate-50">
                  <img
                    src={it.image}
                    alt={it.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Title and Description Content Area */}
                <div className="flex flex-col flex-1 p-6 pb-8">
                  {/* Title row (centered, no plus sign) */}
                  <div className="border-b border-primary/10 pb-4 text-center">
                    <h3 className="text-primary text-xs font-bold tracking-wider uppercase">
                      {it.title}
                    </h3>
                  </div>

                  {/* Description - Centered style */}
                  <div className="pt-6 flex-1 flex items-center justify-center">
                    <p className="text-foreground/75 text-center text-sm leading-relaxed max-w-[280px]">
                      {it.body}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ METHOD ------------------------------ */
function MethodSection() {
  return (
    <section id="metodo" className="relative py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr]">
        <FadeUp>
          <div className="relative">
            <div className="shadow-soft overflow-hidden rounded-[2rem]">
              <img
                src={pilatesPractice}
                alt="Prática de Pilates no reformer"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="glass absolute -top-6 -right-6 max-w-[220px] rounded-2xl p-5"
            >
              <p className="text-script text-primary text-xl leading-none">Joseph Pilates, 1920</p>
              <p className="text-foreground/70 mt-2 text-xs leading-relaxed">
                Um método que integra corpo e mente através do movimento consciente.
              </p>
            </motion.div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Nosso método</span>
          <h2 className="text-primary mt-4 text-4xl md:text-5xl">
            Movimento consciente,<br />
            <span className="italic">resultado duradouro.</span>
          </h2>
          <p className="text-foreground/75 mt-6 leading-relaxed">
            O Método Pilates integra corpo e mente com aparelhos específicos para a reeducação
            do movimento. Aprimora respiração, reduz estresse e aumenta a flexibilidade —
            eficaz contra dores crônicas e lesões, para todas as idades.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Turmas reduzidas",
                body: "Fisioterapeutas ministram aulas em pequenos grupos.",
              },
              {
                title: "50 minutos",
                body: "Duração ideal para foco, execução e recuperação.",
              },
              {
                title: "Certificação premium",
                body: "Profissionais formados pelas melhores escolas.",
              },
              {
                title: "Individualização",
                body: "Treinamento adaptado à sua condição física.",
              },
            ].map((c) => (
              <div key={c.title} className="border-primary/10 rounded-2xl border p-5">
                <h3 className="text-primary font-serif text-xl">{c.title}</h3>
                <p className="text-foreground/70 mt-2 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------ BENEFITS ------------------------------ */
function BenefitsSection() {
  const benefits = [
    { icon: Award, title: "Aprimoramento postural", body: "Melhora significativa na postura e no alinhamento corporal." },
    { icon: Heart, title: "Fortalecimento muscular", body: "Foco no core e demais grupos musculares." },
    { icon: Sparkles, title: "Flexibilidade & mobilidade", body: "Aumento da amplitude de movimento e tonificação." },
    { icon: Users, title: "Redução de estresse", body: "Ambiente acolhedor que promove relaxamento mental." },
  ];
  return (
    <section id="beneficios" className="relative overflow-hidden py-28">
      <div className="bg-lavender-grad absolute inset-x-0 top-0 -z-10 h-1/2" />
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Benefícios</span>
            <h2 className="text-primary mt-4 text-4xl md:text-5xl">
              O que o pilates faz <span className="italic">por você.</span>
            </h2>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.08}>
              <div className="glass flex items-start gap-5 rounded-3xl p-7">
                <div className="bg-wine-grad grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-primary text-2xl">{b.title}</h3>
                  <p className="text-foreground/70 mt-2 leading-relaxed">{b.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-16 overflow-hidden rounded-[2rem]">
            <img
              src={personalizedCare}
              alt="Atendimento individualizado no studio"
              width={1280}
              height={960}
              loading="lazy"
              className="h-[380px] w-full object-cover md:h-[520px]"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------ RENATA ------------------------------ */
function RenataSection() {
  return (
    <section id="renata" className="relative py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeUp>
          <div className="relative mx-auto max-w-md">
            <div className="shadow-soft overflow-hidden rounded-[2rem]">
              <img
                src={renataPortrait}
                alt="Renata Freitas — fundadora"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover scale-110 object-[center_30%]"
              />
            </div>
            <div className="glass absolute -bottom-6 left-6 right-6 rounded-2xl px-5 py-4">
              <p className="text-script text-primary text-2xl leading-none">Renata Freitas</p>
              <p className="text-foreground/60 mt-1 text-[10px] tracking-widest uppercase">
                Fisioterapeuta · Fundadora
              </p>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <span className="text-primary text-xs tracking-[0.3em] uppercase">Quem é Renata</span>
          <h2 className="text-primary mt-4 text-4xl md:text-5xl">
            Uma jornada de <span className="italic">14 anos</span><br /> em movimento e cuidado.
          </h2>
          <p className="text-foreground/75 mt-6 leading-relaxed">
            Formada em fisioterapia em 2010, especializou-se em Pilates no ano seguinte e concluiu
            a formação em CoreAlign em 2012. Em 2022, aprofundou-se com pós-graduação em
            medicina chinesa e acupuntura. Hoje, entre Brasil e Estados Unidos, mantém-se em
            constante atualização — sempre em busca de inovação e excelência para o Studio.
          </p>

          <div className="mt-8 space-y-3">
            {[
              { year: "2010", event: "Graduação em Fisioterapia" },
              { year: "2011", event: "Especialização em Pilates" },
              { year: "2012", event: "Formação em CoreAlign — fundação do Studio" },
              { year: "2022", event: "Pós em Medicina Chinesa e Acupuntura" },
            ].map((t) => (
              <div key={t.year} className="flex items-center gap-5">
                <span className="text-primary font-serif text-2xl italic">{t.year}</span>
                <div className="h-px flex-1 bg-primary/20" />
                <span className="text-foreground/75 text-sm">{t.event}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------ DIFFERENTIALS ------------------------------ */
function Differentials() {
  const items = [
    "Turmas reduzidas",
    "Atendimento individualizado",
    "Professores fisioterapeutas",
    "Localização privilegiada no Cambuí",
    "Serviço de manobrista",
    "5 estrelas no Google",
  ];
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div data-theme="dark" className="glass-dark bg-wine-grad relative overflow-hidden rounded-[2rem] px-8 py-16 md:px-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[color:var(--lavender)]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
          <FadeUp>
            <span className="text-[color:var(--cream)]/70 text-xs tracking-[0.3em] uppercase">
              Nossos diferenciais
            </span>
            <h2 className="text-[color:var(--cream)] mt-4 max-w-2xl text-4xl md:text-5xl">
              Por que o Studio Renata Freitas é <span className="italic">diferente.</span>
            </h2>
          </FadeUp>
          <div className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <FadeUp key={it} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
                  <Sparkles className="h-4 w-4 text-[color:var(--lavender)] shrink-0" />
                  <span className="text-[color:var(--cream)]">{it}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TESTIMONIALS ------------------------------ */
function Testimonials() {
  const videos = [
    {
      src: "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/video-01.mp4",
      name: "Depoimento de Aluna",
      tag: "Resultados reais",
    },
    {
      src: "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/3636589129380523120.mp4",
      name: "Depoimento de Aluna",
      tag: "Cuidado & Saúde",
    },
    {
      src: "https://studiorenatafreitas.com.br/wp-content/uploads/2025/10/video-03.mp4",
      name: "Depoimento de Aluna",
      tag: "Qualidade de vida",
    },
  ];

  return (
    <section className="bg-lavender-grad relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Depoimentos</span>
            <h2 className="text-primary mt-4 text-4xl md:text-5xl">
              O que nossas <span className="italic">alunas dizem.</span>
            </h2>
            <p className="text-foreground/70 mt-4 leading-relaxed">
              Assista aos depoimentos em vídeo de quem vivencia diariamente a dedicação, o profissionalismo e a harmonia do nosso Studio.
            </p>
          </div>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {videos.map((v, i) => (
            <FadeUp key={v.src} delay={i * 0.1}>
              <div className="flex flex-col transition-all duration-300 hover:scale-[1.01]">
                <div className="relative overflow-hidden rounded-[1.8rem] aspect-[9/16]">
                  <video
                    src={v.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover border-none outline-none ring-0"
                  />
                </div>
                <div className="mt-5 px-3 flex flex-col items-center text-center">
                  <div className="flex gap-0.5 mb-2">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                    ))}
                  </div>
                  <p className="text-primary font-serif text-lg font-semibold">{v.name}</p>
                  <p className="text-foreground/50 text-[11px] tracking-widest uppercase mt-0.5">{v.tag}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FAQSection() {
  const faqs = [
    {
      q: "O que é Pilates e para o que serve?",
      a: "Método desenvolvido por Joseph Pilates nos anos 1920, focado no fortalecimento do core, flexibilidade, postura e equilíbrio corpo-mente. Pode ser praticado no solo ou em aparelhos como Reformer e Cadillac, sendo reconhecido pela reabilitação, alívio de dores, prevenção de lesões e desenvolvimento de um corpo mais forte e equilibrado.",
    },
    {
      q: "Quantas vezes por semana devo praticar pilates?",
      a: "Recomendamos de duas a três vezes por semana para resultados significativos. A regularidade permite ao corpo se adaptar e progredir de forma mais eficaz. Mesmo uma vez por semana já traz benefícios, especialmente combinado a outras atividades físicas.",
    },
    {
      q: "Com quanto tempo o pilates começa a fazer efeito?",
      a: "Muitas pessoas relatam melhora da postura, flexibilidade e alívio de dores já nas primeiras semanas. Para ganhos maiores de força, estabilidade e coordenação, algumas semanas a meses de prática consistente costumam ser necessários.",
    },
    { q: "Qual o tempo de duração da aula de Pilates?", a: "Nossas aulas têm duração de 50 minutos." },
    {
      q: "Pilates emagrece?",
      a: "O Pilates não é projetado para perda de peso, mas contribui como parte de um programa: fortalece, tonifica, melhora consciência corporal e reduz estresse — o que apoia hábitos saudáveis e favorece o emagrecimento quando combinado com dieta equilibrada.",
    },
    {
      q: "É possível ter ganho de massa magra no pilates?",
      a: "Sim, especialmente para iniciantes ou em reabilitação. Os exercícios podem ser ajustados para maior resistência, ativando fibras profundas. Para ganhos maiores, é recomendado complementar com musculação e dieta adequada.",
    },
    {
      q: "Pilates faz perder barriga?",
      a: "Pilates tonifica o abdômen e fortalece o core, tornando a região mais firme. Para perda de gordura localizada, é necessário associar exercícios cardiovasculares e alimentação equilibrada.",
    },
    {
      q: "Quais os benefícios do Pilates?",
      a: "Fortalecimento de core, melhora da postura, aumento de flexibilidade, equilíbrio, coordenação, redução de estresse, prevenção de lesões, e aumento de energia e vitalidade — uma abordagem holística para corpo e mente.",
    },
    {
      q: "Quais os benefícios do Pilates para a terceira idade?",
      a: "Melhora postura e equilíbrio, reduzindo risco de quedas; fortalece de forma suave; aumenta flexibilidade e mobilidade; promove saúde mental, energia e socialização.",
    },
    {
      q: "Quais os benefícios do Pilates para gestantes?",
      a: "Fortalece core e assoalho pélvico, melhora postura, alivia dores comuns da gestação, promove respiração consciente, prepara para o parto, melhora circulação e favorece o bem-estar emocional.",
    },
  ];
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[0.9fr_1.4fr]">
        <FadeUp>
          <span className="text-primary text-xs tracking-[0.3em] uppercase">FAQ</span>
          <h2 className="text-primary mt-4 text-4xl md:text-5xl">
            Perguntas <span className="italic">frequentes.</span>
          </h2>
          <p className="text-foreground/70 mt-6 leading-relaxed">
            Reunimos aqui as dúvidas mais comuns sobre o método, resultados e nossa rotina no
            Studio. Não encontrou o que procurava? Fale com a gente pelo WhatsApp.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="bg-wine-grad text-primary-foreground shadow-soft mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </FadeUp>
        <FadeUp delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-primary/15"
              >
                <AccordionTrigger className="text-primary font-serif text-lg md:text-xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}

/* ------------------------------ SOCIAL NETWORKS ------------------------------ */
function SocialNetworks() {
  return (
    <section id="redes" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <FadeUp>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase">Nossas Redes</span>
            <h2 className="text-primary mt-4 text-4xl md:text-5xl">
              Acompanhe nosso <span className="italic">dia a dia.</span>
            </h2>
            <p className="text-foreground/70 mt-4 leading-relaxed">
              Conecte-se com a gente pelas nossas redes sociais e acompanhe artigos exclusivos sobre saúde, movimento consciente e bem-estar no nosso blog.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Blog */}
          <FadeUp delay={0.1}>
            <div className="group h-full rounded-[2rem] border border-primary/10 bg-white p-8 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--lavender-soft)] text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">Acompanhe nosso blog</h3>
                <p className="text-foreground/75 leading-relaxed mb-6">
                  Fique por dentro de conteúdos exclusivos, novidades sobre Pilates, dicas de saúde e qualidade de vida direto no nosso site.
                </p>
              </div>
              <a
                href="https://studiorenatafreitas.com.br/blog/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Acessar o Blog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>

          {/* Card 2: Instagram */}
          <FadeUp delay={0.2}>
            <div className="group h-full rounded-[2rem] border border-primary/10 bg-white p-8 shadow-soft hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E1306C]/10 text-[#E1306C]">
                  <Instagram className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-primary mb-3">Siga no Instagram</h3>
                <p className="text-foreground/75 leading-relaxed mb-6">
                  Acompanhe nossa rotina de aulas, dicas de exercícios, momentos especiais e interações diárias diretamente do nosso feed.
                </p>
              </div>
              <a
                href="https://www.instagram.com/studiorenatafreitas/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Acompanhar Instagram <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct highly legible WhatsApp message
    const text = `Olá! Vim através do site e gostaria de agendar uma aula.\n\n` +
      `📝 *Dados de Contato*:\n` +
      `• *Nome*: ${formData.nome}\n` +
      `• *Email*: ${formData.email}\n` +
      `• *Telefone*: ${formData.telefone}\n` +
      `• *Assunto*: ${formData.assunto || "Geral"}\n\n` +
      `💬 *Mensagem*:\n${formData.mensagem || "Olá, gostaria de saber mais informações sobre as aulas de Pilates."}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5519998327180&text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div data-theme="dark" className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 bg-wine-grad relative overflow-hidden rounded-[2.5rem] shadow-soft">
          
          {/* Left Block - Informative Contact Card */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-between border-r border-primary/10">
            <div>
              <span className="text-primary/75 text-xs tracking-[0.3em] uppercase font-serif block mb-2">
                CONTATO
              </span>
              <h3 className="text-primary font-serif text-3xl md:text-4xl mb-8">
                Fale Conosco
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 bg-[color:var(--lavender-soft)] rounded-xl flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground/90 font-medium text-sm md:text-base">
                      Rua Dr. Emilio Ribas, 443 — Cambuí
                    </p>
                    <p className="text-foreground/60 text-xs mt-0.5">
                      13025-141 · Campinas / SP
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 bg-[color:var(--lavender-soft)] rounded-xl flex items-center justify-center text-primary">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground/90 font-medium text-sm md:text-base">
                      WhatsApp: (19) 99832-7180
                    </p>
                    <p className="text-foreground/60 text-xs mt-0.5">
                      Clique no botão flutuante para falar diretamente
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 bg-[color:var(--lavender-soft)] rounded-xl flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground/90 font-medium text-sm md:text-base">
                      Telefone: (19) 3252-2769
                    </p>
                    <p className="text-foreground/60 text-xs mt-0.5">
                      Atendimento telefônico comercial
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-primary/10 pt-6">
              <p className="text-xs text-foreground/50 leading-relaxed">
                Estacionamento próprio com manobrista gratuito para sua total comodidade.
              </p>
            </div>
          </div>

          {/* Right Block - Interactive Dynamic Form */}
          <div className="relative p-8 md:p-12 lg:p-16 overflow-hidden flex flex-col justify-center">
            {/* Background image overlay with blur */}
            <div 
              className="absolute inset-0 bg-cover bg-center -z-10" 
              style={{ backgroundImage: `url(${studioInterior})` }} 
            />
            <div className="absolute inset-0 bg-wine-deep/85 backdrop-blur-xs -z-10" />

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-foreground placeholder-foreground/55 focus:outline-none focus:ring-2 focus:ring-[color:var(--lavender)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-foreground placeholder-foreground/55 focus:outline-none focus:ring-2 focus:ring-[color:var(--lavender)]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-foreground placeholder-foreground/55 focus:outline-none focus:ring-2 focus:ring-[color:var(--lavender)]"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-foreground placeholder-foreground/55 focus:outline-none focus:ring-2 focus:ring-[color:var(--lavender)]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-foreground placeholder-foreground/55 focus:outline-none focus:ring-2 focus:ring-[color:var(--lavender)] resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="w-full rounded-full border border-primary bg-white px-8 py-4 text-xs font-bold tracking-wider text-primary uppercase transition-all duration-300 hover:bg-primary hover:text-white hover:border-white shadow-soft"
                >
                  QUERO AGENDAR MINHA AULA AGORA
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="border-t border-primary/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-foreground/60 md:flex-row">
        <div className="flex items-baseline gap-1">
          <span className="font-serif italic text-primary text-base">Renata</span>
          <span className="text-script text-primary/80 text-base">Freitas</span>
          <span className="ml-2 text-xs tracking-widest uppercase">Studio</span>
        </div>
        
        <p className="order-3 md:order-2 text-center md:text-left">
          © {new Date().getFullYear()} Studio Renata Freitas · Cambuí, Campinas
        </p>

        <div className="order-2 md:order-3 flex items-center gap-4">
          <a
            href="https://www.instagram.com/studiorenatafreitas/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-[#E1306C] transition-colors p-2 rounded-full hover:bg-[color:var(--lavender-soft)]"
            title="Siga no Instagram"
            aria-label="Siga no Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/studiorenatafreitas"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-[#1877F2] transition-colors p-2 rounded-full hover:bg-[color:var(--lavender-soft)]"
            title="Siga no Facebook"
            aria-label="Siga no Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ UTIL ------------------------------ */
function FadeUp({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
  key?: React.Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

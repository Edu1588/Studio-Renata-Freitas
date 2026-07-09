import React from "react";
import { Nav, Footer } from "./StudioSite";
import { motion } from "motion/react";

export function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav withBanner />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Política de Privacidade</h1>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              A sua privacidade é importante para nós. É política do Studio Renata Freitas respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
            </p>
            
            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Coleta de Dados</h2>
            <p>
              Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
            </p>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Uso de Informações</h2>
            <p>
              Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Compartilhamento</h2>
            <p>
              Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. Seus Direitos</h2>
            <p>
              Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados. O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
            </p>

            <p className="mt-8 text-sm text-foreground/60">
              Esta política é efetiva a partir de {new Date().getFullYear()}.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

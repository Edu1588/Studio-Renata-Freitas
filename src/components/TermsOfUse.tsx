import React from "react";
import { Nav, Footer } from "./StudioSite";
import { motion } from "motion/react";

export function TermsOfUse() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav withBanner />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Termos de Uso</h1>
          
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ao site Studio Renata Freitas, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
            </p>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Studio Renata Freitas, apenas para visualização transitória pessoal e não comercial.
            </p>
            <p>
              Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais.</li>
            </ul>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site do Studio Renata Freitas são fornecidos 'como estão'. O Studio não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual.
            </p>

            <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. Limitações</h2>
            <p>
              Em nenhum caso o Studio Renata Freitas ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
            </p>

            <p className="mt-8 text-sm text-foreground/60">
              Estes termos são efetivos a partir de {new Date().getFullYear()}.
            </p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

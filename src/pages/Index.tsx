import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, ArrowDown, Plus } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/4ba08d45-ca97-4027-9bc4-2779e7baf9ba.png" alt="Agroxeque Logo" className="h-12 w-auto" />
          </div>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
            Criar Conta Gratuita
          </Button>
        </div>
      </header>

      {/* Dobra 1: O Impacto Imediato */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hexagon-pattern"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-slate-950">Para nós, cada hectare importa!</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-xl">
            Aqui você pode monitorar, analisar e intervir em cada hectare, de forma única e independente, com rapidez e facilidade.<br />
            Essa é nossa missão, bem-vindo à Agroxeque!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Experimente Grátis Agora
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg">
              Ver Demonstração
            </Button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img src="/lovable-uploads/48622e90-305e-40a4-9983-17ae759a089d.png" alt="Farmer with agricultural chessboard" className="w-full rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Dobra 2: A Dor e a Promessa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sua Lavoura Guarda Segredos que <span className="text-red-600">Custam Caro</span>!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Enquanto você toma decisões no escuro, a Agroxeque revela dados valiosos sobre o potencial escondido dentro de cada talhão.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-xl">×</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Diagnósticos Imprecisos</h3>
                  <p className="text-gray-600 text-left">Percorre vários pontos do talhão e ainda sai com mais dúvidas do que respostas?</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-xl">×</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Desperdício de Insumos</h3>
                  <p className="text-gray-600">Aplicação uniforme quando deveria ser localizada</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-xl">×</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Limitações de Satélite</h3>
                  <p className="text-gray-600">Desanimado com tantas nuvens escondendo a imagem do satélite que passou semana passada?</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/0cda620c-c0da-44c5-88e3-c4731b0c82e4.png" alt="Agricultural fields as chessboard" className="w-full rounded-lg shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 3: Como Funciona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Agricultura Digital há Poucos Passos, com <span className="text-green-600">Poucos Cliques</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Da captura de imagens até a aplicação em campo - processo simples, resultados extraordinários</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[{
            number: "1",
            title: "Capture as Imagens",
            desc: "Faça upload das imagens do seu drone RGB convencional"
          }, {
            number: "2",
            title: "Processamento Automático",
            desc: "Obtenha Automaticamente Ortofoto, MDS, Índice de Vegetação e Relatório"
          }, {
            number: "3",
            title: "Analise com Dados Concretos",
            desc: "Acesse o \"Ranking de Células\" para verificar a condição de cada hectare"
          }, {
            number: "4",
            title: "Prescrição com Liberdade",
            desc: "Gere Mapas de Prescrição Flexíveis, perfeitos para maquinário Terrestre ou Drones"
          }, {
            number: "5",
            title: "Execute com Xeque-Map",
            desc: "Use nosso app móvel para navegação e aplicação em campo"
          }].map((step, index) => <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
                {index < 4 && <ArrowDown className="w-6 h-6 text-green-600 mx-auto mt-4 md:hidden" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Dobra 4: Diferencial Chave */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Qual é seu melhor hectare?</span>
            </h2>
          </div>
          
          <div className="space-y-20">
            {/* Ranking de Células */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Descubra com a Agroxeque</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Nossa exclusiva tecnologia de ranking classifica cada célula individualmente, 
                  da melhor (1) à pior (n). Isso permite vistorias direcionadas, otimização de 
                  recursos e decisões baseadas em dados precisos para cada metro da sua lavoura.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Identificação clara das melhores e piores regiões</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Vistorias direcionadas e eficientes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>Base científica para todas as decisões</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img src="/lovable-uploads/fa31a42f-50c4-42b8-9157-642aa72e9733.png" alt="MAP interface with cell ranking" className="w-full rounded-lg shadow-xl" />
              </div>
            </div>
            
            {/* Prescrições Flexíveis */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Prescrições Realmente Inteligentes
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Três tipos de prescrição para máxima flexibilidade: taxa variável total, 
                  catações localizadas, ou sistema híbrido que combina ambos conforme sua necessidade.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Taxa Variável Total</h4>
                    <p className="text-green-700 text-sm">Aplicação diferenciada em toda área</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Catações Localizadas</h4>
                    <p className="text-blue-700 text-sm">Tratamento apenas de pontos específicos</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Sistema Híbrido</h4>
                    <p className="text-purple-700 text-sm">Combinação inteligente dos dois métodos</p>
                  </div>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img src="/lovable-uploads/ebcc0c15-2421-452f-9635-c8c4bbe8d82c.png" alt="Hexagonal cells pattern" className="w-full rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 5: Benefícios Tangíveis */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Com Agroxeque, Sua Agricultura <span className="text-green-600">Sobe de Nível</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            title: "Redução de Custos",
            desc: "Até 16% menos gastos com insumos através de aplicação localizada",
            icon: "💰"
          }, {
            title: "Aumento de Produtividade",
            desc: "Até 5 sacos a mais por hectare com manejo direcionado",
            icon: "📈"
          }, {
            title: "Vistorias Eficientes",
            desc: "Tempo de campo reduzido com direcionamento preciso",
            icon: "🎯"
          }, {
            title: "Decisões Inteligentes",
            desc: "Base de dados científica para todas as escolhas",
            icon: "🧠"
          }, {
            title: "Uso Otimizado do Maquinário",
            desc: "Aplicação apenas onde necessário",
            icon: "🚜"
          }, {
            title: "Manejo Fitossanitário Estratégico",
            desc: "Tratamento preventivo nas áreas críticas",
            icon: "🌱"
          }].map((benefit, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Dobra 6: Público-Alvo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ideal para Quem Busca <span className="text-green-600">Precisão e Resultados</span> no Campo
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agricultores Inovadores</h3>
              <p className="text-gray-600">
                Produtores que buscam tecnologia para otimizar recursos, maximizar lucros e 
                estar na vanguarda da agricultura digital.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultores Agrícolas</h3>
              <p className="text-gray-600">
                Profissionais que querem oferecer análises diferenciadas e recomendações 
                precisas baseadas em dados científicos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Gerentes de Fazendas</h3>
              <p className="text-gray-600">
                Gestores que necessitam de ferramentas para monitoramento eficaz e 
                gestão inteligente de grandes áreas produtivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 7: Modelo de Créditos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pague Apenas Pelo Que Usar – <span className="text-green-600">Sem Surpresas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modelo on-demand que se adapta ao seu ritmo. Cadastro gratuito, 
              créditos por hectare processado e descontos progressivos.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    0
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cadastro Gratuito</h3>
                  <p className="text-gray-600">Comece sem custo inicial. Teste a plataforma e veja os resultados.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    <Plus />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Créditos por Projeto</h3>
                  <p className="text-gray-600">Pague apenas pelos hectares processados. Transparência total no investimento.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    %
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Desconto Progressivo</h3>
                  <p className="text-gray-600">Quanto mais usar, mais economiza. Pacotes maiores com melhor custo-benefício.</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Conheça Nossos Pacotes de Créditos
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dobra 8: Prova Social */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Veja o Que Dizem <span className="text-green-600">Nossos Usuários</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "Utilizando a Agroxeque, conseguimos melhorar o aproveitamento e o vigor da nossa semente, 
                  identificando áreas mais prejudicadas e realizando a colheita delas separadamente. 
                  Assim, destinamos para semente apenas a produção de áreas sem histórico de avarias ou reboleiras."
                </p>
                <div className="font-semibold text-gray-900">Márcia Soares</div>
                <div className="text-green-600 text-sm">Sementes Planura</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "Reduzimos em cerca de 16% o custo por hectare com herbicidas na dessecação."
                </p>
                <div className="font-semibold text-gray-900">Antônio Basílio</div>
                <div className="text-green-600 text-sm">Fazenda Mata do Cedro</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "Na média, colhemos quase 5 sacos de sorgo a mais por hectare, nos talhões onde fizemos 
                  aplicação localizada de nitrogênio com doses de reforço, utilizando a Agroxeque para 
                  gerar as recomendações e os mapas."
                </p>
                <div className="font-semibold text-gray-900">Matheus Grossi</div>
                <div className="text-green-600 text-sm">Fazenda Lavrinha</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "Gasto muito mais tempo pra percorrer e avaliar os talhões dos clientes que não usam 
                  a Agroxeque, e ainda saio de lá com uma visão vaga e subjetiva."
                </p>
                <div className="font-semibold text-gray-900">José Carlos Siqueira</div>
                <div className="text-green-600 text-sm">ZK Agro Consultoria</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dobra 9: Chamada Final */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Desbloquear o Potencial Máximo da Sua Lavoura?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se à vanguarda da agricultura digital. Transforme dados em decisões, 
            hectares em lucros e sua fazenda em um case de sucesso.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
            Crie Sua Conta Gratuita Agora
          </Button>
          <p className="mt-4 text-sm opacity-75">
            Sem compromisso • Teste grátis • Suporte especializado
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/lovable-uploads/4ba08d45-ca97-4027-9bc4-2779e7baf9ba.png" alt="Agroxeque Logo" className="h-10 w-auto mr-4" />
              <div>
                <div className="text-sm opacity-75">© 2024 Agroxeque - Agricultura Digital</div>
                <div className="text-sm opacity-75">Todos os direitos reservados</div>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-green-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-green-400 transition-colors">Termos</a>
              <a href="#" className="hover:text-green-400 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;

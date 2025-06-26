import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, ArrowDown, Plus, Crown } from "lucide-react";
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
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="hexagon-pattern"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-slate-950">Para nós, cada hectare importa!</span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg md:text-xl">
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sua Lavoura Guarda Segredos que <span className="text-red-600">Valem Ouro</span>!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Enquanto você toma decisões no escuro, a Agroxeque revela dados valiosos sobre o potencial escondido dentro de cada talhão.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                  <p className="text-gray-600">Cansado de avaliar o NDVI das nuvens ao invés da cultura?</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/lovable-uploads/95bed2e3-3e94-49df-9f3d-518692e6c4c0.png" alt="Chess pieces on agricultural field" className="w-full rounded-lg shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 3: Como Funciona */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Agricultura Digital há Poucos Passos, com <span className="text-green-600">5 Passos Simples</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">Transforme Dados em Lucro, através de 5 Passos Simples</p>
            
          </div>
          
          <div className="grid md:grid-cols-5 gap-6 md:gap-8">
            {[{
            number: "1",
            title: "Capture as Imagens",
            desc: "Faça o upload das imagens obtidas com seu próprio drone"
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
            desc: "Gere Mapas de Prescrição Flexíveis, perfeitos para maquinário ou Drones"
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Qual é seu melhor hectare?</span>
            </h2>
          </div>
          
          <div className="space-y-12 md:space-y-20">
            {/* Ranking de Células */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Descubra com a Agroxeque</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">Nossa exclusiva tecnologia de &quot;Ranking&quot; classifica cada célula numericamente, ordenando-as da melhor à pior. Isso permite vistorias direcionadas, otimização de recursos e decisões baseadas em informações, ao invés de impressões.</p>
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
              <div className="relative flex justify-center">
                <img src="/lovable-uploads/7bf07b2d-9a2a-4ee8-acb1-8c29dedcc540.png" alt="Ranking de Células interface" className="w-2/3 rounded-lg shadow-xl" />
              </div>
            </div>
            
            {/* Nova Seção - Citação Bíblica */}
            <section className="py-8 md:py-12 bg-green-700">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                  "Assim também a fé, se não tiver obras, é morta em si mesma." Ti 2:17
                </h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-white text-base md:text-lg leading-relaxed">Acreditamos que o resultado depende da ação, e não da informação. Por isso, nossas soluções vão muito além da detecção de anomalias na lavoura. Agroxeque é a ferramenta ideal para você gerar prescrições de forma pontual e específica, tratando os problemas apenas onde de fato eles existem.</p>
                </div>
              </div>
            </section>
            
            {/* Prescrições Flexíveis */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mesmo Talhão, Necessidades Diferentes</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">Defina para cada célula individualmente ou em grupo, um tipo de tratamento único ou uma dose específica, de forma  independente.</p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800">Taxa Variável em Área Total</h4>
                    <p className="text-green-700 text-sm">Aplicação com doses independentes ao longo de toda área</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Catações Localizadas</h4>
                    <p className="text-blue-700 text-sm">Aplicação Binária (aplicar/não aplicar) tratando apenas células selecionadas</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Mapa Híbrido</h4>
                    <p className="text-purple-700 text-sm">Agrupamento de células, formando zonas binárias de aplicação, variando as doses ou tratamento dentro de uma zona.</p>
                  </div>
                </div>
              </div>
              <div className="md:order-1 relative">
                <img alt="Hexagonal cells pattern" className="w-full rounded-lg shadow-xl" src="/lovable-uploads/30573fd0-4e62-4cbd-9fa2-e19e75727003.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 5: Benefícios Tangíveis */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Uma Plataforma Única, com <span className="text-green-600">Múltiplos Benefícios</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[{
            title: "Redução de Custos",
            desc: "Até 75% menos gastos com alguns insumos através de aplicação localizada",
            icon: "💰"
          }, {
            title: "Aumento de Produtividade",
            desc: "Identifique rapidamente pontos problemáticos e recupere o vigor em tempo hábil",
            icon: "📈"
          }, {
            title: "Vistorias Eficientes",
            desc: "Tempo de campo reduzido com inspeções direcionadas e visitas menos frequentes",
            icon: "🎯"
          }, {
            title: "Decisões Inteligentes",
            desc: "Base de dados geoestatística para todas as escolhas",
            icon: "🧠"
          }, {
            title: "Uso Otimizado do Maquinário",
            desc: "Aplicações localizadas geram operações mais curtas",
            icon: "🚜"
          }, {
            title: "Manejo Fitossanitário Estratégico",
            desc: "Economicamente viável e Ecologicamente sustentável",
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
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ideal para Quem Busca <span className="text-green-600">Tomar Decisões Assertivas</span> no Campo
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agricultores Inovadores</h3>
              <p className="text-gray-600">Produtores que buscam tecnologia para otimizar recursos, maximizar lucros e tornar a sua atividade agrícola mais eficiente.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultores Agrícolas</h3>
              <p className="text-gray-600">Profissionais que querem obter dados preciosos e oferecer relatórios diferenciados e recomendações precisas baseadas em dados científicos.</p>
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pague Apenas Pelo Que Usar – <span className="text-green-600">Sem Surpresas</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Modelo sob-demanda que se adapta ao tamanho do seu negócio. Cadastro gratuito, cobrança por hectare processado, com preço justo e descontos progressivos.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
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
                
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Dobra 8: Pacotes de Créditos */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="hexagon-pattern"></div>
        </div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20 blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Pacotes de Créditos</span> que se encaixam no seu negócio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Escolha uma combinação de pacotes que melhor se adequa à sua demanda e frequencia de uso.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4 max-w-2xl mx-auto border border-green-200">
              <p className="text-base md:text-lg font-semibold text-green-800">
                Pagamento com PIX ou cartão de crédito. Parcele seus pacotes em até 6 x sem juros!
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-200">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">10 Créditos</h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-green-600">R$ 8,90</span>
                  <span className="text-gray-600 text-sm block">/hectare</span>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-gray-800">R$ 89,00</p>
                  <p className="text-sm text-gray-600">Em até 6 x de R$ 14,83</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-200">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">50 Créditos</h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-green-600">R$ 6,98</span>
                  <span className="text-gray-600 text-sm block">/hectare</span>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-gray-800">R$ 349,00</p>
                  <p className="text-sm text-gray-600">Em até 6 x de R$ 58,17</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-3 border-gradient-to-r from-yellow-400 to-orange-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-lg mx-0 my-0 py-[10px] px-[2px]">
                  <Crown className="w-4 h-4 fill-current" />
                  Mais Vendido
                </div>
              </div>
              <CardContent className="p-6 md:p-8 text-center pt-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">100 Créditos</h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-green-600">R$ 5,49</span>
                  <span className="text-gray-600 text-sm block">/hectare</span>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-gray-800">R$ 549,00</p>
                  <p className="text-sm text-gray-600">Em até 6 x de R$ 91,50</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-green-200">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">200 Créditos</h3>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-green-600">R$ 4,89</span>
                  <span className="text-gray-600 text-sm block">/hectare</span>
                </div>
                <div className="mb-6 space-y-2">
                  <p className="text-lg md:text-xl font-semibold text-gray-800">R$ 978,00</p>
                  <p className="text-sm text-gray-600">Em até 6 x de R$ 163,00</p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                  Escolher Pacote
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 inline-block border border-green-100 shadow-sm">
              <p className="text-gray-600 text-sm font-medium">* 1 crédito = 1 hectare ou 100 MB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dobra 9: Prova Social */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja o Que Dizem <span className="text-green-600">Nossos Usuários</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">&quot;Utilizando a Agroxeque, conseguimos melhorar o aproveitamento e o vigor da nossa semente, identificando áreas mais prejudicadas e realizando a colheita delas separadamente. Assim, destinamos para semente apenas a produção de áreas sem ocorrência de avarias e longe de reboleiras.&quot;</p>
                <div className="font-semibold text-gray-900">Márcia Soares</div>
                <div className="text-green-600 text-sm">Sementes Planura</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">&quot;Reduzimos em cerca de 18% o custo com herbicidas na dessecação.&quot;</p>
                <div className="font-semibold text-gray-900">Antônio Basílio</div>
                <div className="text-green-600 text-sm">Fazenda Mata do Cedro</div>
                <div className="text-gray-500 text-xs">Presidente Olegário - MG</div>
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
                <div className="text-gray-500 text-xs">Serra do Salitre - MG</div>
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
                <div className="text-gray-500 text-xs">Franca - SP</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dobra 10: Chamada Final */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Desbloquear o Potencial Máximo da Sua Lavoura?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Junte-se à vanguarda da agricultura digital. Transforme dados em decisões, 
            hectares em lucros e sua fazenda em um case de sucesso.
          </p>
          <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 md:px-12 py-4 text-base md:text-lg font-semibold">
            Crie Sua Conta Gratuita Agora
          </Button>
          <p className="mt-4 text-sm opacity-75">
            Sem compromisso • Teste grátis • Suporte especializado
          </p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
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
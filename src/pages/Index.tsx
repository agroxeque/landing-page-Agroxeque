import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Users, ArrowDown, Plus, Crown } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  // Estado para controlar a rotação das imagens
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array com as três imagens para rotação
  const rotatingImages = [
    "/lovable-uploads/d8064e8f-eb57-44e4-a6c3-a5305a61e286.png",
    "/lovable-uploads/01005b75-72ca-405b-bf36-b9a86167f5d0.png",
    "/lovable-uploads/55fc5e86-51f1-47bd-a19c-685bb7aa7f08.png"
  ];

  // Effect para rotacionar as imagens a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % rotatingImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

      {/* Dobra 1: O Impacto Imediato - Hero Section com Novo Background */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/BG_Hero.jpg')`,
          aspectRatio: '16/9',
          minHeight: '85vh'
        }}
      >
        {/* Overlay para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black/22"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full py-2 space-y-4">
          {/* Texto superior */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              <span className="text-white">Para nós, cada hectare importa!</span>
            </h1>
            <p className="text-white max-w-3xl mx-auto mb-6 leading-relaxed text-lg md:text-xl drop-shadow-md">
              Aqui você pode monitorar, analisar e intervir em cada hectare, de forma única e independente, com rapidez e facilidade.
            </p>
          </div>
          
          {/* Vídeo centralizado - SEM MOLDURA */}
          <div className="w-full max-w-2xl">
            <video 
              src="/Hero_Compress.mp4" 
              className="w-full h-auto rounded-lg shadow-lg" 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ aspectRatio: '16/9' }}
            />
          </div>
          
          {/* Botões na parte inferior */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg">
                Experimente Grátis Agora
              </Button>
              <Button variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg shadow-lg">
                Ver Demonstração
              </Button>
            </div>
            <p className="text-sm text-white/80">
              Sem compromisso • Teste grátis • Suporte especializado
            </p>
          </div>
        </div>
      </section>

      {/* Dobra 2: A Dor e a Promessa */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sua Lavoura Guarda Segredos que <span className="text-amber-500">Valem Ouro</span>!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">A Agroxeque revela dados preciosos para você explorar o potencial escondido dentro de cada talhão.</p>
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
                  <p className="text-gray-600">Tratamento em área total mesmo quando o problema é pontual</p>
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
              <img 
                src={rotatingImages[currentImageIndex]} 
                alt="Agricultural field views" 
                className="w-full rounded-lg shadow-xl transition-opacity duration-500" 
              />
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
              Transformando Dados em Lucro, com estes <span className="text-green-600">5 Passos Simples</span>
            </h2>
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
            title: "Análise com Dados Concretos",
            desc: "Avalie cada célula do talhão, para entender sua real condição"
          }, {
            number: "4",
            title: "Prescrição com Liberdade",
            desc: "Gere Mapas de Prescrição Flexíveis, perfeitos para maquinário ou Drones"
          }, {
            number: "5",
            title: "Mãos à Obra com Xeque-Map",
            desc: "Use nosso app móvel para navegação e operação de campo"
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
        
        {/* Container de texto com largura total e fundo verde */}
        <div className="w-full bg-green-100 py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-base text-gray-700 max-w-4xl mx-auto font-bold py-0 md:text-lg px-0">
                Hoje em dia os drones são muito populares e acessíveis.
                <br />
                A Agroxeque é a ponte que liga seu drone às ações práticas de manejo, tornando-o realmente útil
              </p>
            </div>
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
              <div className="relative flex justify-center">
                <img src="/lovable-uploads/7bf07b2d-9a2a-4ee8-acb1-8c29dedcc540.png" alt="Ranking de Células interface" className="w-2/3 rounded-lg shadow-xl" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Descubra com a Agroxeque</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">Nossa exclusiva tecnologia de &quot;Ranking&quot; classifica cada célula numericamente, ordenando-as da melhor à pior. Isso otimiza as visitas presenciais, destacando os pontos que requerem mais atenção e permite quantificar a área com uma determinada característica. Dessa forma, você toma decisões mais assertivas, baseando-se em informações, ao invés de impressões.</p>
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
                    <span>Imagens nítidas e no momento que você precisa</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Nova Seção - Citação Bíblica */}
            <section className="py-8 bg-green-700 md:py-[33px]">
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
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mesmo Talhão, Necessidades Diferentes</h3>
              <p className="text-base md:text-lg text-gray-600 max-w-6xl mx-auto">Defina uma dose ou tratamento específico para cada célula individualmente ou em grupo, de acordo com a necessidade de cada uma</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800">Taxa Fixa</h4>
                  <p className="text-orange-700 text-sm">Recomendações gerais mais precisas, apoiadas em análise de dados concretos, sob uma visão detalhada e abrangente do talhão.</p>
                </div>
              </div>
              <div className="relative">
                <img alt="Hexagonal cells pattern" className="w-full rounded-lg shadow-xl" src="/lovable-uploads/30573fd0-4e62-4cbd-9fa2-e19e75727003.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção - Xeque-Map */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Xeque-Map: <span className="text-green-600">Seu Plano de Ação na Palma da Mão</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <video 
                src="/Video_Xeque_Map.mp4" 
                className="w-full h-64 md:h-80 rounded-lg shadow-xl object-contain bg-gray-100" 
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>
            <div>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Xeque-Map é o aplicativo de navegação offline da Agroxeque. Ele carrega e exibe os mapas gerados na plataforma principal, permitindo que você se oriente dentro do talhão, enquanto se desloca por ele.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Realize avaliações presenciais direcionadas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Colete amostras de pontos estratégicos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Aplique tratamentos localizados</span>
                </li>
              </ul>
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
            desc: "Base de dados geoestatística para definição do manejo correto",
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
              <p className="text-gray-600">Produtores que precisam de ferramentas para otimizar recursos, maximizar lucros e tornar a sua atividade agrícola mais eficiente.</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Consultores Agrícolas</h3>
              <p className="text-gray-600">Profissionais que desejam utilizar dados inacessíveis aos olhos, para gerar prescrições precisas, de qualquer lugar onde estejam</p>
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
                  <p className="text-xs text-gray-500">Sem acréscimos</p>
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
                  <p className="text-xs text-gray-500">Sem acréscimos</p>
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
                  <p className="text-xs text-gray-500">Sem acréscimos</p>
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
                  <p className="text-xs text-gray-500">Sem acréscimos</p>
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
              Veja o Que Dizem <span className="text-green-600">Nossos Clientes</span>
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
                <div className="font-semibold text-gray-900">Geraldo Basílio</div>
                <div className="text-green-600 text-sm">Fazenda Rio da Prata</div>
                <div className="text-gray-500 text-xs">João Pinheiro - MG</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">
                  "Na média, colhemos quase 5 sacos de sorgo a mais por hectare, nos talhões onde fizemos 
                  aplicação localizada de nitrogênio com doses de reforço, utilizando a Agroxeque para 
                  gerar as recomendações e os mapas."
                </p>
                <div className="font-semibold text-gray-900">Gustavo Grossi</div>
                <div className="text-green-600 text-sm">Fazenda Lavrinha</div>
                <div className="text-gray-500 text-xs">Serra do Salitre - MG</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <p className="text-gray-600 mb-4 italic">"Gasto muito mais tempo pra percorrer e avaliar os talhões dos clientes que não usam a Agroxeque, e ainda saio de lá com uma visão vaga e subjetiva. Depois que a gente acostuma, fica até difícil avaliar uma lavoura sem o mapa de ranking"</p>
                <div className="font-semibold text-gray-900">José Carlos Siqueira</div>
                <div className="text-green-600 text-sm">ZK Agro Consultoria</div>
                <div className="text-gray-500 text-xs">Franca - SP</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nova Seção FAQ */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-green-600">Frequentes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Tire suas dúvidas sobre a Agroxeque e descubra como nossa plataforma pode transformar o manejo da sua lavoura</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="culturas" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Quais tipos de culturas posso monitorar com a Agroxeque?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  A Agroxeque foi projetada para ser flexível e pode ser utilizada para monitorar uma ampla variedade de culturas agrícolas: Soja, milho, Sorgo, trigo, Algodão, café, cana-de-açúcar, batata, tomate, fruticultura em geral, enfim... a plataforma permite um monitoramento detalhado de qualquer tipo de plantio. Com as imagens de alta resolução e os demais produtos digitais disponíveis na Agroxeque, você consegue acompanhar o desenvolvimento das suas plantas em qualquer estágio, facilitando a identificação de problemas e a tomada de decisões para otimizar a produção.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="drones" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Quais modelos de drone posso utilizar?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Na verdade, você pode usar qualquer drone que seja capaz de realizar mapeamento aéreo autônomo. Existem drones profissionais, projetados especificamente para mapeamentos, que apresentam como vantagem um alto rendimento operacional, porém com um custo mais alto. No entanto, existe uma linha de drones não profissionais, mas muito populares por apresentarem uma boa qualidade de câmera e segurança de operação, com ótimo custo benefício para esta finalidade. Dentre eles, os mais utilizados são os da linha DJI (DJI Air 2S, DJI mini 3, DJI mini 4 e DJI Air 3), mas podem ser utilizados outros modelos da marca, inclusive, modelos de outras marcas também. O mais importante é se certificar que seu drone tenha compatibilidade com softwares de mapeamento (que criam os planos de vôo autônomos), como Dronelink ou Drone Harmony.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="equipamentos" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Preciso de equipamentos específicos para utilizar as prescrições geradas na Agroxeque?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Não necessariamente. As prescrições geradas pela Agroxeque são extremamente versáteis. Se você possui maquinário moderno com sistemas de aplicação por taxa variável, poderá exportar as prescrições geradas em ShapeFile ou KML, e utilizar estes mapas diretamente no seu monitor. Por outro lado, caso você não possua este tipo de equipamento, você pode exportar as prescrições geradas para o aplicativo móvel "Xeque-Map" e utilizá-lo para navegação com seu maquinário. O aplicativo irá carregar o mapa e permitir que você se oriente dentro desta prescrição, auxiliando na aplicação binária (aplica/não aplica) e taxas variáveis com poucas doses, onde você poderia alterar de forma manual a dose do produto aplicado, verificando a mudança de zona pela tela do aplicativo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cadastro" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Como faço para cadastrar um talhão?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Este é um processo bastante simples, que é realizado em poucos segundos. Você precisa apenas informar à qual fazenda o talhão pertence, inserir o nome de identificação do talhão, selecionar o formato da grade (malha de células) que prefere utilizar, além de definir também o tamanho das células que compõem a malha. Por fim, você deve subir um arquivo de polígono, em formato kml ou kmz, referente à delimitação deste talhão. Caso ainda não tenha este arquivo de polígono, você pode gerá-lo facilmente de várias formas, inclusive pelo Google Earth.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ranking" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  O que exatamente é o "Ranking de células"?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Nossa exclusiva tecnologia de ranking de células, consiste em aplicar sobre o talhão, uma malha virtual, com tamanho e formato personalizados. O processamento automatizado Agroxeque, irá extrair várias informações referentes à cultura presente dentro da região de cada célula, atribuindo uma espécie de nota para cada uma, e em seguida classificar e ordenar todo o conjunto. Assim, se seu talhão possui 75 células, o sistema irá definir como célula 1, aquela que está posicionada sobre a cultura com o melhor nível de desenvolvimento naquele talhão, e 75 seria a onde a cultura apresenta a pior condição de desenvolvimento, em comparação com as demais células.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="limites" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Qual o limite de área e imagens para cada projeto de processamento?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Um projeto deve conter entre 2 e 100 hectares, e um limite máximo de 1.000 imagens. Caso seu talhão exceda este limite, você pode dividir o talhão em 2 ou mais partes, cadastrando-o como por exemplo: "Pivô 7 lado A" e "Pivô 7 lado B", o que irá reduzir também o número de imagens geradas em cada projeto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="computador" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Preciso de um computador potente para utilizar a plataforma AgroXeque?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Não. E essa é uma das grandes vantagens da nossa plataforma! Todo o processamento pesado das imagens (a criação da ortofoto e dos modelos digitais) é realizado em servidores cloud de alta performance, não no seu computador.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="creditos" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  E se as imagens que eu enviei apresentarem algum erro em seu processamento? Perco meus créditos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Alguns parâmetros errados no planejamento do vôo, defeitos na câmera ou até mesmo sujeira na lente, podem causar imperfeições em algumas imagens, provocando erros no ortomosaico gerado. Nestes casos, você pode abrir uma solicitação de revisão de projeto, dentro de um prazo estabelecido. Caso seja constatado pela nossa equipe, que os arquivos gerados estejam de fato corrompidos, o total de créditos consumidos naquele projeto será creditado em sua conta, pra que possa realizar uma nova aquisição de imagens e criar um novo projeto do zero, sem precisar gastar mais créditos para isso. Mas atenção: Você não pode enviar as mesmas imagens novamente. Este reembolso só é válido para que você faça um novo mapeamento, com parâmetros de voo mais rigorosos, garantindo que o segundo processamento seja realizado com sucesso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="offline" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  O aplicativo Xeque-Map funciona offline?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Sim! O Xeque-Map foi desenvolvido pensando na realidade do campo, onde normalmente a conexão com a internet é instável ou inexistente. O funcionamento é simples: Enquanto estiver conectado (em casa, no escritório, ou em uma área com sinal), você abre o aplicativo e faz o download dos mapas de prescrição que deseja usar, para memória do seu smartphone ou tablet. Uma vez no campo, mesmo sem qualquer sinal de internet, o aplicativo usará o GPS do seu aparelho (que não precisa de internet) para permitir sua navegação dentro dos polígonos e das células de manejo que você criou na plataforma.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pontos-controle" className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  Preciso coletar pontos de controle para o levantamento aéreo do meu projeto?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                  Não. Os pontos de controle aumentam bastante a precisão dos modelos gerados e por isso são fundamentais em projetos relacionados à cartografia, topografia e agrimensura. Na Agroxeque, nosso foco é 100% direcionado para agricultura, portanto a margem de erro alcançada nos levantamentos sem pontos de controle (normalmente entre 2 e 5 metros de acurácia) é plenamente satisfatória para a finalidade que será empregada através dos mapas gerados.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

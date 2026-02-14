import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  MessageSquare, 
  MousePointer, 
  Star, 
  TrendingUp, 
  Users, 
  Eye,
  ShoppingCart,
  Smartphone,
  Award,
  AlertCircle,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b-4 border-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container relative py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary text-primary-foreground border-0 px-4 py-1.5 text-sm font-bold">
                ANÁLISE COMPLETA 2026
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Diesel Brasil
                <span className="block text-primary mt-2">UX/UI Análise</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Análise profunda de estratégias de comunicação, usabilidade e experiência do usuário do e-commerce de moda premium.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-0 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setActiveTab("communication")}
                >
                  Ver Análise Completa
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-black font-bold hover:bg-black hover:text-white transition-all"
                  asChild
                >
                  <a href="https://br.diesel.com/" target="_blank" rel="noopener noreferrer">
                    Visitar Site
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="brutalist-border-red bg-card p-8 transform hover:translate-x-1 hover:translate-y-1 transition-transform">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Pontuação Geral</h3>
                    <Star className="h-8 w-8 text-primary fill-primary" />
                  </div>
                  <div className="text-6xl font-bold text-primary">8.2/10</div>
                  <div className="space-y-3">
                    <ScoreBar label="Comunicação" score={8.5} />
                    <ScoreBar label="Usabilidade" score={8.0} />
                    <ScoreBar label="UX" score={8.0} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b-4 border-black bg-accent text-accent-foreground">
        <div className="container py-12">
          <div className="flex items-center justify-center">
            <span className="font-diesel text-4xl md:text-6xl font-bold tracking-[0.2em]">
              DIESEL
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="container py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent">
            <TabsTrigger 
              value="overview" 
              className="border-2 border-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-3"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="communication" 
              className="border-2 border-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-3"
            >
              Comunicação
            </TabsTrigger>
            <TabsTrigger 
              value="usability" 
              className="border-2 border-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-3"
            >
              Usabilidade
            </TabsTrigger>
            <TabsTrigger 
              value="ux" 
              className="border-2 border-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold py-3"
            >
              Experiência UX
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <OverviewContent />
          </TabsContent>

          <TabsContent value="communication" className="space-y-8">
            <CommunicationContent />
          </TabsContent>

          <TabsContent value="usability" className="space-y-8">
            <UsabilityContent />
          </TabsContent>

          <TabsContent value="ux" className="space-y-8">
            <UXContent />
          </TabsContent>
        </Tabs>
      </section>

      {/* Recommendations Section */}
      <section className="border-t-4 border-black bg-muted">
        <div className="container py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Recomendações Estratégicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RecommendationCard
              priority="Alta"
              title="Sistema de Reviews"
              description="Implementar avaliações de clientes com fotos nas páginas de produto para aumentar confiança."
              timeframe=""
            />
            <RecommendationCard
              priority="Alta"
              title="Busca Avançada"
              description="Adicionar funcionalidade de busca com autocompletar e sugestões inteligentes."
              timeframe=""
            />
            <RecommendationCard
              priority="Média"
              title="Personalização IA"
              description="Desenvolver sistema de recomendações baseado em histórico de navegação."
              timeframe=""
            />
            <RecommendationCard
              priority="Média"
              title="Comparação de Produtos"
              description="Permitir comparação lado a lado de itens similares."
              timeframe=""
            />
            <RecommendationCard
              priority="Baixa"
              title="Realidade Aumentada"
              description="Expandir provador virtual com tecnologia AR avançada."
              timeframe=""
            />
            <RecommendationCard
              priority="Baixa"
              title="Programa de Fidelidade"
              description="Criar sistema de pontos e benefícios exclusivos."
              timeframe=""
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-accent text-accent-foreground">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Análise UX/UI - Diesel Brasil</h3>
              <p className="text-sm opacity-80">Análise realizada em 12 de fevereiro de 2026</p>
            </div>
            <Button 
              variant="outline" 
              className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-bold"
              asChild
            >
              <a href="https://br.diesel.com/" target="_blank" rel="noopener noreferrer">
                Visitar br.diesel.com
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="text-primary">{score}/10</span>
      </div>
      <div className="h-3 bg-muted border-2 border-black">
        <div 
          className="h-full bg-primary transition-all duration-500" 
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="flex justify-center">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold">{value}</div>
      <div className="text-sm font-medium opacity-80">{label}</div>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-8">
      <Card className="brutalist-border p-8">
        <h3 className="text-3xl font-bold mb-6">Resumo</h3>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            O site da Diesel Brasil apresenta uma implementação sólida de e-commerce de moda premium, 
            equilibrando identidade de marca forte com funcionalidades práticas de usabilidade.
          </p>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="brutalist-border p-8">
          <div className="flex items-start gap-4 mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-4">Pontos Fortes</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Identidade de marca forte e consistente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Ferramentas inovadoras (provador virtual)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Navegação intuitiva com breadcrumb eficiente</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="brutalist-border p-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-2xl font-bold mb-4">Oportunidades</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Implementar sistema de reviews de clientes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Adicionar busca avançada com autocompletar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personalização baseada em comportamento</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}

function CommunicationContent() {
  const strategies = [
    {
      icon: <Eye />,
      title: "Identidade Visual e Branding",
      description: "Uso estratégico da cor vermelha vibrante, fotografia de alta qualidade e slogan 'For Successful Living' estabelecem posicionamento premium e atitude ousada."
    },
    {
      icon: <ShoppingCart />,
      title: "Proposta de Valor",
      description: "Destaque imediato para '5% OFF no Pix' demonstra compreensão do mercado brasileiro. Benefícios repetidos estrategicamente (parcelamento, troca grátis, entrega nacional)."
    },
    {
      icon: <Users />,
      title: "Segmentação",
      description: "Divisão clara por gênero (Masculino/Feminino) e categorias específicas (Denim, Footwear, Óculos). Tags 'NEW' e 'SALE' criam urgência e destacam oportunidades."
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="brutalist-border p-8">
        <h3 className="text-3xl font-bold mb-6">Estratégias de Comunicação</h3>
        <p className="text-lg leading-relaxed mb-8">
          O site da Diesel Brasil comunica de forma consistente a identidade da marca através de elementos 
          visuais e textuais estrategicamente posicionados. A paleta de cores é dominada pelo vermelho 
          vibrante característico da marca, que transmite energia, paixão e ousadia.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {strategies.map((strategy, index) => (
          <Card
            key={index}
            className={`brutalist-border p-6 hover:translate-x-1 hover:translate-y-1 transition-transform ${
              strategy.title === "Segmentação" ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary text-primary-foreground">
                {strategy.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold mb-3">{strategy.title}</h4>
                <p className="leading-relaxed">{strategy.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="brutalist-border p-6">
        <h4 className="text-xl font-bold mb-3">Oportunidades de Melhoria</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Explicitar benefícios chave em áreas de maior visibilidade (hero e topo das categorias)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Reduzir densidade de mensagens promocionais para reforçar clareza da proposta de valor</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}

function UsabilityContent() {
  return (
    <div className="space-y-8">
      <Card className="brutalist-border p-8">
        <h3 className="text-3xl font-bold mb-6">Análise de Usabilidade</h3>
        <p className="text-lg leading-relaxed">
          A estrutura de informação é lógica e hierárquica, com menu principal claro e categorias mutuamente 
          exclusivas. O sistema de breadcrumb oferece orientação contextual eficiente, permitindo que usuários 
          compreendam sua localização e naveguem facilmente entre níveis.
        </p>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="brutalist-border p-6">
          <h4 className="text-xl font-bold mb-4">Arquitetura de Informação</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Menu principal claro</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Breadcrumb eficiente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Revelação progressiva</span>
            </li>
          </ul>
        </Card>

        <Card className="brutalist-border p-6">
          <h4 className="text-xl font-bold mb-4">Fluxo de Compra</h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Informações essenciais visíveis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Provador virtual inovador</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">→</span>
              <span>Calculadora de frete integrada</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="brutalist-border p-6">
        <h4 className="text-xl font-bold mb-3">Oportunidades de Melhoria</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Destacar ações primárias com maior contraste em páginas de produto</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Reduzir passos e campos no checkout para diminuir atrito</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}

function UXContent() {
  return (
    <div className="space-y-8">
      <Card className="brutalist-border p-8">
        <h3 className="text-3xl font-bold mb-6">Experiência do Usuário</h3>
        <p className="text-lg leading-relaxed">
          A jornada do cliente é bem estruturada, com múltiplos pontos de entrada baseados em diferentes 
          intenções (exploração por novidade, busca por categoria, navegação por gênero). O funil de 
          conversão é otimizado através de elementos de persuasão equilibrados.
        </p>
      </Card>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="brutalist-border p-6">
            <div className="flex items-start gap-4">
              <Smartphone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-3">Elementos de Persuasão</h4>
                <ul className="space-y-2">
                  <li>• Tags "SALE" e "NEW" criam urgência</li>
                  <li>• Desconto visível (preço riscado)</li>
                  <li>• Cross-selling inteligente</li>
                  <li>• Wishlist para micro-conversões</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="brutalist-border p-6">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-3">Omnicanalidade</h4>
                <ul className="space-y-2">
                  <li>• WhatsApp para contato direto</li>
                  <li>• Integração online/offline</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="brutalist-border p-6">
        <h4 className="text-xl font-bold mb-3">Oportunidades de Melhoria</h4>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Melhorar feedbacks visuais em etapas críticas (carrinho e checkout)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Dar mais visibilidade a políticas de troca e prazos durante a decisão</span>
          </li>
        </ul>
      </Card>
    </div>
  );
}

function JourneyStep({ number, label, description }: { number: string; label: string; description: string }) {
  return (
    <div className="text-center space-y-2">
      <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center border-2 border-black">
        {number}
      </div>
      <div className="font-bold text-sm">{label}</div>
      <div className="text-xs text-muted-foreground">{description}</div>
    </div>
  );
}

function RecommendationCard({ 
  priority, 
  title, 
  description, 
  timeframe 
}: { 
  priority: string; 
  title: string; 
  description: string; 
  timeframe: string;
}) {
  const priorityColors = {
    "Alta": "bg-primary text-primary-foreground",
    "Média": "bg-accent text-accent-foreground",
    "Baixa": "bg-muted text-muted-foreground"
  };

  return (
    <Card className="brutalist-border p-6 hover:translate-x-1 hover:translate-y-1 transition-transform">
      <div className="flex items-start justify-between mb-4">
        <Badge className={`${priorityColors[priority as keyof typeof priorityColors]} border-0 font-bold`}>
          {priority}
        </Badge>
        <span className="text-sm text-muted-foreground">{timeframe}</span>
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p className="text-sm leading-relaxed">{description}</p>
    </Card>
  );
}

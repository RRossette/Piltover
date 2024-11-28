import * as React from 'react';
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import { Image, Upload, Download, Check } from "lucide-react";
/* LANDING */

const Index = () => {
  const features = [
    {
      icon: <Image className="w-6 h-6 mb-4" />,
      title: "Remoção de Fundo Automática",
      description: "IA avançada para remover fundos com precisão"
    },
    {
      icon: <Upload className="w-6 h-6 mb-4" />,
      title: "Edição em Massa",
      description: "Processe múltiplas imagens simultaneamente"
    },
    {
      icon: <Download className="w-6 h-6 mb-4" />,
      title: "Download Instantâneo",
      description: "Baixe suas imagens processadas imediatamente"
    }
  ];

  const plans = [
    {
      name: "Grátis",
      price: "R$ 0",
      features: ["10 imagens/mês", "Qualidade básica", "Suporte por email"],
    },
    {
      name: "Básico",
      price: "R$ 99,90",
      features: ["500 imagens/mês", "Alta qualidade", "Suporte prioritário"],
    },
    {
      name: "Pro",
      price: "R$ 499,90",
      features: ["5.000 imagens/mês", "API dedicada", "Suporte 24/7"],
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-5xl font-bold mb-6">ImageClearPro</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transforme suas imagens com IA avançada. Remova fundos automaticamente e otimize para e-commerce em segundos.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">
          Comece Gratuitamente
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Planos e Preços</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <Card key={index} className="relative">
              <CardHeader>
                <div className="text-3xl font-bold text-center text-purple-600 my-4">
                  {plan.price}
                  <span className="text-base font-normal text-gray-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">
                  Selecionar Plano
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Pronto para Começar?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de empresas que já transformam suas imagens com ImageClearPro
        </p>
        <Button>
          Criar Conta Grátis
        </Button>
      </section>
    </div>
  );
};

export default Index; 

"use client";

import { useState, useEffect } from 'react';

interface Message {
  id: number;
  sender: string;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

export default function ChatHistory() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Sample chat history - simulating previous conversation
    const sampleMessages: Message[] = [
      {
        id: 1,
        sender: "Tiago Vindima",
        text: "Olá! Como posso ajudá-lo hoje?",
        timestamp: new Date(Date.now() - 15 * 60000), // 15 minutes ago
        isOwn: false
      },
      {
        id: 2,
        sender: "Você",
        text: "Estou interessado em propriedades na área de Lisboa.",
        timestamp: new Date(Date.now() - 14 * 60000), // 14 minutes ago
        isOwn: true
      },
      {
        id: 3,
        sender: "Tiago Vindima",
        text: "Ótimo! Temos várias propriedades disponíveis em Lisboa. Que tipo de propriedade procura?",
        timestamp: new Date(Date.now() - 13 * 60000), // 13 minutes ago
        isOwn: false
      },
      {
        id: 4,
        sender: "Você",
        text: "Procuro um apartamento T2 ou T3.",
        timestamp: new Date(Date.now() - 12 * 60000), // 12 minutes ago
        isOwn: true
      },
      {
        id: 5,
        sender: "Tiago Vindima",
        text: "Perfeito! Vou preparar uma seleção de propriedades para si. Qual é o seu orçamento aproximado?",
        timestamp: new Date(Date.now() - 10 * 60000), // 10 minutes ago
        isOwn: false
      },
      {
        id: 6,
        sender: "Você",
        text: "Entre 300.000€ e 450.000€.",
        timestamp: new Date(Date.now() - 8 * 60000), // 8 minutes ago
        isOwn: true
      },
      {
        id: 7,
        sender: "Tiago Vindima",
        text: "Excelente! Vou enviar-lhe algumas opções nas próximas horas. Fique atento ao seu email.",
        timestamp: new Date(Date.now() - 5 * 60000), // 5 minutes ago
        isOwn: false
      }
    ];

    setMessages(sampleMessages);
  }, []);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 60000); // difference in minutes
    
    if (diff < 1) return 'agora';
    if (diff === 1) return 'há 1 minuto';
    if (diff < 60) return `há ${diff} minutos`;
    
    const hours = Math.floor(diff / 60);
    if (hours === 1) return 'há 1 hora';
    if (hours < 24) return `há ${hours} horas`;
    
    return date.toLocaleDateString('pt-PT', { 
      day: 'numeric', 
      month: 'short', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-black text-white p-4">
        <h2 className="text-xl font-semibold">Histórico de Conversa</h2>
        <p className="text-sm text-gray-300">Chat recente com Tiago Vindima</p>
      </div>
      
      <div className="p-4 space-y-3 max-h-96 overflow-y-auto" role="log" aria-label="Chat history">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isOwn
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              <p className="text-sm font-semibold mb-1">{message.sender}</p>
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.isOwn ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gray-50 p-4 border-t">
        <p className="text-sm text-gray-600 text-center">
          Para continuar a conversa, entre em contacto connosco
        </p>
      </div>
    </div>
  );
}

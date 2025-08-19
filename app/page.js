export default function Home() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24"
      style={{
        background: 'linear-gradient(135deg, #fff5f7 0%, #ffe8ed 100%)'
      }}
    >
      {/* Header Portal Magra com Bandeiras */}
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center mb-12">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ color: '#FF6B8D' }}
        >
          🇧🇷 Portal Magra 🇺🇸
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Transformando a vida de brasileiras nos Estados Unidos através de bem-estar personalizado
        </p>
      </div>

      {/* Título Principal do Quiz */}
      <div className="relative flex place-items-center my-12 text-center max-w-4xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Quiz de Tipos de Brasileiras nos EUA
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubra em 1 minuto qual seu perfil único e receba um guia personalizado gratuito direto no WhatsApp
          </p>
        </div>
      </div>

      {/* Card Principal do Quiz */}
      <div className="w-full max-w-lg mx-auto mb-12">
        <div 
          className="rounded-2xl border-2 p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:scale-105 text-center"
          style={{
            borderColor: '#FF6B8D',
            background: 'linear-gradient(135deg, #fff0f3 0%, #ffffff 100%)',
            boxShadow: '0 8px 32px rgba(255, 107, 141, 0.15)'
          }}
        >
          <div className="text-5xl mb-6">🎯</div>
          
          <h3 className="text-3xl font-bold mb-4" style={{ color: '#FF6B8D' }}>
            Descobrir Meu Arquétipo
          </h3>
          
          <p className="text-gray-600 mb-8 text-base leading-relaxed">
            7 perguntas estratégicas para identificar seu perfil único de brasileira nos EUA e receber orientações personalizadas para sua jornada de bem-estar.
          </p>

          <a
            href="/quiz"
            className="inline-block w-full py-5 px-8 rounded-xl font-bold text-xl text-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 group"
            style={{
              background: 'linear-gradient(135deg, #FF6B8D 0%, #FF8FA3 100%)'
            }}
          >
            Iniciar Quiz Gratuito
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none ml-3">
              →
            </span>
          </a>

          <p className="text-xs text-gray-500 mt-4">
            ⏱ Leva apenas 1 minuto • 📱 Resultado no WhatsApp
          </p>
        </div>
      </div>

      {/* Benefícios em Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <div 
          className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 107, 141, 0.2)'
          }}
        >
          <div className="text-4xl mb-4">⏱</div>
          <h4 className="font-bold text-lg text-gray-800 mb-3" style={{ color: '#FF6B8D' }}>
            Rápido & Preciso
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Quiz científico de 1 minuto que identifica seu arquétipo único de brasileira nos EUA
          </p>
        </div>
        
        <div 
          className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 107, 141, 0.2)'
          }}
        >
          <div className="text-4xl mb-4">🎁</div>
          <h4 className="font-bold text-lg text-gray-800 mb-3" style={{ color: '#FF6B8D' }}>
            Material Exclusivo
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Guia personalizado com estratégias específicas para seu perfil, totalmente gratuito
          </p>
        </div>
        
        <div 
          className="text-center p-8 rounded-2xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 107, 141, 0.2)'
          }}
        >
          <div className="text-4xl mb-4">📱</div>
          <h4 className="font-bold text-lg text-gray-800 mb-3" style={{ color: '#FF6B8D' }}>
            Direto no WhatsApp
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Receba seu resultado completo e material personalizado direto no seu celular
          </p>
        </div>
      </div>

      {/* Preview dos Arquétipos */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Descubra qual destes arquétipos representa você:
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <div className="text-3xl mb-3">🌱</div>
            <p className="text-sm font-semibold text-gray-700">A Recém-Chegada</p>
            <p className="text-xs text-gray-500 mt-1">Adaptação aos EUA</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <div className="text-3xl mb-3">🚀</div>
            <p className="text-sm font-semibold text-gray-700">A Acelerada</p>
            <p className="text-xs text-gray-500 mt-1">Sempre correndo</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <div className="text-3xl mb-3">💪</div>
            <p className="text-sm font-semibold text-gray-700">A Resistente</p>
            <p className="text-xs text-gray-500 mt-1">Já tentou de tudo</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <div className="text-3xl mb-3">🪞</div>
            <p className="text-sm font-semibold text-gray-700">A Invisível</p>
            <p className="text-xs text-gray-500 mt-1">Autoestima em baixa</p>
          </div>
          
          <div 
            className="p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg col-span-2 md:col-span-1"
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <div className="text-3xl mb-3">🇧🇷</div>
            <p className="text-sm font-semibold text-gray-700">A Nostálgica</p>
            <p className="text-xs text-gray-500 mt-1">Saudade do Brasil</p>
          </div>
        </div>
      </div>

      {/* Seção de Prova Social */}
      <div 
        className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl mb-16"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 240, 243, 0.9) 100%)',
          border: '1px solid rgba(255, 107, 141, 0.3)'
        }}
      >
        <div className="text-4xl mb-6">✨</div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FF6B8D' }}>
          Mais de 2.000 brasileiras já descobriram seu arquétipo
        </h3>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Junte-se às brasileiras que estão transformando sua saúde e bem-estar nos EUA com orientações personalizadas
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF6B8D' }}>2.000+</div>
            <p className="text-sm text-gray-600">Brasileiras atendidas</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF6B8D' }}>⭐⭐⭐⭐⭐</div>
            <p className="text-sm text-gray-600">Avaliação média</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF6B8D' }}>7 dias</div>
            <p className="text-sm text-gray-600">Para ver resultados</p>
          </div>
        </div>

        <a
          href="/quiz"
          className="inline-block py-4 px-10 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-pink-50 hover-portal-button"
          style={{
            borderColor: '#FF6B8D',
            color: '#FF6B8D',
            backgroundColor: 'rgba(255, 107, 141, 0.1)',
            border: '2px solid #FF6B8D'
          }}
        >
          Descobrir Meu Arquétipo Agora →
        </a>
      </div>

      {/* FAQ Rápido */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h3 className="text-xl font-bold text-gray-800 mb-8">Perguntas Frequentes</h3>
        
        <div className="grid gap-6 text-left">
          <div 
            className="p-6 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <h4 className="font-semibold mb-2" style={{ color: '#FF6B8D' }}>
              🤔 O quiz é realmente gratuito?
            </h4>
            <p className="text-sm text-gray-600">
              Sim! O quiz e o material personalizado são 100% gratuitos. Você recebe tudo no WhatsApp sem custo algum.
            </p>
          </div>
          
          <div 
            className="p-6 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <h4 className="font-semibold mb-2" style={{ color: '#FF6B8D' }}>
              ⏰ Quanto tempo leva para fazer?
            </h4>
            <p className="text-sm text-gray-600">
              Apenas 1 minuto! São 7 perguntas rápidas e você recebe seu resultado imediatamente.
            </p>
          </div>
          
          <div 
            className="p-6 rounded-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(255, 107, 141, 0.2)'
            }}
          >
            <h4 className="font-semibold mb-2" style={{ color: '#FF6B8D' }}>
              📱 Como recebo o resultado?
            </h4>
            <p className="text-sm text-gray-600">
              Após completar o quiz, você será direcionada para o WhatsApp onde receberá seu arquétipo e material personalizado.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <p className="text-sm text-gray-400 mb-4">
          © 2024 Portal Magra - Transformando vidas de brasileiras nos EUA
        </p>
        <p className="text-xs text-gray-400">
          ✨ Bem-estar personalizado • 🇧🇷 Feito por brasileiras para brasileiras 🇺🇸
        </p>
      </div>
    </main>
  )
}
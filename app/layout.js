import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Portal Magra - Qual tipo de brasileira nos EUA você é?',
  description: 'Descubra em 1 minuto seu arquétipo de brasileira nos EUA e receba seu guia personalizado grátis.',
  keywords: 'brasileiras nos EUA, bem-estar, saúde, Portal Magra, quiz personalizado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1124401996331664');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1124401996331664&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
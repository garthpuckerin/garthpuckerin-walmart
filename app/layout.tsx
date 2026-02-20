import React from 'react';
import Script from 'next/script';
import type { Viewport } from 'next';
import './globals.css';

// Runs synchronously before React renders — sets data-theme on <html> from
// localStorage or prefers-color-scheme, eliminating the theme flash entirely.
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem('wm-theme');document.documentElement.dataset.theme=s==='dark'||s==='light'?s:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch(e){}})();`;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Garth Puckerin — LMS Administrator · Walmart Connect Academy',
  description:
    'Targeted application site for the LMS Administrator role at Walmart Connect Academy. 10+ years enterprise LMS experience, AI-first mindset, 10,000+ users managed.',
  keywords: [
    'Garth Puckerin',
    'LMS Administrator',
    'Walmart Connect Academy',
    'Intellum',
    'Docebo',
    'Learning Management',
    'AI-First Learning',
    'SCORM',
    'xAPI',
  ],
  openGraph: {
    title: 'Garth Puckerin — LMS Administrator · Walmart Connect Academy',
    description:
      'Targeted application. 10+ years enterprise LMS, AI-powered L&D tools, 10,000+ users at Entrust.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Inject a relaxed CSP meta tag for local dev if the server-side metadata didn't include it. */}
        <Script id="inject-csp" strategy="beforeInteractive">
          {`(function(){try{var m=document.createElement('meta');m.httpEquiv='Content-Security-Policy';m.content="default-src 'self' https:; connect-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com https:; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;";document.getElementsByTagName('head')[0].prepend(m);}catch(e){} })();`}
        </Script>
        <Script id="wm-theme" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
        {/* Unregister any active service workers (useful during local development when a stale sw may be intercepting requests). */}
        <Script id="unregister-sw" strategy="beforeInteractive">
          {`(function(){
            try{
              if('serviceWorker' in navigator){
                if(window.caches && caches.keys){
                  caches.keys().then(function(keys){keys.forEach(function(k){caches.delete(k);});}).catch(function(){});
                }
                navigator.serviceWorker.getRegistrations().then(function(regs){
                  regs.forEach(function(r){ try{ r.unregister(); }catch(e){} });
                }).catch(function(){});
                try{ navigator.serviceWorker.getRegistration().then(function(r){ if(r) r.unregister().catch(function(){}); }).catch(function(){}); }catch(e){}
              }
            }catch(e){}
          })();`}
        </Script>
        <Script id="client-error-capture" strategy="beforeInteractive">
          {`(function(){
            function renderErrorBox(msg){
              try{
                var d=document.createElement('div');
                d.style.position='fixed';
                d.style.inset='12px';
                d.style.zIndex=999999;
                d.style.padding='16px';
                d.style.background='rgba(20,20,20,0.95)';
                d.style.color='#fff';
                d.style.fontFamily='monospace';
                d.style.whiteSpace='pre-wrap';
                d.style.overflow='auto';
                d.style.maxHeight='60vh';
                d.innerText=msg;
                document.body.appendChild(d);
              }catch(e){console.error('renderErrorBox failed',e)}
            }
            window.addEventListener('error', function(ev){
              var m = ev.message + '\n' + (ev.filename||'') + ':' + (ev.lineno||'') + ':' + (ev.colno||'') + '\n' + (ev.error && ev.error.stack ? ev.error.stack : 'no stack');
              try{ console.error('Captured client error', m) }catch(e){}
              renderErrorBox('Client error:\n'+m);
            });
            window.addEventListener('unhandledrejection', function(ev){
              var reason = ev.reason && ev.reason.stack ? ev.reason.stack : String(ev.reason);
              try{ console.error('Unhandled rejection', reason) }catch(e){}
              renderErrorBox('Unhandled promise rejection:\n'+reason);
            });
          })();`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

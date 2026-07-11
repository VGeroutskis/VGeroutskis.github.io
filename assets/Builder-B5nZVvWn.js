import{r as p,g as we,D as Ge,C as ve,s as qe,a as Ze,u as pt,l as ut,j as e,R as ht,b as ft,G as Ie,Y as Ae,c as Xe,d as mt}from"./index-Blicu4pZ.js";import{TemplateRenderer as gt}from"./index-rFWEFR1y.js";import{u as _e}from"./githubSecrets-C52CfFio.js";const Qe=()=>new Promise((c,P)=>{if(window.JSZip){c(window.JSZip);return}const N=document.createElement("script");N.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",N.onload=()=>c(window.JSZip),N.onerror=()=>P(new Error("Failed to load JSZip CDN")),document.head.appendChild(N)}),bt=async(c,P)=>{try{const N=await Qe(),x=new N;let g=await(await fetch("/")).text();g=g.replace("</head>",`<script>
      // Load local config.json file
      fetch('./config.json')
        .then(res => res.json())
        .then(data => {
          window.__PROFILE_CONFIG__ = data;
          // Reload page to apply config
          if (!window.__CONFIG_LOADED__) {
            window.__CONFIG_LOADED__ = true;
            // Trigger dynamic update runtime
            if (window.updateRuntimeConfig) {
              window.updateRuntimeConfig(data);
            }
          }
        });
    <\/script></head>`),g=g.replaceAll('src="/assets/','src="./assets/'),g=g.replaceAll('href="/assets/','href="./assets/'),g=g.replaceAll('href="/vendor/','href="./vendor/'),x.file("index.html",g),x.file("config.json",JSON.stringify(P,null,2));const B=Array.from(document.querySelectorAll('script[type="module"]')),j=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const C of j){const m=C.getAttribute("href");if(m&&m.startsWith("/assets/")){const O=await fetch(m);if(O.ok){const v=await O.text();x.file(m.substring(1),v)}}}const S=B.map(C=>C.getAttribute("src")).filter(C=>!!C&&C.startsWith("/assets/")),z=new Set;for(let C=0;C<S.length;C++){const m=S[C];if(z.has(m))continue;const O=await fetch(m);if(!O.ok)continue;const v=await O.text();x.file(m.substring(1),v),z.add(m);const b=[...v.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(s=>s[1]||s[2]);for(const s of b){const R=`/assets/${s}`;!z.has(R)&&!S.includes(R)&&S.push(R)}}const y=[...g.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(C=>C[1]),Z=[...new Set(y)],f=new Set;for(const C of Z){if(f.has(C))continue;const m=await fetch(`/${C}`);if(!m.ok)continue;const O=await m.text();x.file(C,O),f.add(C);const v=[...O.matchAll(/url\(([^)]+)\)/g)].map(b=>b[1].replace(/['"]/g,""));for(const b of v){const s=new URL(b,`https://x/${C}`).pathname.slice(1);if(f.has(s))continue;const R=await fetch(`/${s}`);if(!R.ok)continue;const I=new Uint8Array(await R.arrayBuffer());x.file(s,I),f.add(s)}}const L=await x.generateAsync({type:"blob"}),E=document.createElement("a");E.href=URL.createObjectURL(L),E.download=`linkhubpage-${c}-profile.zip`,document.body.appendChild(E),E.click(),document.body.removeChild(E)}catch(N){console.error("ZIP packaging failed:",N),alert("Failed to generate ZIP export package.")}},xt=async(c,P)=>{try{const N=await Qe(),x=new N;x.file("wrangler.toml",`name = "linkhubpage-profile-\${username || 'custom'}"
main = "src/worker.ts"
compatibility_date = "2024-01-01"

[assets]
directory = "./public"

[vars]
GOOGLE_CLIENT_ID = "\${profileConfig.googleClientId || ''}"
GOOGLE_ANALYTICS_ID = "\${profileConfig.googleAnalyticsId || ''}"
RESEND_API_KEY = "\${profileConfig.resendApiKey || ''}"
`);const g={name:"linkhubpage-profile-${username || 'custom'}",version:"1.0.0",devDependencies:{wrangler:"^3.0.0"},scripts:{deploy:"wrangler deploy"}};x.file("package.json",JSON.stringify(g,null,2));const W=`export interface Env {
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_ANALYTICS_ID?: string;
  RESEND_API_KEY?: string;
}

function escapeHtml(value: string): string {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\\n/g, '<br/>');
  return \`<!DOCTYPE html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Contact Message</title>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background-color:#0e0f11;color:#e2e8f0;margin:0;padding:0;-webkit-font-smoothing:antialiased;}
.wrapper{width:100%;background-color:#0e0f11;padding:40px 20px;box-sizing:border-box;}
.container{max-width:580px;margin:0 auto;background-color:#16181d;border:1px solid #242930;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.2);}
.accent-bar{height:4px;background:linear-gradient(90deg,#00d2ff,#0284c7);}
.header{padding:32px 32px 20px 32px;border-bottom:1px solid #242930;}
.header h2{margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.025em;}
.header p{margin:4px 0 0 0;font-size:13px;color:#94a3b8;}
.content{padding:32px;}
.field-group{margin-bottom:24px;}
.field-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin-bottom:6px;}
.field-value{font-size:15px;color:#ffffff;font-weight:500;}
.field-value a{color:#00d2ff;text-decoration:none;}
.message-box{background-color:#1e293b;border-left:3px solid #00d2ff;border-radius:8px;padding:20px;margin-top:8px;font-size:15px;line-height:1.6;color:#f1f5f9;font-style:italic;}
.footer{background-color:#0f1115;padding:24px 32px;text-align:center;border-top:1px solid #242930;font-size:12px;color:#64748b;}
.footer a{color:#94a3b8;text-decoration:underline;}
</style></head><body>
<div class="wrapper"><div class="container"><div class="accent-bar"></div>
<div class="header"><h2>New Message Received</h2><p>A visitor has contacted you via your LinkHubPage profile</p></div>
<div class="content">
<div class="field-group"><div class="field-label">Sender Name</div><div class="field-value">\${safeName}</div></div>
<div class="field-group"><div class="field-label">Sender Email</div><div class="field-value"><a href="mailto:\${safeEmail}">\${safeEmail}</a></div></div>
<div class="field-group"><div class="field-label">Message</div><div class="message-box">\${safeMessage}</div></div>
</div>
<div class="footer">Sent automatically from your LinkHubPage profile</div>
</div></div></body></html>\`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Serve public environment variables dynamically (e.g. Google login credentials)
    if (url.pathname === '/api/config' && request.method === 'GET') {
      return new Response(JSON.stringify({
        GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID || '',
        GOOGLE_ANALYTICS_ID: env.GOOGLE_ANALYTICS_ID || ''
      }), {
        status: 200,
        headers: { 
          'content-type': 'application/json',
          'access-control-allow-origin': '*'
        }
      });
    }

    // API route to send emails
    if (url.pathname === '/api/send-email' && request.method === 'POST') {
      try {
        const body = await request.json() as { name: string; email: string; message: string; recipientEmail?: string };
        const { name, email, message, recipientEmail } = body;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Missing fields' }), {
            status: 400,
            headers: { 'content-type': 'application/json' }
          });
        }

        const resendKey = env.RESEND_API_KEY;
        const targetEmail = recipientEmail || "${P.contactEmail||""}";

        if (resendKey) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': \`Bearer \${resendKey}\`
            },
            body: JSON.stringify({
              from: 'LinkHubPage Contact <onboarding@resend.dev>',
              to: targetEmail,
              reply_to: email,
              subject: \`LinkHubPage Contact: \${name}\`,
              text: \`Name: \${name}\\nEmail: \${email}\\n\\nMessage:\\n\${message}\`,
              html: getEmailHtml(name, email, message)
            })
          });

          if (resendResponse.ok) {
            return new Response(JSON.stringify({ success: true }), {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          } else {
            const errText = await resendResponse.text();
            return new Response(JSON.stringify({ error: 'Email service failed', details: errText }), {
              status: 502,
              headers: { 'content-type': 'application/json' }
            });
          }
        }

        return new Response(JSON.stringify({ error: 'Email service not configured (Missing RESEND_API_KEY)' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: err.message }), {
          status: 500,
          headers: { 'content-type': 'application/json' }
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  }
};
`;x.file("src/worker.ts",W);let j=await(await fetch("/")).text();j=j.replace("</head>",`<script>
      fetch('./config.json')
        .then(res => res.json())
        .then(data => {
          window.__PROFILE_CONFIG__ = data;
          if (!window.__CONFIG_LOADED__) {
            window.__CONFIG_LOADED__ = true;
            if (window.updateRuntimeConfig) {
              window.updateRuntimeConfig(data);
            }
          }
        });
    <\/script></head>`),j=j.replaceAll('src="/assets/','src="./assets/'),j=j.replaceAll('href="/assets/','href="./assets/'),j=j.replaceAll('href="/vendor/','href="./vendor/'),x.file("public/index.html",j);const z={...P};delete z.resendApiKey,x.file("public/config.json",JSON.stringify(z,null,2));const y=Array.from(document.querySelectorAll('script[type="module"]')),Z=Array.from(document.querySelectorAll('link[rel="stylesheet"]'));for(const b of Z){const s=b.getAttribute("href");if(s&&s.startsWith("/assets/")){const R=await fetch(s);if(R.ok){const I=await R.text();x.file("public/"+s.substring(1),I)}}}const f=y.map(b=>b.getAttribute("src")).filter(b=>!!b&&b.startsWith("/assets/")),L=new Set;for(let b=0;b<f.length;b++){const s=f[b];if(L.has(s))continue;const R=await fetch(s);if(!R.ok)continue;const I=await R.text();x.file("public/"+s.substring(1),I),L.add(s);const $=[...I.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(J=>J[1]||J[2]);for(const J of $){const l=`/assets/${J}`;!L.has(l)&&!f.includes(l)&&f.push(l)}}const E=[...j.matchAll(/href="(?:\.\/)?(vendor\/[^"]+\.css)"/g)].map(b=>b[1]),C=[...new Set(E)],m=new Set;for(const b of C){if(m.has(b))continue;const s=await fetch(`/${b}`);if(!s.ok)continue;const R=await s.text();x.file("public/"+b,R),m.add(b);const I=[...R.matchAll(/url\(([^)]+)\)/g)].map($=>$[1].replace(/['"]/g,""));for(const $ of I){const J=new URL($,`https://x/${b}`).pathname.slice(1);if(m.has(J))continue;const l=await fetch(`/${J}`);if(!l.ok)continue;const u=new Uint8Array(await l.arrayBuffer());x.file("public/"+J,u),m.add(J)}}const O=await x.generateAsync({type:"blob"}),v=document.createElement("a");v.href=URL.createObjectURL(O),v.download=`linkhubpage-${c}-cloudflare-worker.zip`,document.body.appendChild(v),v.click(),document.body.removeChild(v)}catch(N){console.error("Worker ZIP packaging failed:",N),alert("Failed to generate Cloudflare Worker export package.")}},Le=c=>c.trim().toLowerCase().replace(/^https?:\/\//,"").replace(/\/.*$/,"").replace(/\.$/,"");function yt({username:c,profileConfig:P,persistBuilderDraft:N,getAuthToken:x,setDeployStatus:_,setStatusMsg:g}){const[W,B]=p.useState(!1),[j,S]=p.useState(""),[z,y]=p.useState("idle"),[Z,f]=p.useState(""),[L,E]=p.useState("idle"),[C,m]=p.useState(""),[O,v]=p.useState(""),[b,s]=p.useState(()=>`linkhubpage-profile-${c||"custom"}`),[R,I]=p.useState(""),[$,J]=p.useState(""),l=p.useRef(!1),u=p.useRef(!1),k=p.useRef(!1);p.useEffect(()=>{s(`linkhubpage-profile-${c||"custom"}`)},[c]);const re=async()=>{const a=Le(j);if(!a){y("invalid"),f("Please enter a valid domain first.");return}y("checking"),f("Checking whether the domain is using Cloudflare nameservers..."),E("idle"),m(""),I("");try{const r=await fetch("/api/cloudflare/domain-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a})}),o=await r.json();if(!r.ok){y("invalid"),f(o.error||"Domain check failed.");return}o.isCloudflare?(y("valid"),f(`Domain ${o.domain} is on Cloudflare. Opening Cloudflare login...`),$.trim()||J(`${o.domain}/*`)):(y("invalid"),f(`Domain ${o.domain} is not currently on Cloudflare nameservers.`))}catch(r){y("invalid"),f(r instanceof Error?r.message:"Unable to verify domain.")}},q=async()=>{const a=Le(j);if(z!=="valid"){E("error"),f("Please verify your domain on Cloudflare before login.");return}const r=O.trim();if(!r){E("error"),f("Please connect via the Cloudflare popup first.");return}E("connecting"),f("Connecting to Cloudflare and loading your account + zone details...");try{const o=await fetch("/api/cloudflare/connect",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({domain:a,apiToken:r})}),i=await o.json();if(!o.ok){E("error"),f(i.error||"Cloudflare login/connect failed.");return}m(i.accountId||""),I(i.zoneId||""),J(i.routePattern||`${a}/*`),E("connected"),f(`Connected to Cloudflare successfully. Zone: ${i.zoneName||a}`)}catch(o){E("error"),f(o instanceof Error?o.message:"Cloudflare login/connect failed.")}},xe=async()=>{var o,i,F;const a=Le(j);if(!a){alert("Please provide the domain you want to deploy to.");return}if(z!=="valid"){alert("Please verify that the domain is on Cloudflare first.");return}if(L!=="connected"){alert("Please login/connect Cloudflare to auto-load account and zone details.");return}if(!C||!O||!b||!R){alert("Missing Cloudflare deployment details. Please reconnect Cloudflare and try again.");return}const r=($||`${a}/*`).trim();_("loading"),g("Compiling your profile assets into a single-file Worker...");try{await N();const w={};(o=P.resendApiKey)!=null&&o.trim()&&(w.BUILDER_RESEND_API_KEY=P.resendApiKey.trim()),(i=P.googleClientId)!=null&&i.trim()&&(w.BUILDER_GOOGLE_CLIENT_ID=P.googleClientId.trim()),(F=P.googleAnalyticsId)!=null&&F.trim()&&(w.BUILDER_GOOGLE_ANALYTICS_ID=P.googleAnalyticsId.trim()),w.CLOUDFLARE_API_TOKEN=O.trim(),w.CLOUDFLARE_ACCOUNT_ID=C.trim(),w.CLOUDFLARE_SCRIPT_NAME=b.trim();const K={...P};delete K.resendApiKey,delete K.googleClientId,delete K.googleAnalyticsId;const ie=await fetch("/");if(!ie.ok)throw new Error("Failed to fetch HTML template.");let X=await ie.text();X=X.replace("</head>",`<script>
        window.__BUILDER_DEPLOY_MODE__ = true;
        window.__BUILDER_DEPLOY_TARGET__ = 'cloudflare';
        const __lhpShowSuspended = (msg) => {
          const text = msg || 'This site is currently unavailable.';
          document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#06080d;color:#cbd5e1;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;"><div style="max-width:640px;padding:32px;text-align:center;"><h1 style="margin:0 0 12px 0;color:#22d3ee;font-size:28px;">Site Suspended</h1><p style="margin:0;color:#94a3b8;line-height:1.6;">' + text + '</p></div></body>';
        };
        const __lhpCheckSubscription = async (cfg) => {
          const email = (cfg && cfg.adminEmail) ? String(cfg.adminEmail).trim() : '';
          if (!email) return true;
          try {
            const res = await fetch('https://linkhubpage.com/api/subscription/status?email=' + encodeURIComponent(email), { cache: 'no-store' });
            if (!res.ok) return true;
            const sub = await res.json();
            if (sub && sub.active === false) {
              __lhpShowSuspended(sub.reason || 'Subscription expired');
              return false;
            }
          } catch (_) {
            return true;
          }
          return true;
        };
        const __lhpParts = window.location.pathname.split('/').filter(Boolean);
        if (__lhpParts[__lhpParts.length - 1] === 'admin') __lhpParts.pop();
        const __lhpPrefix = __lhpParts.length > 0 ? '/' + __lhpParts[0] + '/' : '/';
        fetch(__lhpPrefix + 'config.json')
          .then(res => res.json())
          .then(async data => {
            const allowed = await __lhpCheckSubscription(data);
            if (!allowed) return;
            window.__PROFILE_CONFIG__ = data;
            if (!window.__CONFIG_LOADED__) {
              window.__CONFIG_LOADED__ = true;
              if (window.updateRuntimeConfig) {
                window.updateRuntimeConfig(data);
              }
            }
          });
      <\/script></head>`),X=X.replaceAll('src="/assets/','src="./assets/'),X=X.replaceAll('href="/assets/','href="./assets/');const G={},M={},V=[...X.matchAll(/(?:src|href)="\.\/assets\/([^"]+)"/g)].map(D=>D[1]),T=V.filter(D=>D.endsWith(".js")),ee=V.filter(D=>D.endsWith(".css"));for(const D of ee){if(M[D]!==void 0)continue;const Y=await fetch(`/assets/${D}`);Y.ok&&(M[D]=await Y.text())}for(let D=0;D<T.length;D++){const Y=T[D];if(G[Y]!==void 0)continue;const oe=await fetch(`/assets/${Y}`);if(!oe.ok)continue;const me=await oe.text();G[Y]=me;const ce=[...me.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ae=>ae[1]||ae[2]);for(const ae of ce)G[ae]===void 0&&!T.includes(ae)&&T.push(ae)}const te={},ne={},le=[...X.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(D=>D[1]),he=[...new Set(le)],Se=D=>{let Y="";for(let oe=0;oe<D.length;oe++)Y+=String.fromCharCode(D[oe]);return btoa(Y)};for(const D of he){if(te[D]!==void 0)continue;const Y=await fetch(D);if(!Y.ok)continue;const oe=await Y.text();te[D]=oe;const me=[...oe.matchAll(/url\(([^)]+)\)/g)].map(ce=>ce[1].replace(/['"]/g,""));for(const ce of me){const ae=new URL(ce,`https://x${D}`).pathname;if(ne[ae]!==void 0)continue;const ke=await fetch(ae);if(!ke.ok)continue;const Re=await ke.arrayBuffer();ne[ae]=Se(new Uint8Array(Re))}}const ye=`const htmlContent = ${JSON.stringify(X)};
const cssFiles = ${JSON.stringify(M)};
const jsFiles = ${JSON.stringify(G)};
const vendorText = ${JSON.stringify(te)};
const vendorBinary = ${JSON.stringify(ne)};
const configData = ${JSON.stringify(K)};

function b64ToBytes(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function escapeHtml(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function getEmailHtml(name, email, message) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\\n/g, '<br/>');
  return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Contact Message</title>' +
    '<style>' +
    'body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background-color:#0e0f11;color:#e2e8f0;margin:0;padding:0;-webkit-font-smoothing:antialiased;}' +
    '.wrapper{width:100%;background-color:#0e0f11;padding:40px 20px;box-sizing:border-box;}' +
    '.container{max-width:580px;margin:0 auto;background-color:#16181d;border:1px solid #242930;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.2);}' +
    '.accent-bar{height:4px;background:linear-gradient(90deg,#00d2ff,#0284c7);}' +
    '.header{padding:32px 32px 20px 32px;border-bottom:1px solid #242930;}' +
    '.header h2{margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.025em;}' +
    '.header p{margin:4px 0 0 0;font-size:13px;color:#94a3b8;}' +
    '.content{padding:32px;}' +
    '.field-group{margin-bottom:24px;}' +
    '.field-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin-bottom:6px;}' +
    '.field-value{font-size:15px;color:#ffffff;font-weight:500;}' +
    '.field-value a{color:#00d2ff;text-decoration:none;}' +
    '.message-box{background-color:#1e293b;border-left:3px solid #00d2ff;border-radius:8px;padding:20px;margin-top:8px;font-size:15px;line-height:1.6;color:#f1f5f9;font-style:italic;}' +
    '.footer{background-color:#0f1115;padding:24px 32px;text-align:center;border-top:1px solid #242930;font-size:12px;color:#64748b;}' +
    '.footer a{color:#94a3b8;text-decoration:underline;}' +
    '</style></head><body>' +
    '<div class="wrapper"><div class="container"><div class="accent-bar"></div>' +
    '<div class="header"><h2>New Message Received</h2><p>A visitor has contacted you via your LinkHubPage profile</p></div>' +
    '<div class="content">' +
    '<div class="field-group"><div class="field-label">Sender Name</div><div class="field-value">' + safeName + '</div></div>' +
    '<div class="field-group"><div class="field-label">Sender Email</div><div class="field-value"><a href="mailto:' + safeEmail + '">' + safeEmail + '</a></div></div>' +
    '<div class="field-group"><div class="field-label">Message</div><div class="message-box">' + safeMessage + '</div></div>' +
    '</div>' +
    '<div class="footer">Sent automatically from your LinkHubPage profile</div>' +
    '</div></div></body></html>';
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/config' && request.method === 'GET') {
      return new Response(JSON.stringify({
        GOOGLE_CLIENT_ID: env.BUILDER_GOOGLE_CLIENT_ID || '',
        GOOGLE_ANALYTICS_ID: env.BUILDER_GOOGLE_ANALYTICS_ID || ''
      }), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'access-control-allow-origin': '*'
        }
      });
    }

    // Lets the owner update their own Resend/Google Analytics/Google Client ID
    // secrets from this exported site's own /admin, without going back to the
    // main Builder and redeploying. Authenticates the same way the admin login
    // itself does (Google token -> userinfo -> adminEmail match), then calls
    // back into the Cloudflare API using this worker's own stored token to
    // update its own secrets.
    if (url.pathname === '/api/admin/config' && request.method === 'POST') {
      const authHeader = request.headers.get('Authorization') || '';
      if (!authHeader.startsWith('Bearer ')) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'content-type': 'application/json' }
        });
      }

      if (!env.CLOUDFLARE_API_TOKEN || !env.CLOUDFLARE_ACCOUNT_ID || !env.CLOUDFLARE_SCRIPT_NAME) {
        return new Response(JSON.stringify({ error: 'This site was deployed before secret self-update was supported. Redeploy from the Builder once to enable it.' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      }

      const accessToken = authHeader.substring(7);
      const userRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: 'Bearer ' + accessToken }
      });
      if (!userRes.ok) {
        return new Response(JSON.stringify({ error: 'Invalid token' }), {
          status: 401,
          headers: { 'content-type': 'application/json' }
        });
      }
      const googleUser = await userRes.json();
      if (!googleUser.email || googleUser.email !== configData.adminEmail) {
        return new Response(JSON.stringify({ error: 'Not authorized for this profile' }), {
          status: 403,
          headers: { 'content-type': 'application/json' }
        });
      }

      let body;
      try {
        body = await request.json();
      } catch (e) {
        return new Response(JSON.stringify({ error: 'Invalid request body' }), {
          status: 400,
          headers: { 'content-type': 'application/json' }
        });
      }

      const fieldToSecret = {
        resendApiKey: 'BUILDER_RESEND_API_KEY',
        googleClientId: 'BUILDER_GOOGLE_CLIENT_ID',
        googleAnalyticsId: 'BUILDER_GOOGLE_ANALYTICS_ID'
      };

      const updated = [];
      for (const field of Object.keys(fieldToSecret)) {
        const value = body[field];
        if (typeof value !== 'string' || value.trim().length === 0) continue;

        const secretRes = await fetch(
          'https://api.cloudflare.com/client/v4/accounts/' + env.CLOUDFLARE_ACCOUNT_ID + '/workers/scripts/' + env.CLOUDFLARE_SCRIPT_NAME + '/secrets',
          {
            method: 'PUT',
            headers: {
              'Authorization': 'Bearer ' + env.CLOUDFLARE_API_TOKEN,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: fieldToSecret[field],
              text: value.trim(),
              type: 'secret_text'
            })
          }
        );

        if (!secretRes.ok) {
          return new Response(JSON.stringify({ error: 'Failed to update ' + field + ' on Cloudflare', updated }), {
            status: 502,
            headers: { 'content-type': 'application/json' }
          });
        }
        updated.push(field);
      }

      return new Response(JSON.stringify({ success: true, updated }), {
        status: 200,
        headers: { 'content-type': 'application/json' }
      });
    }

    if (url.pathname === '/builder' || url.pathname === '/builder/' || url.pathname === '/links' || url.pathname === '/links/') {
      return Response.redirect(url.origin + '/', 302);
    }

    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/404.html' || url.pathname === '/admin' || url.pathname === '/admin/') {
      return new Response(htmlContent, {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=0, must-revalidate'
        }
      });
    }

    if (url.pathname === '/config.json') {
      const publicConfig = { ...configData };
      delete publicConfig.resendApiKey;
      return new Response(JSON.stringify(publicConfig, null, 2), {
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, max-age=0, must-revalidate'
        }
      });
    }

    // Fonts and JS/CSS chunks are filename-addressed by content hash (or,
    // for /vendor/, fixed for the lifetime of this deploy) - a year-long
    // immutable cache is safe and is one of Lighthouse's standard "serve
    // static assets with an efficient cache policy" checks. Only the HTML
    // and config.json above (which can change without their URL changing)
    // stay revalidate-on-every-request.
    if (url.pathname.startsWith('/vendor/')) {
      if (vendorText[url.pathname] !== undefined) {
        return new Response(vendorText[url.pathname], {
          headers: {
            'content-type': 'text/css',
            'cache-control': 'public, max-age=31536000, immutable'
          }
        });
      }
      if (vendorBinary[url.pathname] !== undefined) {
        return new Response(b64ToBytes(vendorBinary[url.pathname]), {
          headers: {
            'content-type': 'font/woff2',
            'cache-control': 'public, max-age=31536000, immutable'
          }
        });
      }
      return new Response('Not found', { status: 404 });
    }

    if (url.pathname.endsWith('.css')) {
      const filename = url.pathname.split('/').pop();
      const content = filename ? cssFiles[filename] : undefined;
      if (content === undefined) return new Response('Not found', { status: 404 });
      return new Response(content, {
        headers: {
          'content-type': 'text/css',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      });
    }

    if (url.pathname.endsWith('.js')) {
      const filename = url.pathname.split('/').pop();
      const content = filename ? jsFiles[filename] : undefined;
      if (content === undefined) return new Response('Not found', { status: 404 });
      return new Response(content, {
        headers: {
          'content-type': 'application/javascript',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      });
    }

    if (url.pathname === '/api/send-email' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { name, email, message, recipientEmail } = body;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ error: 'Missing fields' }), {
            status: 400,
            headers: { 'content-type': 'application/json' }
          });
        }

        const resendKey = env.BUILDER_RESEND_API_KEY;
        const targetEmail = recipientEmail || configData.contactEmail || '';

        if (resendKey) {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + resendKey
            },
            body: JSON.stringify({
              from: 'LinkHubPage Contact <onboarding@resend.dev>',
              to: targetEmail,
              reply_to: email,
              subject: 'LinkHubPage Contact: ' + name,
              text: 'Name: ' + name + '\\nEmail: ' + email + '\\n\\nMessage:\\n' + message,
              html: getEmailHtml(name, email, message)
            })
          });

          if (resendResponse.ok) {
            return new Response(JSON.stringify({ success: true }), {
              status: 200,
              headers: { 'content-type': 'application/json' }
            });
          } else {
            const errText = await resendResponse.text();
            return new Response(JSON.stringify({ error: 'Email service failed', details: errText }), {
              status: 502,
              headers: { 'content-type': 'application/json' }
            });
          }
        }

        return new Response(JSON.stringify({ error: 'Email service not configured (Missing BUILDER_RESEND_API_KEY)' }), {
          status: 501,
          headers: { 'content-type': 'application/json' }
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Internal Server Error', message: err.message }), {
          status: 500,
          headers: { 'content-type': 'application/json' }
        });
      }
    }

    return Response.redirect(url.origin + '/', 302);
  }
};`;g("Uploading script and routing to Cloudflare...");const be=await fetch("/api/deploy/cloudflare",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${x()}`},body:JSON.stringify({accountId:C.trim(),apiToken:O.trim(),scriptName:b.trim(),scriptContent:ye,secrets:w,zoneId:R.trim(),routePattern:r})}),fe=await be.json();be.ok?(_("success"),fe.urls&&Array.isArray(fe.urls)?g(`Successfully deployed to Cloudflare Workers! URLs: ${fe.urls.join(" | ")}`):g(`Successfully deployed to Cloudflare Workers! URL: ${fe.url}`),await N(P,{target:"cloudflare",domain:a})):(_("error"),g(fe.error||"Cloudflare deployment failed."))}catch(w){console.error(w),_("error"),g(w instanceof Error?w.message:"Deployment process error.")}},ue=()=>{if(u.current=!1,k.current=!1,!window.open("/cf-connect-popup.html","cf_connect","width=480,height=700")){E("error"),f("Popup blocked. Please allow popups for this site and try again.");return}l.current=!0},n=()=>{y("idle"),E("idle"),v(""),l.current=!1,u.current=!1,k.current=!1};return p.useEffect(()=>{const a=r=>{var o,i;r.origin===window.location.origin&&(((o=r.data)==null?void 0:o.type)!=="cf_token"||!((i=r.data)!=null&&i.token)||v(r.data.token))};return window.addEventListener("message",a),()=>window.removeEventListener("message",a)},[]),p.useEffect(()=>{z==="valid"&&!l.current&&ue()},[z]),p.useEffect(()=>{O&&!u.current&&(u.current=!0,q())},[O]),{showCFDeployForm:W,setShowCFDeployForm:B,cfDomain:j,setCFDomain:S,cfDomainStatus:z,cfDomainMsg:Z,cfConnectStatus:L,handleCheckCloudflareDomain:re,handleCFDirectDeploy:xe,openCFConnectPopup:ue,resetCloudflareConnection:n}}function vt({username:c,user:P,profileConfig:N,persistBuilderDraft:x,setDeployStatus:_,setStatusMsg:g}){const[W,B]=p.useState("subpath"),[j,S]=p.useState(()=>`linkhubpage-profile-${c||"page"}`),[z,y]=p.useState("idle"),[Z,f]=p.useState(""),[L,E]=p.useState(""),[C,m]=p.useState(""),[O,v]=p.useState(null);return p.useEffect(()=>{S(`linkhubpage-profile-${c||"page"}`)},[c]),p.useEffect(()=>{y("idle"),f(""),E(""),m(""),v(null)},[W,j,P==null?void 0:P.email]),{githubPagesMode:W,setGithubPagesMode:B,githubRepoName:j,setGithubRepoName:S,githubConnectStatus:z,githubConnectMsg:Z,githubResolvedOwner:L,githubResolvedRepo:C,githubRepoExists:O,handleCheckGitHubSetup:async()=>{const R=we("github_access_token");if(!R){y("error"),f("Please log in with GitHub first.");return}y("checking"),f("Checking GitHub account and repository readiness...");const I={Authorization:`Bearer ${R}`,Accept:"application/vnd.github+json"};try{const $=await fetch("https://api.github.com/user",{headers:I});if(!$.ok)throw new Error("Failed to read your GitHub profile. Please login again.");const l=(await $.json()).login,u=W==="root"?`${l}.github.io`:j.trim()||`linkhubpage-profile-${c||"page"}`,k=await fetch(`https://api.github.com/repos/${l}/${u}`,{headers:I}),re=k.ok;if(!re&&k.status!==404){const q=await k.text();throw new Error(`Failed repository check: ${q.slice(0,140)}`)}E(l),m(u),v(re),y("connected"),f(re?`GitHub ready. Repository ${l}/${u} exists and will be updated.`:`GitHub ready. Repository ${l}/${u} does not exist and will be created during deploy.`)}catch($){y("error"),f($ instanceof Error?$.message:"GitHub setup check failed.")}},handleDeployToGitHub:async()=>{const R=we("github_access_token");if(!R){_("error"),g("Please log in with GitHub to enable automatic GitHub Pages deployment.");return}if(z!=="connected"){_("error"),g('Please run "Check GitHub Setup" before deploying.');return}_("loading"),g("Preparing GitHub deployment target...");const I={Authorization:`Bearer ${R}`,Accept:"application/vnd.github+json","Content-Type":"application/json"};try{await x();const $=await fetch("https://api.github.com/user",{headers:I});if(!$.ok)throw new Error("Failed to read your GitHub profile. Please try logging in again.");const J=await $.json(),l=L||J.login,u=C||(W==="root"?`${l}.github.io`:j.trim()||`linkhubpage-profile-${c||"page"}`);g("Creating GitHub repository...");const k=await fetch("https://api.github.com/user/repos",{method:"POST",headers:I,body:JSON.stringify({name:u,description:"My LinkHubPage Profile",auto_init:!0})});if(!k.ok&&k.status!==422)throw new Error("Failed to create repository on GitHub");g("Preparing and packaging page assets...");let q=await(await fetch("/")).text();q=q.replace("</head>",`<script>
        window.__BUILDER_DEPLOY_MODE__ = true;
        window.__BUILDER_DEPLOY_TARGET__ = 'github';
        const __lhpShowSuspended = (msg) => {
          const text = msg || 'This site is currently unavailable.';
          document.documentElement.innerHTML = '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#06080d;color:#cbd5e1;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;"><div style="max-width:640px;padding:32px;text-align:center;"><h1 style="margin:0 0 12px 0;color:#22d3ee;font-size:28px;">Site Suspended</h1><p style="margin:0;color:#94a3b8;line-height:1.6;">' + text + '</p></div></body>';
        };
        const __lhpCheckSubscription = async (cfg) => {
          const email = (cfg && cfg.adminEmail) ? String(cfg.adminEmail).trim() : '';
          if (!email) return true;
          try {
            const res = await fetch('https://linkhubpage.com/api/subscription/status?email=' + encodeURIComponent(email), { cache: 'no-store' });
            if (!res.ok) return true;
            const sub = await res.json();
            if (sub && sub.active === false) {
              __lhpShowSuspended(sub.reason || 'Subscription expired');
              return false;
            }
          } catch (_) {
            return true;
          }
          return true;
        };
        const __lhpParts = window.location.pathname.split('/').filter(Boolean);
        if (__lhpParts[__lhpParts.length - 1] === 'admin') __lhpParts.pop();
        const __lhpPrefix = __lhpParts.length > 0 ? '/' + __lhpParts[0] + '/' : '/';
        fetch(__lhpPrefix + 'config.json')
          .then(res => res.json())
          .then(async data => {
            const allowed = await __lhpCheckSubscription(data);
            if (!allowed) return;
            window.__PROFILE_CONFIG__ = data;
            if (window.updateRuntimeConfig) window.updateRuntimeConfig(data);
          });
      <\/script></head>`),q=q.replaceAll('src="/assets/','src="./assets/'),q=q.replaceAll('href="/assets/','href="./assets/');const ue=q.replaceAll('src="./assets/','src="../assets/').replaceAll('href="./assets/','href="../assets/'),n={...N};n.adminEmail=(P==null?void 0:P.email)||"",delete n.resendApiKey;const a=[{path:"index.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"admin/index.html",content:btoa(unescape(encodeURIComponent(ue)))},{path:"404.html",content:btoa(unescape(encodeURIComponent(q)))},{path:"config.json",content:btoa(unescape(encodeURIComponent(JSON.stringify(n,null,2))))}],o=[...Array.from(new Set([...q.matchAll(/(?:src|href)="((?:\.\/|\/)?assets\/[^"]+)"/g)].map(A=>A[1])))],i=new Set;for(let A=0;A<o.length;A++){const G=o[A],M=G.startsWith("./")?`/${G.slice(2)}`:G.startsWith("/")?G:`/${G}`,V=G.startsWith("./")?G.slice(2):G.startsWith("/")?G.slice(1):G;if(i.has(V))continue;const T=await fetch(M);if(!T.ok)throw new Error(`Failed to fetch asset ${M} for GitHub deploy`);const ee=await T.text();if(a.push({path:V,content:btoa(unescape(encodeURIComponent(ee)))}),i.add(V),M.endsWith(".js")){const te=[...ee.matchAll(/from"\.\/([a-zA-Z0-9_.-]+\.js)"|import\("\.\/([a-zA-Z0-9_.-]+\.js)"\)/g)].map(ne=>ne[1]||ne[2]);for(const ne of te){const le=`assets/${ne}`;!i.has(le)&&!o.includes(le)&&o.push(le)}}}const F=["/favicon.ico","/icon-192.png","/icon-512.png","/manifest.json"];for(const A of F){const G=await fetch(A);if(!G.ok)continue;const M=new Uint8Array(await G.arrayBuffer());let V="";for(let T=0;T<M.length;T++)V+=String.fromCharCode(M[T]);a.push({path:A.slice(1),content:btoa(V)})}const w=[...q.matchAll(/href="(\/vendor\/[^"]+\.css)"/g)].map(A=>A[1]),K=[...new Set(w)],ie=new Set;for(const A of K){if(ie.has(A))continue;const G=await fetch(A);if(!G.ok)continue;const M=await G.text();a.push({path:A.slice(1),content:btoa(unescape(encodeURIComponent(M)))}),ie.add(A);const V=[...M.matchAll(/url\(([^)]+)\)/g)].map(T=>T[1].replace(/['"]/g,""));for(const T of V){const ee=new URL(T,`https://x${A}`).pathname;if(ie.has(ee))continue;const te=await fetch(ee);if(!te.ok)continue;const ne=new Uint8Array(await te.arrayBuffer());let le="";for(let he=0;he<ne.length;he++)le+=String.fromCharCode(ne[he]);a.push({path:ee.slice(1),content:btoa(le)}),ie.add(ee)}}g("Uploading assets to GitHub...");for(const A of a){const G=await fetch(`https://api.github.com/repos/${l}/${u}/contents/${A.path}`,{headers:I}),M=G.ok?await G.json():null,V=M==null?void 0:M.sha,T=await fetch(`https://api.github.com/repos/${l}/${u}/contents/${A.path}`,{method:"PUT",headers:I,body:JSON.stringify({message:`Deploy ${A.path}`,content:A.content,sha:V})});if(!T.ok){const ee=await T.text();throw new Error(`Failed to upload ${A.path} to GitHub (${T.status}): ${ee.slice(0,180)}`)}}g("Saving integration values into GitHub Secrets...");try{await _e(I,l,u,"BUILDER_GOOGLE_CLIENT_ID",N.googleClientId||""),await _e(I,l,u,"BUILDER_GOOGLE_ANALYTICS_ID",N.googleAnalyticsId||""),await _e(I,l,u,"BUILDER_RESEND_API_KEY",N.resendApiKey||""),await _e(I,l,u,"BUILDER_CALENDLY_URL",N.calendlyUrl||"")}catch(A){console.warn("Failed to sync one or more GitHub secrets:",A)}g("Activating GitHub Pages...");const X=await fetch(`https://api.github.com/repos/${l}/${u}/pages`,{method:"POST",headers:I,body:JSON.stringify({source:{branch:"main",path:"/"}})});if(X.ok||X.status===409){_("success");const A=W==="root"?`https://${l}.github.io/`:`https://${l}.github.io/${u}/`;g(`Successfully deployed to GitHub Pages! URL: ${A}`),await fetch("/api/profile/github-deploy",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${R}`},body:JSON.stringify({repoName:u,url:A})}).catch(G=>console.warn("Failed to record GitHub Pages deployment:",G)),await x(N,{target:"github",githubRepoName:u,githubPagesMode:W})}else throw new Error("Could not enable GitHub Pages automatically")}catch($){_("error"),g($ instanceof Error?$.message:"GitHub deployment failed")}}}}function wt({profileConfig:c,handleConfigChange:P,user:N,username:x,isReserved:_,getAuthToken:g}){const[W,B]=p.useState("idle"),[j,S]=p.useState(""),[z,y]=p.useState("idle"),[Z,f]=p.useState(""),[L,E]=p.useState("idle"),[C,m]=p.useState(""),[O,v]=p.useState("idle"),[b,s]=p.useState("");return p.useEffect(()=>{v("idle"),s("")},[x,_,N==null?void 0:N.email]),{googleCheckStatus:W,setGoogleCheckStatus:B,googleCheckMsg:j,setGoogleCheckMsg:S,resendCheckStatus:z,setResendCheckStatus:y,resendCheckMsg:Z,setResendCheckMsg:f,calendlyCheckStatus:L,setCalendlyCheckStatus:E,calendlyCheckMsg:C,setCalendlyCheckMsg:m,internalCheckStatus:O,internalCheckMsg:b,handleCheckGoogleClientId:async()=>{const l=(c.googleClientId||"").trim();if(!l){B("invalid"),S("Please enter a Google Client ID first.");return}B("checking"),S("Validating Google Client ID format...");try{const u=await fetch("/api/integrations/google-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:l})}),k=await u.json();if(!u.ok||!k.valid){B("invalid"),S(k.error||"Invalid Google Client ID format.");return}B("valid"),S("Google Client ID looks valid.")}catch(u){B("invalid"),S(u instanceof Error?u.message:"Google Client ID validation failed.")}},handleCheckResendKey:async()=>{const l=(c.resendApiKey||"").trim();if(!l){y("invalid"),f("Please enter a Resend API key first.");return}y("checking"),f("Verifying Resend API key...");try{const u=await fetch("/api/integrations/resend-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:l})}),k=await u.json();if(!u.ok||!k.valid){y("invalid"),f(k.error||"Resend API key is invalid.");return}y("valid"),f(k.message||"Resend API key is valid.")}catch(u){y("invalid"),f(u instanceof Error?u.message:"Resend validation failed.")}},handleCheckCalendlyUrl:async()=>{const l=(c.calendlyUrl||"").trim();if(!l){E("invalid"),m("Please enter a Calendly URL first.");return}E("checking"),m("Validating Calendly URL...");try{const u=await fetch("/api/integrations/calendly-check",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({calendlyUrl:l})}),k=await u.json();if(!u.ok||!k.valid){E("invalid"),m(k.error||"Calendly URL is invalid.");return}E("valid"),m(k.message||"Calendly URL looks valid."),k.normalizedUrl&&k.normalizedUrl!==l&&P("calendlyUrl",k.normalizedUrl)}catch(u){E("invalid"),m(u instanceof Error?u.message:"Calendly URL validation failed.")}},handleCheckInternalSetup:async()=>{if(!N){v("error"),s("Please login first.");return}const l=(x||"").trim().toLowerCase();if(!l){v("error"),s("Please reserve a username first.");return}if(!/^[a-z0-9_-]{3,30}$/.test(l)){v("error"),s("Username must be 3-30 chars and contain only a-z, 0-9, _ or -.");return}if(!_){v("error"),s("Username is not reserved yet. Click Reserve first.");return}v("checking"),s("Checking internal hosting readiness...");try{const u=g();if(!u){v("error"),s("Missing auth token. Please sign out and sign in again.");return}if(!(await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${u}`}})).ok){v("error"),s("Could not verify draft access. Please re-login and retry.");return}v("ready"),s(`Ready to publish at ${window.location.origin}/p/${l}`)}catch(u){v("error"),s(u instanceof Error?u.message:"Internal setup check failed.")}}}}function kt({user:c,login:P,getAuthToken:N,setStatusMsg:x}){const[_,g]=p.useState(""),[W,B]=p.useState(!1),[j,S]=p.useState(()=>typeof window<"u"&&window.__PROFILE_CONFIG__?window.__PROFILE_CONFIG__:{...Ge}),[z,y]=p.useState("idle"),[Z,f]=p.useState(null),L=async(n,a)=>{if(!c)return;const r=N();if(!r)return;const o={...n||j};o.adminEmail=c.email;try{await fetch("/api/profile/draft",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify({config:o,...a?{lastDeploy:a}:{}})})}catch(i){console.warn("Failed to persist builder draft:",i)}};p.useEffect(()=>{const{googleClientId:n,googleAnalyticsId:a,adminEmail:r,...o}=j;Object.assign(ve,o)},[j]);const E=n=>{S(a=>{const r=a.layout||["profile","links","actions","techstack","github","portfolio"];let o;if(r.includes(n)){if(n==="profile")return a;o=r.filter(i=>i!==n)}else o=[...r,n];return{...a,layout:o}})},C=(n,a)=>{S(r=>{const o=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=a==="up"?n-1:n+1;if(i<0||i>=o.length)return r;const F=o[n];return o[n]=o[i],o[i]=F,{...r,layout:o}})},m=(n,a)=>{f(a),n.dataTransfer.effectAllowed="move"},O=n=>{n.preventDefault()},v=(n,a)=>{n.preventDefault(),!(Z===null||Z===a)&&(S(r=>{const o=[...r.layout||["profile","links","actions","techstack","github","portfolio"]],i=o[Z];return o.splice(Z,1),o.splice(a,0,i),{...r,layout:o}}),f(null))},b=n=>{qe("github_access_token",n.token),S(r=>({...r,githubUsername:n.username||r.githubUsername}));const a=N();a&&fetch("/api/integrations/github-link",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({githubUsername:n.username||"",githubEmail:n.email||""})}).catch(r=>console.warn("Failed to record GitHub account link:",r)),window.dispatchEvent(new Event("linkhubpage:github-connected"))};p.useEffect(()=>{const n=new URLSearchParams(window.location.hash.slice(1)),a=n.get("provider"),r=n.get("token"),o=n.get("email");n.get("name"),n.get("picture");const i=n.get("username");n.get("mode"),a==="github"&&r&&o&&(b({token:r,email:o,username:i||void 0}),window.history.replaceState({},document.title,window.location.pathname))},[P]),p.useEffect(()=>{const n=a=>{var r,o;a.origin===window.location.origin&&(((r=a.data)==null?void 0:r.type)!=="github_oauth_success"||!((o=a.data)!=null&&o.token)||b({token:a.data.token,email:a.data.email,name:a.data.name,picture:a.data.picture,username:a.data.username,mode:a.data.mode}))};return window.addEventListener("message",n),()=>window.removeEventListener("message",n)},[]),p.useEffect(()=>{const n=r=>{if(r)try{const{payload:o,ts:i}=JSON.parse(r);if(!(o!=null&&o.token)||Date.now()-i>12e4)return;b({token:o.token,email:o.email,name:o.name,picture:o.picture,username:o.username,mode:o.mode})}catch(o){console.warn("Failed to parse stored GitHub OAuth result:",o)}finally{Ze("github_oauth_result")}};n(we("github_oauth_result"));const a=r=>{r.key==="github_oauth_result"&&r.newValue&&n(r.newValue)};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[]);const s=(n,a)=>{S(r=>({...r,[n]:a}))};return{username:_,setUsername:g,isReserved:W,setIsReserved:B,profileConfig:j,setProfileConfig:S,persistBuilderDraft:L,reserveStatus:z,draggedIndex:Z,handleConfigChange:s,handleProfileImageFile:n=>{if(!n.type.startsWith("image/")){alert("Please choose an image file.");return}const a=URL.createObjectURL(n),r=new Image;r.onload=()=>{const i=Math.min(1,480/Math.max(r.width,r.height)),F=document.createElement("canvas");F.width=Math.round(r.width*i),F.height=Math.round(r.height*i);const w=F.getContext("2d");w&&(w.drawImage(r,0,0,F.width,F.height),s("profileImage",F.toDataURL("image/jpeg",.85))),URL.revokeObjectURL(a)},r.onerror=()=>{URL.revokeObjectURL(a),alert("Could not read that image.")},r.src=a},handleNestedConfigChange:(n,a,r)=>{S(o=>{const i=o[n]||{};return{...o,[n]:{...i,[a]:r}}})},handleLinkChange:(n,a,r)=>{S(o=>{const i=[...o.links];return i[n]={...i[n],[a]:r},{...o,links:i}})},getLinkPlatform:n=>{var a,r,o,i,F,w;return(a=n.icon)!=null&&a.includes("instagram")?"instagram":(r=n.icon)!=null&&r.includes("linkedin")?"linkedin":(o=n.icon)!=null&&o.includes("github")?"github":(i=n.icon)!=null&&i.includes("address-card")||n.action==="vcard"?"vcard":(F=n.icon)!=null&&F.includes("calendar")||n.action==="calendly"?"calendly":(w=n.icon)!=null&&w.includes("envelope")||n.action==="contact"?"email":"website"},handleLinkPlatformChange:(n,a)=>{S(r=>{const o=[...r.links],i=o[n];switch(a){case"instagram":o[n]={...i,icon:"fab fa-instagram",cssClass:"instagram",langKey:"instagram",tooltipKey:"tooltip-instagram",action:void 0,external:!0};break;case"linkedin":o[n]={...i,icon:"fab fa-linkedin",cssClass:"linkedin",langKey:"linkedin",tooltipKey:"tooltip-linkedin",action:void 0,external:!0};break;case"github":o[n]={...i,icon:"fab fa-github",cssClass:"github",langKey:"github",tooltipKey:"tooltip-github",action:void 0,external:!0};break;case"website":o[n]={...i,icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",action:void 0,external:!0};break;case"calendly":o[n]={...i,icon:"fa-solid fa-calendar",cssClass:"calendly",langKey:"book-meeting",tooltipKey:"tooltip-calendly",action:"calendly",external:!1};break;case"vcard":o[n]={...i,icon:"fa-solid fa-address-card",cssClass:"vcard",langKey:"save-contact",tooltipKey:"tooltip-vcard",action:"vcard",external:!1};break;case"email":o[n]={...i,icon:"fa-solid fa-envelope",cssClass:"email",langKey:"contact",tooltipKey:"tooltip-contact",action:"contact",external:!1};break}return{...r,links:o}})},addLink:()=>{S(n=>({...n,links:[...n.links,{url:"https://",icon:"fa-solid fa-link",cssClass:"custom-link",langKey:"website",tooltipKey:"tooltip-website",external:!0}]}))},deleteLink:n=>{S(a=>({...a,links:a.links.filter((r,o)=>o!==n)}))},toggleBlockVisibility:E,moveBlock:C,handleDragStart:m,handleDragOver:O,handleDrop:v,triggerGoogleLogin:()=>{var n,a,r;if(!((n=ve.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:ve.googleClientId,scope:"openid profile email",callback:async i=>{if(i!=null&&i.access_token){Ze("github_access_token"),qe("google_access_token",i.access_token);const F=await fetch("https://www.googleapis.com/oauth2/v3/userinfo",{headers:{Authorization:`Bearer ${i.access_token}`}});if(F.ok){const w=await F.json();if(P({name:w.name,email:w.email,picture:w.picture}),S(K=>({...K,name:w.name?{el:w.name,en:w.name}:K.name,profileImage:w.picture||K.profileImage,contactEmail:w.email||K.contactEmail})),w.email){const K=w.email.split("@")[0].toLowerCase().replace(/[^a-z0-9_-]/g,"");g(K)}}}}}).requestAccessToken()},triggerYoutubeConnect:()=>{var n,a,r;if(!((n=ve.googleClientId)!=null&&n.trim())){alert("Google login is temporarily unavailable (missing client ID). Please reload the page and try again.");return}typeof window<"u"&&((r=(a=window.google)==null?void 0:a.accounts)!=null&&r.oauth2)&&window.google.accounts.oauth2.initTokenClient({client_id:ve.googleClientId,scope:"https://www.googleapis.com/auth/youtube.readonly",callback:async i=>{var F,w;if(i!=null&&i.access_token)try{const K=await fetch("https://www.googleapis.com/youtube/v3/channels?part=id&mine=true",{headers:{Authorization:`Bearer ${i.access_token}`}});if(!K.ok){alert("Failed to connect YouTube. Please try again.");return}const X=(w=(F=(await K.json()).items)==null?void 0:F[0])==null?void 0:w.id;X?s("youtubeChannelId",X):alert("No YouTube channel found for this Google account.")}catch{alert("Failed to connect YouTube. Please try again.")}}}).requestAccessToken()},triggerGitHubLogin:n=>{const a=`/api/auth/github?redirect_uri=${encodeURIComponent(window.location.href)}${n?`&mode=${n}`:""}`;window.open(a,"github_connect","width=600,height=700")||(window.location.href=a)},handleReserveUsername:async n=>{if(n.preventDefault(),!!c){y("loading"),x("");try{const a=await fetch("/api/profile/reserve",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${N()}`},body:JSON.stringify({username:_})}),r=await a.json();a.ok?(y("success"),B(!0),x(`Username @${r.username} reserved successfully!`)):(y("error"),x(r.error||"Failed to reserve username"))}catch(a){y("error"),x(a instanceof Error?a.message:"Error occurred")}}}}}const se=[{id:"info",label:"Info",icon:"fa-solid fa-id-card"},{id:"social",label:"Social",icon:"fa-solid fa-share-nodes"},{id:"layout",label:"Layout",icon:"fa-solid fa-table-cells-large"},{id:"style",label:"Style",icon:"fa-solid fa-palette"},{id:"deploy",label:"Deploy",icon:"fa-solid fa-rocket"},{id:"integrations",label:"Integrations",icon:"fa-solid fa-plug"},{id:"publish",label:"Publish",icon:"fa-solid fa-circle-check"}],Ve=[{id:"internal",label:"Internal Hosting",icon:"fa-solid fa-server"},{id:"zip",label:"Download ZIP",icon:"fa-solid fa-box"},{id:"github",label:"GitHub Pages",icon:"fa-brands fa-github"},{id:"cloudflare",label:"Cloudflare Workers",icon:"fa-brands fa-cloudflare"}],Pe=[{id:"profile",name:"Profile Card Header",icon:"fa-solid fa-user-tie"},{id:"links",name:"Social Links Grid",icon:"fa-solid fa-link"},{id:"actions",name:"Action Buttons (QR/Contact)",icon:"fa-solid fa-cube"},{id:"techstack",name:"Tech Languages / Skills",icon:"fa-solid fa-code"},{id:"github",name:"GitHub Stats Cards",icon:"fa-brands fa-github"},{id:"portfolio",name:"Portfolio Projects Grid",icon:"fa-solid fa-folder-open"},{id:"youtube",name:"YouTube Stats Card",icon:"fa-brands fa-youtube"},{id:"youtube-videos",name:"YouTube Videos Grid",icon:"fa-brands fa-youtube"}],_t=()=>{var Fe,He,ze,Be,Je,Ke,Me,Ye,We;const{user:c,login:P,logout:N}=pt();p.useEffect(()=>{ut("https://accounts.google.com/gsi/client")},[]);const x=()=>we("google_access_token")||"",[_,g]=p.useState("info"),[W,B]=p.useState("idle"),[j,S]=p.useState("idle"),[z,y]=p.useState(""),[Z,f]=p.useState(""),[L,E]=p.useState("internal"),C=p.useRef(null),{username:m,setUsername:O,isReserved:v,setIsReserved:b,profileConfig:s,setProfileConfig:R,persistBuilderDraft:I,reserveStatus:$,draggedIndex:J,handleConfigChange:l,handleProfileImageFile:u,handleNestedConfigChange:k,handleLinkChange:re,getLinkPlatform:q,handleLinkPlatformChange:xe,addLink:ue,deleteLink:n,toggleBlockVisibility:a,moveBlock:r,handleDragStart:o,handleDragOver:i,handleDrop:F,triggerGoogleLogin:w,triggerYoutubeConnect:K,triggerGitHubLogin:ie,handleReserveUsername:X}=kt({user:c,login:P,getAuthToken:x,setStatusMsg:y}),{showCFDeployForm:A,setShowCFDeployForm:G,cfDomain:M,setCFDomain:V,cfDomainStatus:T,cfDomainMsg:ee,cfConnectStatus:te,handleCheckCloudflareDomain:ne,handleCFDirectDeploy:le,openCFConnectPopup:he,resetCloudflareConnection:Se}=yt({username:m,profileConfig:s,persistBuilderDraft:I,getAuthToken:x,setDeployStatus:S,setStatusMsg:y}),{githubPagesMode:ye,setGithubPagesMode:be,githubRepoName:fe,setGithubRepoName:D,githubConnectStatus:Y,githubConnectMsg:oe,githubResolvedOwner:me,githubResolvedRepo:ce,githubRepoExists:ae,handleCheckGitHubSetup:ke,handleDeployToGitHub:Re}=vt({username:m,user:c,profileConfig:s,persistBuilderDraft:I,setDeployStatus:S,setStatusMsg:y});p.useEffect(()=>{document.title="LinkHubPage Builder"},[]),p.useEffect(()=>{(async()=>{if(!c){typeof window<"u"&&!window.__PROFILE_CONFIG__&&R({...Ge}),O(""),b(!1);return}const h=d=>{d&&(E(d.target),d.target==="cloudflare"&&d.domain&&(V(d.domain),G(!0)),d.target==="github"&&(d.githubRepoName&&D(d.githubRepoName),d.githubPagesMode&&be(d.githubPagesMode)))};if(c.username){const d=c.username.toLowerCase();O(d),b(!0);const U=x();try{if(U){const Q=await fetch("/api/profile/me",{headers:{Authorization:`Bearer ${U}`}});if(Q.ok){const de=await Q.json();R(de),h(de==null?void 0:de.lastDeploy);try{const pe=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${U}`}});if(pe.ok){const Ee=await pe.json();h(Ee==null?void 0:Ee.lastDeploy)}}catch(pe){console.warn("Failed to load last deploy info:",pe)}return}}const H=await fetch(`/api/profile/${d}`);if(H.ok){const Q=await H.json();R(Q),h(Q==null?void 0:Q.lastDeploy);return}}catch(H){console.error("Failed to load profile for username:",d,H)}}try{const d=x();if(d){const U=await fetch("/api/profile/draft",{headers:{Authorization:`Bearer ${d}`}});if(U.ok){const H=await U.json();if(H!=null&&H.config){R(H.config),H.config.adminEmail&&b(!!c.username),h(H==null?void 0:H.lastDeploy);return}}}}catch(d){console.warn("Failed to load builder draft:",d)}R(d=>d.adminEmail===""?{...Ge,adminEmail:c.email,name:c.name?{el:c.name,en:c.name}:{el:"",en:""},profileImage:c.picture||"",contactEmail:c.email,githubUsername:c.username||""}:d)})()},[c]);const{googleCheckStatus:je,setGoogleCheckStatus:et,googleCheckMsg:Oe,setGoogleCheckMsg:tt,resendCheckStatus:Ce,setResendCheckStatus:nt,resendCheckMsg:De,setResendCheckMsg:at,calendlyCheckStatus:Ne,setCalendlyCheckStatus:ot,calendlyCheckMsg:Te,setCalendlyCheckMsg:st,internalCheckStatus:ge,internalCheckMsg:Ue,handleCheckGoogleClientId:rt,handleCheckResendKey:it,handleCheckCalendlyUrl:lt,handleCheckInternalSetup:ct}=wt({profileConfig:s,handleConfigChange:l,user:c,username:m,isReserved:v,getAuthToken:x}),dt=async()=>{if(!(!c||!v)){if(ge!=="ready"){B("error"),y('Please run "Check Internal Setup" before publishing.');return}B("loading"),y("");try{const t={...s};t.adminEmail=c.email,await I(t);const h=await fetch("/api/profile/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${x()}`},body:JSON.stringify({username:m,config:t})});if(h.ok)B("success"),y(`Profile live at: ${window.location.origin}/p/${m}`),await I(t,{target:"internal"});else{const d=await h.json();B("error"),y(d.error||"Failed to save profile")}}catch(t){B("error"),y(t instanceof Error?t.message:"Error saving profile")}}},$e=L==="internal"?ge==="ready":L==="zip"?!0:L==="github"?Y==="connected":L==="cloudflare"?te==="connected":!1;return e.jsxs("div",{className:"min-h-screen bg-bg-primary text-text-primary flex flex-col md:flex-row",children:[e.jsxs("div",{className:"w-full md:w-1/2 p-6 border-r border-border-primary flex flex-col md:h-screen overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between mb-8 pb-4 border-b border-border-primary",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-accent",style:{fontFamily:"var(--font-display)"},children:"LinkHubPage Builder"}),e.jsx("p",{className:"text-xs text-text-secondary",style:{fontFamily:"var(--font-mono)"},children:"linkhubpage.com/builder"})]}),e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("button",{type:"button",onClick:()=>{window.location.href="/"},className:"px-3 py-1.5 rounded-lg text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer",children:"Back"}),c?e.jsxs("div",{className:"text-right",children:[e.jsxs("span",{className:"text-[10px] block font-bold text-text-secondary",children:["Logged in as ",c.name]}),e.jsx("button",{onClick:N,className:"text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Sign Out"})]}):e.jsx("div",{className:"flex gap-2",children:e.jsx("button",{onClick:w,className:"px-3 py-1.5 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Google"})})]})]}),e.jsx("div",{className:"flex items-center gap-1 mb-6 overflow-x-auto scrollbar-none pb-1",children:se.map((t,h)=>{const d=se.findIndex(pe=>pe.id===_),U=se.findIndex(pe=>pe.id==="deploy"),H=h>d&&h>U&&!$e,Q=_===t.id,de=h<d;return e.jsxs(ht.Fragment,{children:[e.jsxs("button",{type:"button",onClick:()=>{H||g(t.id)},disabled:H,"aria-current":Q?"true":void 0,title:t.label,className:`flex flex-shrink-0 flex-col items-center gap-1 px-1.5 py-1 rounded-lg text-[10px] font-bold transition cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${Q?"text-accent":de?"text-text-primary":"text-text-secondary"}`,children:[e.jsx("span",{className:`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${Q?"border-accent bg-accent/10 text-accent":de?"border-emerald-400/50 bg-emerald-400/10 text-emerald-300":"border-border-primary text-text-secondary"}`,children:de?e.jsx("i",{className:"fa-solid fa-check text-[9px]","aria-hidden":"true"}):h+1}),e.jsx("span",{className:"hidden sm:block",children:t.label})]}),h<se.length-1&&e.jsx("div",{className:`h-px flex-1 min-w-[8px] ${h<d?"bg-emerald-400/50":"bg-border-primary"}`})]},t.id)})}),e.jsxs("div",{className:"flex-1 overflow-y-auto pr-1.5 space-y-6",children:[_==="info"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (Greek)"}),e.jsx("input",{type:"text",value:((Fe=s.name)==null?void 0:Fe.el)||"",onChange:t=>k("name","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Display Name (English)"}),e.jsx("input",{type:"text",value:((He=s.name)==null?void 0:He.en)||"",onChange:t=>k("name","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (Greek)"}),e.jsx("input",{type:"text",value:((ze=s.bio)==null?void 0:ze.el)||"",onChange:t=>k("bio","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Bio (English)"}),e.jsx("input",{type:"text",value:((Be=s.bio)==null?void 0:Be.en)||"",onChange:t=>k("bio","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (Greek)"}),e.jsx("input",{type:"text",value:s.location.el,onChange:t=>k("location","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Location (English)"}),e.jsx("input",{type:"text",value:s.location.en,onChange:t=>k("location","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Je=s.skillsTitle)==null?void 0:Je.el)||"",onChange:t=>k("skillsTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Skills Section Title (English)"}),e.jsx("input",{type:"text",value:((Ke=s.skillsTitle)==null?void 0:Ke.en)||"",onChange:t=>k("skillsTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (Greek)"}),e.jsx("input",{type:"text",value:((Me=s.portfolioTitle)==null?void 0:Me.el)||"",onChange:t=>k("portfolioTitle","el",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Portfolio Section Title (English)"}),e.jsx("input",{type:"text",value:((Ye=s.portfolioTitle)==null?void 0:Ye.en)||"",onChange:t=>k("portfolioTitle","en",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Profile Image"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"url",placeholder:"https://... or upload a file",value:s.profileImage,onChange:t=>l("profileImage",t.target.value),className:"flex-1 h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none focus:border-accent"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=C.current)==null?void 0:t.click()},className:"shrink-0 h-11 px-4 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Upload"}),e.jsx("input",{ref:C,type:"file",accept:"image/*",className:"hidden",onChange:t=>{var d;const h=(d=t.target.files)==null?void 0:d[0];h&&u(h),t.target.value=""}})]})]}),e.jsxs("div",{className:"flex flex-wrap gap-6 pt-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showStatusBadge",checked:s.showStatusBadge,onChange:t=>l("showStatusBadge",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showStatusBadge",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Show Status Beacon"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"isAvailable",checked:s.isAvailable,onChange:t=>l("isAvailable",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"isAvailable",className:"text-xs font-bold text-text-secondary cursor-pointer",children:"Is Available (Green Beacon)"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox",id:"showGreeting",checked:s.showGreeting!==!1,onChange:t=>l("showGreeting",t.target.checked),className:"w-4 h-4 rounded border-border-primary accent-accent cursor-pointer"}),e.jsx("label",{htmlFor:"showGreeting",className:"text-xs font-bold text-text-secondary cursor-pointer",children:'Show Greeting Text (e.g. "Good morning", "Καλημέρα")'})]})]}),e.jsxs("div",{className:"space-y-1.5 pt-2",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Available From / Since Date"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"e.g. 06/07/2026 or July 2026",value:s.availableFromDate||"",onChange:t=>l("availableFromDate",t.target.value),className:"flex-1 h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("button",{type:"button",onClick:()=>{const t=new Date,h=String(t.getDate()).padStart(2,"0"),d=String(t.getMonth()+1).padStart(2,"0"),U=t.getFullYear();l("availableFromDate",`${h}/${d}/${U}`)},className:"px-3 bg-bg-secondary border border-border-primary hover:bg-bg-primary hover:border-accent rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1 text-text-secondary hover:text-text-primary",children:"📅 Today"})]}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specify the date from which your status is applicable. Click the button to automatically set today's date."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Include Dates (Always Available)"}),e.jsx("textarea",{value:s.statusIncludeDates||"",onChange:t=>l("statusIncludeDates",t.target.value),placeholder:"e.g. 10/07/2026 - 15/07/2026, 25/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are always available."})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase",children:"Exclude Dates (Always Unavailable)"}),e.jsx("textarea",{value:s.statusExcludeDates||"",onChange:t=>l("statusExcludeDates",t.target.value),placeholder:"e.g. 01/08/2026 - 07/08/2026",className:"w-full min-h-[60px] p-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition resize-y"}),e.jsx("p",{className:"text-[9px] text-text-secondary",children:"Specific dates or ranges (comma/line separated) when you are unavailable (e.g. vacations)."})]})]}),_==="social"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Manage Link Items"}),e.jsx("button",{onClick:ue,className:"px-2 py-1 bg-accent rounded text-[10px] font-bold cursor-pointer",children:"+ Add"})]}),e.jsx("div",{className:"space-y-3",children:s.links.map((t,h)=>{var d,U;return e.jsxs("div",{className:"bg-bg-secondary border border-border-primary p-3 rounded-xl flex flex-col gap-2 relative",children:[e.jsx("button",{onClick:()=>n(h),className:"absolute top-2 right-2 text-[10px] text-red-400 font-bold hover:underline cursor-pointer",children:"Delete"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link URL",value:t.url,onChange:H=>re(h,"url",H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsxs("select",{value:q(t),onChange:H=>xe(h,H.target.value),className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none",children:[e.jsx("option",{value:"instagram",children:"Instagram"}),e.jsx("option",{value:"linkedin",children:"LinkedIn"}),e.jsx("option",{value:"github",children:"GitHub"}),e.jsx("option",{value:"website",children:"Custom Link / Website"}),e.jsx("option",{value:"calendly",children:"Book Meeting (Calendly)"}),e.jsx("option",{value:"vcard",children:"Save Contact Card (vCard)"}),e.jsx("option",{value:"email",children:"Contact Form / Email"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 pr-12",children:[e.jsx("input",{type:"text",placeholder:"Link Title (Greek) - optional",value:((d=t.title)==null?void 0:d.el)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},el:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"}),e.jsx("input",{type:"text",placeholder:"Link Title (English) - optional",value:((U=t.title)==null?void 0:U.en)||"",onChange:H=>{const Q={...t.title||{el:"",en:""},en:H.target.value};re(h,"title",Q)},className:"bg-bg-primary border border-border-primary rounded px-2 py-1 text-xs focus:outline-none"})]})]},h)})})]}),_==="style"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-[10px] font-bold text-text-secondary uppercase mb-2",children:"Default Theme"}),e.jsxs("select",{value:s.defaultTheme,onChange:t=>l("defaultTheme",t.target.value),className:"w-full h-11 bg-bg-secondary border border-border-primary rounded-xl px-4 text-sm focus:outline-none",children:[e.jsx("option",{value:"dark",children:"Dark"}),e.jsx("option",{value:"light",children:"Light"}),e.jsx("option",{value:"neon",children:"Neon"}),e.jsx("option",{value:"cyberpunk",children:"Cyberpunk"}),e.jsx("option",{value:"sunset",children:"Sunset"}),e.jsx("option",{value:"midnight",children:"Midnight"}),e.jsx("option",{value:"dracula",children:"Dracula"})]})]})}),_==="layout"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"pb-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Configure Profile Layout"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Drag and drop sections to rearrange them, or toggle their visibility switches."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Add Blocks"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(()=>{const t=s.layout||ft,h=Ie.every(U=>t.includes(U)),d=Ae.every(U=>t.includes(U));return e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",disabled:h,onClick:()=>l("layout",Xe(s.layout,Ie)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-github"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add GitHub blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:h?"Already added":"Skills, GitHub stats, portfolio"})]})]}),e.jsxs("button",{type:"button",disabled:d,onClick:()=>l("layout",Xe(s.layout,Ae)),className:"p-3.5 bg-bg-secondary border border-border-primary hover:border-accent/40 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs shrink-0",children:e.jsx("i",{className:"fa-brands fa-youtube"})}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("span",{className:"text-xs font-semibold block",children:"+ Add YouTube blocks"}),e.jsx("span",{className:"text-[10px] text-text-secondary block",children:d?"Already added":"Subscriber count, views, latest videos"})]})]})]})})()})]}),Ie.some(t=>(s.layout||[]).includes(t))&&!s.githubUsername&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Connect GitHub for real stats"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Your Skills/GitHub Stats/Portfolio blocks need a connected account: stats count your private repos too, portfolio only ever shows public ones."})]}),e.jsx("button",{type:"button",onClick:()=>ie("stats"),className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"})]}),Ae.some(t=>(s.layout||[]).includes(t))&&e.jsxs("div",{className:"p-3.5 bg-bg-secondary border border-amber-500/30 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:s.youtubeChannelId?"YouTube channel connected":"Connect YouTube"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:s.youtubeChannelId?`Channel ID: ${s.youtubeChannelId}`:"Sign in with the Google account that owns your channel to pull subscriber count, views, and latest videos."})]}),e.jsx("button",{type:"button",onClick:K,className:"shrink-0 px-4 py-2 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:s.youtubeChannelId?"Reconnect YouTube":"Connect YouTube"})]}),e.jsx("div",{className:"space-y-3",children:(s.layout||["profile","links","actions","techstack","github","portfolio"]).map((t,h)=>{const d=Pe.find(U=>U.id===t);return d?e.jsxs("div",{draggable:!0,onDragStart:U=>o(U,h),onDragOver:i,onDrop:U=>F(U,h),className:`flex items-center justify-between p-3.5 bg-bg-secondary border rounded-xl cursor-grab active:cursor-grabbing hover:border-accent/45 transition duration-150 ${J===h?"opacity-40 border-accent/40":"border-border-primary"}`,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("i",{className:"fa-solid fa-bars text-text-secondary hover:text-text-primary"}),e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-accent text-xs",children:e.jsx("i",{className:d.icon})}),e.jsx("span",{className:"text-xs font-semibold",children:d.name})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",disabled:h===0,onClick:()=>r(h,"up"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-up"})}),e.jsx("button",{type:"button",disabled:h===(s.layout||[]).length-1,onClick:()=>r(h,"down"),className:"w-7 h-7 bg-bg-primary hover:bg-bg-secondary border border-border-primary disabled:opacity-30 rounded flex items-center justify-center cursor-pointer transition text-[10px]",children:e.jsx("i",{className:"fa-solid fa-chevron-down"})}),t!=="profile"&&e.jsx("button",{type:"button",onClick:()=>a(t),className:"text-[10px] font-bold text-red-400 hover:underline px-2 py-1 cursor-pointer",children:"Hide"})]})]},t):null})}),Pe.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).length>0&&e.jsxs("div",{className:"mt-6 pt-4 border-t border-border-primary",children:[e.jsx("h4",{className:"text-[10px] font-bold text-text-secondary uppercase mb-3",children:"Hidden Sections (Click to Show)"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:Pe.filter(t=>!(s.layout||["profile","links","actions","techstack","github","portfolio"]).includes(t.id)).map(t=>e.jsxs("button",{type:"button",onClick:()=>a(t.id),className:"p-3 bg-bg-secondary hover:bg-bg-secondary/80 border border-border-primary hover:border-accent/40 rounded-xl text-left flex items-center gap-3 cursor-pointer transition",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-bg-primary flex items-center justify-center text-text-secondary text-xs",children:e.jsx("i",{className:t.icon})}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs block font-semibold",children:t.name}),e.jsx("span",{className:"text-[9px] text-accent block font-medium",children:"+ Add to Profile"})]})]},t.id))})]})]}),_==="integrations"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-2xl border border-border-primary bg-bg-secondary/60 p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Integrations Setup Guide"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Add your own provider keys below. These values are used by your deployed page/profile and can be different per user profile."}),e.jsxs("p",{className:"text-[10px] text-text-secondary",children:["Security note: builder deployments use namespaced secret keys prefixed with ",e.jsx("span",{className:"text-text-primary",children:"BUILDER_"})," so they never collide with this site's own runtime secrets."]}),e.jsxs("div",{className:"text-[10px] flex flex-wrap gap-3",children:[e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Credentials"}),e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub OAuth Apps"}),e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"}),e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"}),e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"})]}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1.5",children:[e.jsx("li",{children:"Google OAuth: Needed for Google Login flows in your profile and builder auth scenarios."}),e.jsx("li",{children:'GitHub OAuth: Needed for "Login with GitHub" and GitHub deployment workflows.'}),e.jsx("li",{children:"Resend: Needed for contact form email delivery from /api/send-email."}),e.jsx("li",{children:"Google Analytics: Optional tracking for visits and key events."}),e.jsx("li",{children:"Calendly: Needed for meeting booking links and popup scheduling flow."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"GitHub OAuth (Worker Environment)"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"GitHub OAuth values are configured on Cloudflare Worker environment, not stored in this profile config."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create an OAuth App in ",e.jsx("a",{href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"GitHub Developer Settings"}),"."]}),e.jsx("li",{children:"Homepage URL: https://linkhubpage.com"}),e.jsx("li",{children:"Authorization callback URL: https://linkhubpage.com/api/auth/github/callback"}),e.jsxs("li",{children:["Set ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_ID"})," in Worker Variables and ",e.jsx("span",{className:"text-text-primary",children:"GITHUB_CLIENT_SECRET"})," in Worker Secrets."]}),e.jsx("li",{children:"When using GitHub Pages deploy, integration values are also synced to repository Actions Secrets through the GitHub API."}),e.jsx("li",{children:"If you logged in before this update, sign in with GitHub again to grant the latest permissions."}),e.jsxs("li",{children:["Open ",e.jsx("a",{href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Cloudflare Dashboard"})," -> Workers & Pages -> linkhubpage -> Settings -> Variables and Secrets."]})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Client ID (OAuth)"}),e.jsx("input",{type:"text",value:s.googleClientId||"",onChange:t=>{l("googleClientId",t.target.value),et("idle"),tt("")},placeholder:"e.g. 961938932307-s2ofhoqrm0qcjbrds8klgjjs...",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Configure a custom Google OAuth Client ID to support Google Login on your profile."}),e.jsx("button",{type:"button",onClick:rt,disabled:je==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:je==="checking"?"Checking...":"Check"})]}),Oe&&e.jsx("p",{className:`text-[10px] ${je==="valid"?"text-emerald-300":je==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Oe}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://console.cloud.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Cloud Console Credentials"})," -> create OAuth Client ID."]}),e.jsx("li",{children:"Create OAuth Client ID (Web application)."}),e.jsx("li",{children:"Add your domain in Authorized JavaScript origins (e.g. https://linkhubpage.com)."}),e.jsx("li",{children:"Copy the Client ID and paste it here."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Resend API Key (Contact Email)"}),e.jsx("input",{type:"password",value:s.resendApiKey||"",onChange:t=>{l("resendApiKey",t.target.value),nt("idle"),at("")},placeholder:"re_xxxxxxxxxxxxxxxx",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:it,disabled:Ce==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ce==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Provide your Resend API Key to receive emails from the contact form. (Kept secure on the server, not exposed to profile visitors)."}),De&&e.jsx("p",{className:`text-[10px] ${Ce==="valid"?"text-emerald-300":Ce==="invalid"?"text-amber-300":"text-text-secondary"}`,children:De}),e.jsxs("p",{className:"text-[9px] text-text-secondary",children:["During Cloudflare direct deploy, this key is sent as Worker Secret (",e.jsx("span",{className:"text-text-primary",children:"BUILDER_RESEND_API_KEY"}),") via API and is not embedded in public config files."]}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://resend.com/api-keys",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Resend API Keys"})," -> create a new API key."]}),e.jsx("li",{children:"Set and verify your sending domain in Resend before production use."}),e.jsx("li",{children:"Use a valid sender (for example no-reply@yourdomain.com) that belongs to your verified domain."}),e.jsx("li",{children:"Paste the key in this field to enable contact form delivery."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Google Analytics ID"}),e.jsx("input",{type:"text",value:s.googleAnalyticsId||"",onChange:t=>l("googleAnalyticsId",t.target.value),placeholder:"e.g. G-XXXXXXXXXX",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:"Track visitors on your profile using your Google Analytics ID."}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Go to ",e.jsx("a",{href:"https://analytics.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Google Analytics"})," -> Admin -> Data Streams."]}),e.jsx("li",{children:"Create/select a Web data stream for your domain."}),e.jsx("li",{children:"Copy the Measurement ID (format: G-XXXXXXXXXX)."}),e.jsx("li",{children:"Paste it here to activate analytics tracking."})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-[11px] font-bold uppercase tracking-wider text-text-secondary",children:"Calendly URL"}),e.jsx("input",{type:"url",value:s.calendlyUrl,onChange:t=>{l("calendlyUrl",t.target.value),ot("idle"),st("")},placeholder:"e.g. https://calendly.com/your-username/30min",className:"w-full h-10 px-3 bg-bg-secondary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"}),e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("button",{type:"button",onClick:lt,disabled:Ne==="checking",className:"px-3 h-8 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-[10px] font-bold cursor-pointer disabled:opacity-50",children:Ne==="checking"?"Checking...":"Check"})}),e.jsx("p",{className:"text-[10px] text-text-secondary",children:'Configure the meeting booking URL used by the "Book Meeting" action.'}),Te&&e.jsx("p",{className:`text-[10px] ${Ne==="valid"?"text-emerald-300":Ne==="invalid"?"text-amber-300":"text-text-secondary"}`,children:Te}),e.jsxs("ul",{className:"text-[9px] text-text-secondary space-y-1 pl-3 list-disc",children:[e.jsxs("li",{children:["Create/select your event type from ",e.jsx("a",{href:"https://calendly.com/app/event_types/user/me",target:"_blank",rel:"noopener noreferrer",className:"text-accent hover:underline",children:"Calendly Event Types"}),"."]}),e.jsx("li",{children:"Copy the share URL (for example https://calendly.com/your-username/30min)."}),e.jsx("li",{children:"Paste it here so visitors can book directly from your profile."})]})]})]}),_==="deploy"&&e.jsx("div",{className:"space-y-6",children:c?e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:X,className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Reserve Username Handle"}),e.jsx("p",{className:"text-[11px] text-text-secondary",children:"Determine your profile path handle (e.g. linkhubpage.com/p/handle)."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",placeholder:"myhandle",value:m,disabled:v,onChange:t=>O(t.target.value.toLowerCase().replace(/[^a-z0-9_-]/g,"")),className:"flex-1 h-10 bg-bg-primary border border-border-primary rounded-xl px-3 text-xs focus:outline-none disabled:opacity-50",required:!0}),e.jsx("button",{type:"submit",disabled:v||$==="loading",className:"px-4 bg-accent text-white rounded-xl text-xs font-bold hover:bg-accent/80 disabled:opacity-50 cursor-pointer",children:"Reserve"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold",children:"Select Deployment Target"}),e.jsx("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4",children:Ve.map(t=>e.jsxs("button",{type:"button",onClick:()=>E(t.id),"aria-current":L===t.id?"true":void 0,className:`flex flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition cursor-pointer ${L===t.id?"border-accent bg-accent/10 text-accent":"border-border-primary bg-bg-secondary text-text-secondary hover:border-accent/40 hover:text-text-primary"}`,children:[e.jsx("i",{className:`${t.icon} text-base`,"aria-hidden":"true"}),e.jsx("span",{className:"text-[10px] font-bold leading-tight",children:t.label})]},t.id))}),L==="internal"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Internal LinkHubPage Hosting"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Deploy to linkhubpage.com/p/",m||"username"]}),Ue&&e.jsx("p",{className:`text-[10px] mt-1 ${ge==="ready"?"text-emerald-300":ge==="error"?"text-amber-300":"text-text-secondary"}`,children:Ue})]}),e.jsx("button",{type:"button",onClick:ct,disabled:ge==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:ge==="checking"?"Checking...":"Check Internal Setup"})]}),L==="zip"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4",children:[e.jsx("span",{className:"text-xs font-bold block",children:"Download ZIP Package"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Export profile static assets to host anywhere. No connection needed. Download happens on the Publish step."})]}),L==="github"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Deploy to GitHub Pages"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Choose deployment URL mode: root site or repo subpath"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ye==="subpath",onChange:()=>be("subpath"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Subpath mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/repo/"})]})]}),e.jsxs("label",{className:"flex items-start gap-2 p-3 border border-border-primary rounded-xl cursor-pointer bg-bg-primary/50",children:[e.jsx("input",{type:"radio",name:"github-pages-mode",checked:ye==="root",onChange:()=>be("root"),className:"mt-0.5"}),e.jsxs("span",{className:"text-[11px] text-text-secondary",children:[e.jsx("span",{className:"text-text-primary font-semibold block",children:"Root mode"}),"Deploy to ",e.jsx("span",{className:"text-text-primary",children:"https://user.github.io/"})," (no trailing repo path)"]})]})]}),ye==="subpath"?e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Repository Name"}),e.jsx("input",{type:"text",value:fe,onChange:t=>D(t.target.value.toLowerCase().replace(/[^a-z0-9_.-]/g,"")),placeholder:"linkhubpage-profile",className:"w-full h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition"})]}):e.jsxs("p",{className:"text-[10px] text-amber-300",children:["Root mode uses repo name ",e.jsx("span",{className:"text-text-primary font-semibold",children:"<your-github-username>.github.io"}),". If it already exists, deployment updates that site."]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[we("github_access_token")?e.jsx("button",{type:"button",onClick:ke,disabled:Y==="checking",className:"w-full sm:w-auto px-4 py-2.5 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold cursor-pointer disabled:opacity-50",children:Y==="checking"?"Checking GitHub...":"Check GitHub Setup"}):e.jsx("button",{type:"button",onClick:()=>ie(),className:"w-full sm:w-auto px-4 py-2.5 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Connect GitHub"}),me&&ce&&e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsxs("span",{className:"text-text-primary font-semibold",children:[me,"/",ce]}),ae===!0?" (exists)":ae===!1?" (will be created)":""]})]}),oe&&e.jsx("p",{className:`text-[10px] ${Y==="connected"?"text-emerald-300":Y==="error"?"text-amber-300":"text-text-secondary"}`,children:oe})]}),L==="cloudflare"&&e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Cloudflare Worker Deployment"}),e.jsx("span",{className:"text-[10px] text-text-secondary",children:"Host your profile on your own Cloudflare account (like our setup, without the builder)"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[e.jsx("button",{type:"button",onClick:()=>xt(m||"custom",{...s,adminEmail:(c==null?void 0:c.email)||""}),className:"px-3 py-2 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-xl text-xs font-bold transition cursor-pointer text-center text-text-secondary hover:text-text-primary",children:"📦 Download Worker ZIP"}),e.jsx("button",{type:"button",onClick:()=>G(t=>!t),className:`px-3 py-2 border rounded-xl text-xs font-bold transition cursor-pointer text-center ${A?"bg-accent text-white border-accent":"bg-bg-primary border-border-primary hover:bg-bg-secondary text-text-primary"}`,children:"🚀 Deploy Directly via API"})]}),A&&e.jsxs("div",{className:"pt-4 border-t border-border-primary space-y-3",children:[e.jsxs("div",{className:"rounded-xl border border-border-primary bg-bg-primary/50 p-3 space-y-2",children:[e.jsx("p",{className:"text-[10px] font-bold uppercase tracking-wider text-text-secondary",children:"How this works"}),e.jsxs("ul",{className:"text-[10px] text-text-secondary space-y-1",children:[e.jsx("li",{children:"1. Enter your domain (or subdomain) and check it’s on Cloudflare."}),e.jsx("li",{children:"2. A window opens to connect your Cloudflare account, nothing else to configure."}),e.jsx("li",{children:"3. Once connected, go to the Publish step to deploy."})]})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-[10px] font-bold text-text-secondary uppercase",children:"Domain to Deploy"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"text",value:M,onChange:t=>{V(t.target.value),Se()},placeholder:"e.g. profile.yourdomain.com",className:"flex-1 h-9 px-3 bg-bg-primary border border-border-primary rounded-lg focus:border-accent outline-none text-xs transition",required:A}),e.jsx("button",{type:"button",onClick:ne,disabled:T==="checking",className:"px-3 h-9 bg-bg-primary border border-border-primary hover:bg-bg-secondary rounded-lg text-xs font-bold cursor-pointer disabled:opacity-50",children:T==="checking"?"Checking...":"Check Domain"})]}),ee&&e.jsx("p",{className:`text-[10px] ${T==="valid"?"text-emerald-300":T==="invalid"?"text-amber-300":"text-text-secondary"}`,children:ee}),T==="valid"&&te!=="connected"&&e.jsx("button",{type:"button",onClick:he,disabled:te==="connecting",className:"text-[10px] font-bold text-accent hover:underline cursor-pointer disabled:opacity-50 disabled:no-underline disabled:cursor-default",children:te==="connecting"?"Connecting to Cloudflare...":"Retry Cloudflare login"})]})]})]})]})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to access hosting and deployment options."}),e.jsx("button",{onClick:w,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),_==="publish"&&e.jsx("div",{className:"space-y-6",children:c?e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold block",children:"Ready to Publish"}),e.jsxs("span",{className:"text-[10px] text-text-secondary",children:["Target: ",e.jsx("span",{className:"text-text-primary font-semibold",children:(We=Ve.find(t=>t.id===L))==null?void 0:We.label})]})]}),L==="internal"&&e.jsx("button",{type:"button",onClick:dt,disabled:!v||W==="loading"||ge!=="ready",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:W==="loading"?"Publishing...":"Publish Profile"}),L==="zip"&&e.jsx("button",{type:"button",onClick:()=>{const t={...s,adminEmail:(c==null?void 0:c.email)||""};bt(m||"custom",t),I(t,{target:"zip"})},className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 text-white rounded-xl text-xs font-bold cursor-pointer",children:"Download ZIP"}),L==="github"&&e.jsx("button",{type:"button",onClick:Re,disabled:j==="loading"||Y!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:j==="loading"?"Publishing...":"Deploy to GitHub"}),L==="cloudflare"&&e.jsx("button",{type:"button",onClick:le,disabled:j==="loading"||te!=="connected",className:"w-full px-4 py-2.5 bg-accent hover:bg-accent/80 disabled:opacity-50 text-white rounded-xl text-xs font-bold cursor-pointer",children:j==="loading"?"Publishing...":"Start Cloudflare Deployment"})]}):e.jsxs("div",{className:"bg-bg-secondary border border-border-primary rounded-2xl p-6 text-center",children:[e.jsx("span",{className:"text-xl block mb-2",children:"🔒 Account Required"}),e.jsx("p",{className:"text-xs text-text-secondary mb-4",children:"Please log in with Google to publish."}),e.jsx("button",{onClick:w,className:"px-4 py-2 bg-accent/15 border border-accent/20 rounded-lg text-xs font-bold hover:bg-accent/30 cursor-pointer",children:"Login with Google"})]})}),z&&(()=>{const t=[...z.matchAll(/https?:\/\/\S+/g)].map(d=>d[0].replace(/[.,;]+$/,"")),h=t.reduce((d,U)=>d.replace(U,""),z).replace(/\s{2,}/g," ").trim();return e.jsxs("div",{className:"p-3 bg-bg-secondary border border-border-primary rounded-xl text-xs text-center font-semibold space-y-2",children:[h&&e.jsx("div",{children:h}),t.map(d=>e.jsxs("div",{className:"flex items-center justify-center gap-2",children:[e.jsx("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"text-accent underline break-all font-normal",children:d}),e.jsx("button",{type:"button",onClick:()=>{navigator.clipboard.writeText(d),f(d),setTimeout(()=>f(""),2e3)},className:"shrink-0 px-2 py-1 border border-border-primary hover:border-accent rounded-lg text-[10px] font-bold text-text-secondary hover:text-text-primary transition cursor-pointer",children:Z===d?"✓ Copied":"📋 Copy"})]},d))]})})(),e.jsxs("div",{className:"flex items-center justify-between gap-3 pt-2",children:[e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===_);t>0&&g(se[t-1].id)},disabled:se.findIndex(t=>t.id===_)===0,className:"px-4 py-2 rounded-xl text-xs font-bold border border-border-primary bg-bg-secondary hover:border-accent hover:text-accent transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Back"}),e.jsx("button",{type:"button",onClick:()=>{const t=se.findIndex(h=>h.id===_);t<se.length-1&&g(se[t+1].id)},disabled:_===se[se.length-1].id||_==="deploy"&&!$e,className:"px-4 py-2 rounded-xl text-xs font-bold bg-accent hover:bg-accent/80 text-white transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",children:"Next"})]})]})]}),e.jsxs("div",{className:"w-full md:w-1/2 bg-zinc-950 flex items-center justify-center p-6 min-h-[500px] md:min-h-screen relative",children:[e.jsx(mt,{}),e.jsxs("div",{"data-theme":s.defaultTheme,className:"w-[340px] h-[680px] bg-bg-primary text-text-primary border-[8px] border-zinc-800 rounded-[48px] shadow-2xl relative overflow-y-auto overflow-x-hidden flex flex-col p-4 scrollbar-none z-10 transition-colors duration-300",children:[e.jsxs("div",{className:"w-32 h-5 bg-zinc-800 rounded-b-2xl absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-20",children:[e.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-zinc-900"}),e.jsx("div",{className:"w-8 h-1 rounded bg-zinc-900"})]}),e.jsx("div",{className:"flex-1 mt-6 flex flex-col h-full overflow-y-auto",children:e.jsx(gt,{isPreview:!0,config:s})})]})]})]})};export{_t as Builder};

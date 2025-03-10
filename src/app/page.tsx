import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  req.url = req.url.replace('/api/proxy', ''); // Remove a rota '/api/proxy' da URL
  proxy.web(req, res, {
    target: 'http://dmz.intercase.com.br:8080',
    changeOrigin: true,
    secure: false, // Se usar HTTPS no destino, mude para true
  });
}

export const config = {
  api: {
    bodyParser: false, // Necessário para que o proxy funcione
  },
};
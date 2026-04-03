import axios from 'axios';

// Detect if we are running under Vercel in production
const isProduction = import.meta.env?.PROD || process.env.NODE_ENV === 'production';

const api = axios.create({
  baseURL: isProduction ? '/api' : 'http://localhost:5000/api',
});

// Automatically jam the JWT into the headers if we have one sitting in localStorage
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ethereal_token');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Pass along our mock session ID for the cart since cookies aren't hooked up yet
    let sessionId = localStorage.getItem('ethereal_session');
    if (!sessionId) {
      sessionId = `anon_${Date.now()}`;
      localStorage.setItem('ethereal_session', sessionId);
    }
    config.headers['x-session-id'] = sessionId;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

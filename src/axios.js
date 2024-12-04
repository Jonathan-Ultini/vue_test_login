import axios from 'axios';

// Crea un'istanza di Axios configurata con l'URL di base del backend Laravel
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',  // URL del backend Laravel
  withCredentials: true, // Consente l'invio di cookie (se necessario)
});

// Verifica se c'è un token salvato nel localStorage
const token = localStorage.getItem('auth_token');

// Se il token esiste, aggiungilo come intestazione Authorization per tutte le richieste
if (token) {
  axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

// Aggiungi un interceptor per gestire gli errori di autenticazione
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Token non valido o scaduto, esegui il logout
      localStorage.removeItem('auth_token');
      delete axiosInstance.defaults.headers['Authorization'];

      // Reindirizza alla pagina di login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

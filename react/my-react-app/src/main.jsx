import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // لازم تستوردها
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>    {/* أضف هذا */}
      <App />
    </BrowserRouter>
  </StrictMode>
);

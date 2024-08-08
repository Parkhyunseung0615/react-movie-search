import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode: uesEffect 훅을 제대로 사용했는지 테스트하기 위해 두 번 실행
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

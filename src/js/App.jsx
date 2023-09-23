import { createRoot } from "react-dom/client";
import React from 'react';
import { Card } from './components/card.jsx';

function App() {
  const cardData = {
    title: 'Título del evento',
    image: '../assets/music-001_w50seu.jpg',
    date: '2023-09-22',
    address: '123 Calle Principal',
    city: 'Ciudad',
    state: 'Estado',
    price: '$20',
    interaction: 'going',
    id: '1',
    category: 'Evento',
  };
  const cardData2 = {
    title: 'Concierto en Vivo',
    image: '../assets/concert-001.jpg',
    date: '2023-10-15',
    address: '456 Calle Secundaria',
    city: 'Otra Ciudad',
    state: 'Otro Estado',
    price: '$25',
    interaction: 'interested',
    id: '2',
    category: 'Concierto',
  };

  return (
    <div className="App">
      <ol id='gallery' className="container error-container gallery home-gallery">
        <Card {...cardData} />
        <Card {...cardData2} />
      </ol>
    </div>
import { Header } from "./components/react/Header";
import { MainContent } from "./components/react/MainContent";
const App = () => {
  return (
    <>
          <Header />  
          <MainContent />
    </>
  );
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
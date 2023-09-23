import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('music');

  const handleTabClick = (category) => {
    setActiveTab(category); 
  };

  return (
    <div id="tabs" className="header__tabs">
      <button
        data-category="music"
        className={activeTab === 'music' ? 'active' : ''}
        onClick={() => handleTabClick('music')}
      >
        Music
      </button>
      <button
        data-category="sports"
        className={activeTab === 'sports' ? 'active' : ''}
        onClick={() => handleTabClick('sports')}
      >
        Sports
      </button>
      <button
        data-category="business"
        className={activeTab === 'business' ? 'active' : ''}
        onClick={() => handleTabClick('business')}
      >
        Business
      </button>
      <button
        data-category="food"
        className={activeTab === 'food' ? 'active' : ''}
        onClick={() => handleTabClick('food')}
      >
        Food
      </button>
      <button
        data-category="art"
        className={activeTab === 'art' ? 'active' : ''}
        onClick={() => handleTabClick('art')}
      >
        Art
      </button>
    </div>
  );
}

export {Tabs};

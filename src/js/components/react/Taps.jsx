
const Tabs = () => {
  return (
    <div id="tabs" className="header__tabs">
      <button data-category="music" className="active">Music</button>
      <button data-category="sports">Sports</button>
      <button data-category="business">Business</button>
      <button data-category="food">Food</button>
      <button data-category="art">Art</button>
    </div>
  );
}

export {Tabs};

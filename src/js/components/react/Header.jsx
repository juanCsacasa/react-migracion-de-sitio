import { Tabs } from "./Taps";
const Header = () => {
  return (
    <header id="header" className="header">
      <a href="./account.html" id="my-account">My account &rarr;</a>
      <Tabs />
    </header>
  );
}

export { Header };

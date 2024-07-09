import Navbar from "./Navbar";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="pagecontainer relative">
      <Logo />
      <Navbar />
    </header>
  );
}

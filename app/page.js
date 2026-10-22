import Image from "next/image";
import Navbar from "./components/navbar/navbar.jsx";
import Header from "./components/header/header.jsx";

export default function Home() {
  return (
    <section className="bg-[#050914] text-[#E2E8F0] min-h-screen">
      <div>
        <Navbar />
        <Header />
      </div>
    </section>
  );
};

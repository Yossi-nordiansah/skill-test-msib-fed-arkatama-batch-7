import Image from "next/image";
import Navbar from './components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="">
        <Navbar/>
      </div>
    </main>
  );
}

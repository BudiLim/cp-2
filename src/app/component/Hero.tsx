import Image from "next/image";
import foto from "../../Assets/hero.jpeg"; 

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={foto}
        alt="foto"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute font-bold text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">JUST DO IT</h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-7 bg-black bg-opacity-40 p-3 rounded-2xl">Nike, Inc., founded in 1964, is a global leader in athletic footwear, apparel, and equipment, headquartered in Beaverton, Oregon.</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Login from "./components/Login";

export default function Home() {
  const homeURL = "/homeBG.jpg";
  const homeURL2 = "/home2.jpg";
  const homeURL3 = "/home3.jpg";
  const homeURL4 = "/home4.jpg";

  return (
    <main className="flex flex-col items-center justify-between p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>This is your home.</p>
        <Login />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src={homeURL}
          alt="Home"
          width={1922}
          height={1080}
          layout="intrinsic"
          priority={false} 
        />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src={homeURL2}
          alt="Home 2"
          width={1922}
          height={1080}
          layout="intrinsic"
          priority={false}
        />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src={homeURL3}
          alt="Home 3"
          width={1922}
          height={1080}
          layout="intrinsic"
          priority={false}
        />
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Image
          src={homeURL4}
          alt="Home 4"
          width={1922}
          height={1080}
          layout="intrinsic"
          priority={false}
        />
      </div>
    </main>
  );
}

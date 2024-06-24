"use client"

import "./globals.css";
import Navigation from "./components/navigation";
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic'
 
const DynamicFooter = dynamic(() => import('./components/Footer'), {
  loading: () => <p>Loading...</p>,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <html lang="en">
      <head></head>
      <body>
        <div className="flex flex-col mx-auto max-w-1xl px-4 pt-8 pb-16">
          <div className="flex-grow">
            <h1>
              Global Layout - Logo
              <button
                onClick={handleGoBack}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded float-right"
              >
                Back
              </button>
            </h1>
            <Navigation />
            <div className="my-0 py-16">{children}</div>
            <DynamicFooter />
          </div>
        </div>
      </body>
    </html>
  );
}

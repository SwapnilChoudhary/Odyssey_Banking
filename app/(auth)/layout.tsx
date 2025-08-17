import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="border-4 border-sky-500 hover:shadow-sky-600 hover:border-sky-500 rounded-lg shadow-sky-300 shadow-xl ">
          <Image src="/icons/preview.png" alt="Auth image" width={700} height={700} className="rounded-lg shadow-xl"/>
        </div>
      </div>
     </main>
    );
  }
  
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Image 
            src="/electos_logo.svg"
            width="536"
            height="131"
            alt="Logo"
          >

          </Image>
        </div>
    </main>
  );
}

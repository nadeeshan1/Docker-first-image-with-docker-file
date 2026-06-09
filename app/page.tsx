import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black">
      <main className="w-full max-w-4xl px-6 py-20">
        <div className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Modern, elegant landing
            </h1>
            <p className="mt-4 text-lg text-zinc-700 dark:text-zinc-300">
              this is my firs doker image
            </p>
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400 max-w-md">
              A simple showcase with clean typography and subtle depth — use
              these visuals to represent your Docker images or projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-full bg-zinc-900/95 text-white px-4 py-2 text-sm shadow hover:shadow-lg transition" href="#">
                Get started
              </a>
              <a className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition" href="#">
                Learn more
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-sm">
            <div className="rounded-xl bg-white p-4 shadow-md flex items-center justify-center">
              <Image src="/file.svg" alt="file" width={120} height={80} className="" />
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md flex items-center justify-center">
              <Image src="/globe.svg" alt="globe" width={120} height={80} className="" />
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md flex items-center justify-center">
              <Image src="/next.svg" alt="next" width={120} height={80} className="" />
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md flex items-center justify-center">
              <Image src="/window.svg" alt="window" width={120} height={80} className="" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

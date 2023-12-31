export default function Home() {
  return (
    <main className="grid grid-rows-1 justify-between main-content overflow-y-auto overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 main-content h-full justify-between">
        <div className="flex items-center justify-center">
          <div className="flex flex-col text-start sm:text-end px-10">
            <h1
              className="text-5xl sm:text-7xl font-inter font-extrabold bg-clip-text text-transparent 
            bg-[linear-gradient(to_right,theme(colors.fuchsia.500),theme(colors.orange.300),theme(colors.fuchsia.500))] 
            bg-[length:200%_auto] animate-gradient pb-1.5 "
            >
              wishsong
            </h1>
            <span className="font-inter text-3xl sm:text-5xl ">
              the perfect place to
              <span className="font-inter font-extrabold text-pink-logo-1 ">
                {" "}
                search{" "}
              </span>
              and
              <span className="font-inter font-extrabold text-pink-logo-2">
                {" "}
                list{" "}
              </span>
              your favorite songs
            </span>
            {/* <button className="fill-">Get started</button> */}
          </div>
        </div>
        <div className="rounded-s-full sm:rounded-l-full justify-center items-center bg-home-background bg-cover md:flex"></div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col md:flex-row w-full main-content">
        <div className="flex md:w-1/2 items-center justify-center pb-4">
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
        <div className="flex flex-grow rounded-s-full sm:rounded-l-full justify-center items-center bg-home-background bg-cover md:flex"></div>
      </div>
    </main>
  );
}

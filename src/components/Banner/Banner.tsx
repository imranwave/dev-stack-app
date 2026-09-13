
import bannerlogo from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <section className="bg-pink-20">
      <div className="mx-auto flex min-h-[330px] max-w-7xl items-center px-6 py-10 lg:px-10">
        <div className="w-full lg:w-1/2">

          <h1 className="text-4xl font-extrabold leading-tight text-[#111827] md:text-5xl">
            Build Your Ideal
          </h1>

          <h2 className="mt-1 text-4xl font-extrabold leading-tight md:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500 md:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

       
          <div className="mt-7 flex gap-2">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:scale-105">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-6 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
              Learn More
            </button>
          </div>

        </div>

        
        <div className="hidden w-1/2 justify-center lg:flex">
          <img
            src={bannerlogo}
            alt="Development Stack"
            className="w-[350px] object-contain"
          />
        </div>

      </div>
    </section>
    );
};

export default Banner;
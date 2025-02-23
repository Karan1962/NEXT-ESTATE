import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full ">
      <div className="max-w-6xl m-auto py-10 px-1">
        <h1 className="text-6xl text-[rgb(51 65 85)] font-bold">
          Find your next
          <span className="text-[#A3A3A3]"> perfect </span>
          <span className="block">place with ease</span>
        </h1>
        <p className="py-4 text-gray-400">
          KaranEstate will help you find your home fast, easy and comfortable.
          <span className="block">
            Our expert support are always available.
          </span>
        </p>
        <Link
          href="/"
          className="hover:underline text-blue-800 dark:text-sky-400 text-lg font-semibold"
        >
          Let's Start Now..
        </Link>
      </div>
    </div>
  );
};

export default Hero;

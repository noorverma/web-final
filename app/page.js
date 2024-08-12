

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-navbar text-gray-100">
        <div className="max-w-4xl mx-auto p-5 flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl text-black md:text-5xl font-bold">
              Hi There, <br />
              I'm <span className="text-black">Calvin</span>{" "}
              <span className="text-black">Dang</span>
            </h1>
            <p className="text-xl text-black md:text-2xl mt-4 font-bold">
              I AM INTO <span className="text-black">INTERIOR DESIGNING</span>
            </p>
             <div>
              <a
                href="https://www.instagram.com/cd.idesign/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="shadow-md border mt-5"
                  src="/instalogo.jpg"
                  alt="Instagram Profile"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <img
              src="/logo.png"
              alt="Profile Image"
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
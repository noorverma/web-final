import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="fixed w-full">
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="bg-navbar shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row max-w-2xl text-black">
          <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-2">Getting to Know</h1>
            <h2 className="text-3xl font-extrabold mb-2">Calvin Dang</h2>
            <p className="text-base mb-4 text-center">
              I am an interior designer with a passion for transforming spaces into beautiful, functional environments.
              With a keen eye for detail and a deep understanding of design principles, I strive to create spaces that reflect the unique tastes and needs of my clients.
              My work includes residential and commercial projects, where I focus on combining aesthetics with practicality. Through collaboration and creativity, I aim to deliver designs that inspire and elevate everyday living.
            </p>
            <Link href="/contact" legacyBehavior>
              <a className="mt-2 px-3 py-2 bg-black text-white rounded hover:bg-black">
                Contact Me
              </a>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center items-center p-0">
            <Image
              src="/about.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

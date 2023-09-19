import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBriefcase, faCamera, faImages } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);
import Avatar from "../public/Avatar"
 import BurgerMenu from '../public/BurgerMenu';

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
           

          </a>
        </div>
        <BurgerMenu/> 
      </div>

      <div className="mb-32 grid grid-cols-1 lg:grid-cols-4 gap-4 text-center mt-20 lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
 
  <div className="col-span-1 lg:col-span-1">
    <img
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full mx-auto lg:mx-0"
      src="https://media.istockphoto.com/id/1431021822/photo/happy-hiker-with-raised-arms-on-top-of-the-mountain.jpg?s=1024x1024&w=is&k=20&c=G5ZgCdHmYTL2A126lypnqLr-922SpdURBVolvXRdMDQ="
      alt="Next.js Logo"
      
    />
  </div>


  <div className="col-span-1 lg:col-span-3 flex items-center lg:items-center pl-80 ">
    <div className="text-center lg:text-left"> 
    <h3 className='font-bold text-30'>Reflex</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>similique ad obcaecati laborum ducimus dolor rerum,<br/>placeat illum.
    </p>
    <button className=" mt-10 hover:bg-blue-700 text-black border border-gray-700 py-3 px-4 rounded">
  Get Started
</button>
  </div>
</div></div>



<div className="flex justify-center items-center min-h-screen  mt-10  ">
      <div className="text-center max-w-md">
        <h3 className="text-3xl font-bold">Lorem Ipsum</h3>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam eget felis vitae odio suscipit convallis.
        </p>
        <div className="mt-8 flex justify-center mt-10">
          <FontAwesomeIcon width={200} height={40} icon={faCogs} className="text-blue-500 text-3xl mx-2" />
          <FontAwesomeIcon  width={200} height={40} icon={faBriefcase} className="text-green-500 text-3xl mx-2" />
          <FontAwesomeIcon  width={200} height={40}  icon={faCamera} className="text-red-500 text-3xl mx-2" />
          <FontAwesomeIcon  width={200} height={40} icon={faImages} className="text-purple-500 text-3xl mx-2" />
        </div>
      </div>
    </div>









      <div className="bg-gray mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
       
        >
          <Avatar
          name="John Doe"
          imgSrc="https://via.placeholder.com/150"
          description="Lorem ipsum dolor sit amet."
        />
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Avatar
          name="Jane Smith"
          imgSrc="https://via.placeholder.com/150"
          description="Consectetur adipiscing elit."
        />
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
          name="Bob Johnson"
          imgSrc="https://via.placeholder.com/150"
           description="Nullam eget felis vitae odio."
        />
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
          name="Alice Brown"
          imgSrc="https://via.placeholder.com/150"
          description="Suscipit convallis elit."
        />
        </a>
      </div>
      <footer className="bg-gray-800 text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Section 1: About */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam eget felis vitae odio suscipit convallis.
            </p>
          </div>

          {/* Section 2: Social Media */}
          <div className="flex justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="ml-4">
              <a href="#" className="text-2xl mx-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-2xl mx-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-2xl mx-2">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Section 3: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full py-2 px-3 rounded bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" border border-white-200 hover:bg-white-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    </main>
  )
}

import Image from "next/image";
import logo from "../public/logo.png";
import ok from "../public/ok.png";
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  const iconSize = 30;
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dbzo04n4l/video/upload/v1719860750/gv4f55yjokhcjywzpxbh.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 h-full p-6 flex flex-col justify-center items-center space-y-8 max-w-screen-xl mx-auto">
        <Image src={logo} alt="logo" width={250} height={250} className="pt-12 h-50 w-40 lg:w-52" />
        <Image src={ok} alt="ok" width={1000} height={200} className="animate-pulse" />
        <p className="text-sm md:text-lg text-center leading-relaxed md:leading-loose px-4">
          In a world yearning for unity, the <span>12th edition of KIIT International MUN</span> is set to be the most thrilling yet! Join passionate delegates from around the globe in <span className="underline">electrifying debates</span> and groundbreaking collaborations.
          <br className="md:hidden" />
          This isn’t just a conference; it’s your chance to make a lasting impact. Feel the <span className="italic">adrenaline</span>, embrace the challenge, and leave your mark.
          <br />
          The world is watching—are you ready?
          <br />
          <span className="font-bold">Get ready for an unforgettable KIITMUN experience!</span> Stay tuned and keep an eye on our social media handles for updates, exclusive insights, and more exciting announcements. Don’t miss out on the opportunity to be part of something extraordinary.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/instakiitmun/" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Instagram size={iconSize} />
            </div>
          </a>
          <a href="https://www.facebook.com/kiitmun" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-blue-600">
              <Facebook size={iconSize} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kiitmun/" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-slate-700">
              <Linkedin size={iconSize} />
            </div>
          </a>
          <a href="https://twitter.com/kiitmun" target="_blank" rel="noreferrer">
            <div className="p-2 rounded-full bg-blue-500">
              <Twitter size={iconSize} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

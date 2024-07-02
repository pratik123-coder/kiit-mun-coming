import Image from "next/image";
import logo from "../public/logo.png";
import ok from "../public/ok.png";


const SocialIcon = ({ imageUrl, imageAlt, href }) => (
  <div className="flex justify-center items-center p-3.5 w-12 h-12 border border-gray-800 border-solid bg-[linear-gradient(146deg,#DAA952_0%,#FDE16F_48.84%,#E1B457_100%)] rounded-[100px]" tabIndex={0} role="button">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image 
      loading="lazy" 
      src={imageUrl} 
      width={50}
      height={50}
      alt={imageAlt} 
      className="w-5 aspect-square" />
    </a>
  </div>
);

export default function Home() {
  const iconSize = 30;
  return (
    <div className="w-full h-screen relative overflow-hidden bg-gradient-main ">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
        src="https://res.cloudinary.com/dbzo04n4l/video/upload/v1719922844/v0rv35g3uwvvwuylen3r.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 h-full flex flex-col justify-center items-center space-y-8 max-w-screen-xl mx-auto p-20">
        <Image src={logo} alt="logo" width={250} height={250} className="pt-12 h-50 w-40 lg:w-52" />
        <Image src={ok} alt="ok" width={1000} height={200} />
        <p className="text-sm md:text-lg text-center leading-relaxed md:leading-loose px-4">
        KIIT International MUN returns for a thrilling 12th edition! Join global delegates for electrifying debates & groundbreaking collaborations to shape a united future. Feel the adrenaline, embrace the challenge, and leave your mark.<br/>

        <span className="text-lg lg:text-2xl">The world is watching. Are you ready?</span>  <br/>

        Stay tuned to our social media handles for exciting updates and exclusive insights.
        </p>
        <div className="flex gap-2.5  transform translate-y-[5%]  p-2.5 border border-solid bg-[linear-gradient(146deg,#000917_0.05%,#103E4B_50%,#030915_100%)] border-zinc-900 rounded-[100px]">
          <SocialIcon 
            imageUrl="https://res.cloudinary.com/dwv6dsqle/image/upload/v1718704173/insta_rmtdno.png" 
            imageAlt="Social Icon 1" 
            href="https://www.instagram.com/instakiitmun" 
          />

          <SocialIcon 
            imageUrl="https://res.cloudinary.com/dwv6dsqle/image/upload/v1718704236/twitter_npapps.png" 
            imageAlt="Social Icon 2" 
            href="https://x.com/kiitmun" 
          />

          <SocialIcon 
            imageUrl="https://res.cloudinary.com/dwv6dsqle/image/upload/v1718704169/linkedin_bcxpg0.png" 
            imageAlt="Social Icon 3"
            href="https://www.linkedin.com/in/kiitmun/"  
          />
        </div>
      </div>
    </div>
  );
}

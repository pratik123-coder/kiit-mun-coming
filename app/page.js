import { GlobeComponent } from "@/components/globe";


export default function Home() {
  return (
    <div className="bg-gradient-main w-full overflow-hidden text-white">
    <div className="w-full bg-[url(https://res.cloudinary.com/de7hlbfce/image/upload/v1718923224/KIITMUN2024/fq6jtunghljsjkusazwi.webp)] md:bg-contain bg-cover bg-center bg-no-repeat">
        <div className="z-100 h-screen flex flex-col items-center justify-center gap-y-8 ">
            
            <GlobeComponent />
            
            
        </div>
    </div>
    </div>
  );
}

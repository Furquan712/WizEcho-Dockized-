import { useRouter } from "next/router";
import { GrStackOverflow } from "react-icons/gr";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    
    <div style={{display:"flex"}}>
      <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <GrStackOverflow size={28} color="white" />
    </div>
    <div>WizEcho</div>
    </div>
  );
};

export default SidebarLogo;


import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";

const GroupProfile = ()=>{
return(
    
    <div className="w-[48px] h-[48px] rounded-[48px] relative">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
      <div className="relative col-span-1 row-span-1">
        <img className="w-[26px] h-[26px] object-cover rounded-tl-full" src={profile1} alt="Profile 1"/>
      </div>
      <div className="relative col-span-1 row-span-1">
        <img className="w-[26px] h-[26px] object-cover rounded-tr-full" src={profile2} alt="Profile 2"/>
      </div>
      <div className="relative col-span-1 row-span-1">
        <img className="w-[26px] h-[26px] object-cover rounded-bl-full" src={profile3} alt="Profile 3"/>
      </div>
      <div className="relative col-span-1 row-span-1">
        <img className="w-[26px] h-[26px] object-cover rounded-br-full" src={profile4} alt="Profile 4"/>
      </div>
    </div>
  </div>
  
)
}

export default GroupProfile;
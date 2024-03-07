import Back from "./Back";
import Dots from "./Dots";
import Edit from "./Edit";
import GroupProfile from "./GroupProfile";

const TopBar = () => {
    return (
        <div className="w-full h-[130px] border-b flex flex-col gap-y-[12px] p-4">
            <div className="flex flex-row items-center justify-between mb-2">
                <div className="flex flex-row items-center space-x-2">
                    <Back /> 
                    <p className="font-bold font-mulish text-[24px] leading-[30.12px]">Trip 1</p>
                </div>
                <Edit/>
            </div>


            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center space-x-6">
                <GroupProfile/>
                    <div className="w-[215px] h-[48px] flex flex-col font-mulish ">
                   <div className="flex flex-row space-x-2 items-center"> <p className="font-medium text-[#606060] text-[16px] leading-[20.08px]">From</p><p className="font-bold text-[#141E0D] text-[18px] leading-[22.59px]"> IGI Airport, T3</p></div>
                    <div className="flex flex-row space-x-2 items-center"><p className="font-medium text-[#606060] text-[16px] leading-[20.08px]">To</p><p className="font-bold text-[#141E0D] text-[18px] leading-[22.59px]"> Sector 28</p></div>
                    </div>
                </div>
                <Dots/>
            </div>
            

         

        </div>
    );
}

export default TopBar;

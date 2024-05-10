import React from "react";
import Image from './images/image.png';

const Login = () => {
  return (
    <div className="bg-[#fffefc] flex justify-center items-center w-full h-screen">
      <div className="bg-[#fffefc] w-[1440px] h-[900px] relative">
        <div className="absolute w-[737px] h-[825px] top-[38px] left-[41px] bg-[url(/rectangle-77.svg)] bg-cover"></div>
        <img
          className="absolute w-[737px] h-[825px] top-[6745px] left-[-1225px]"
          alt="Girl"
          src={Image}
        />
        <div className="absolute w-[454px] h-[647px] top-[109px] left-[889px]">
          <div className="absolute w-[331px] h-[143px] top-0 left-[53px]">
            <div className="absolute w-[333px] h-[59px] top-[84px] left-0 bg-[#49bbbd99] rounded-[33px] flex justify-between items-center">
              <div className="[font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                Login
              </div>
              <div className="[font-family:'Poppins-Regular',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal]">
                Register
              </div>
            </div>
            <div className="[font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal] mt-2">
              Welcome to Gyaandeep
            </div>
          </div>
          <div className="absolute w-[456px] h-[301px] top-[195px] left-0">
            {/* Input fields for username and password */}
          </div>
          <p className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#5b5b5b] text-[16px] tracking-[0] leading-[normal]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="absolute w-[436px] h-[18px] top-[518px] left-0">
            {/* Remember me and Forgot Password */}
          </div>
          <div className="absolute w-[234px] h-[49px] top-[598px] left-[203px]">
            {/* Login button */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
function Hero() {
    return(
       <section className=" top-25 py-0 relative h-screen overflow-hidden  bg-black  ">
         <div className=" left-0 right-0 gap-0 z-0 absolute h-full w-full overflow-hidden flex items-center justify-center mask-b-from-1  ">
           <img src="../../public/img/iphonegrande.png" alt="iPhone 17" className=" h-full w-full object-cover  opacity-90  z-0 " />
        </div>  
        
        <div className="absolute bottom-30  w-full z-10 animate-bounce flex items-center justify-center ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.4} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" className="hover:text-fuchsia-800" />
            </svg>
            </div>   
         
       </section>
    );
}
export default Hero;
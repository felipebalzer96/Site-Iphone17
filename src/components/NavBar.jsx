function NavBar() {
    return(
       
   <nav className="  fixed top-0 pb-0 bottom-0 gap-0  w-full pl-0 h-10 bg-black text-white flex items-center justify-center z-10"> 
    <div className="max-w-7xl max-auto   h-1   px-2 py-7 flex items-center justify-center  gap-10"> 
        <a href="#desing" className="hover:text-gray-500 cursor-pointer">Desing</a>
        <a href="#camera" className="hover:text-gray-500 cursor-pointer">Câmera</a>
        <a href="#performance" className="hover:text-gray-500 cursor-pointer">Performance</a>
        <a href="#cores" className="hover:text-gray-500 cursor-pointer">Cores</a>
        
        <button className="bg-blue-700 w-25 h-6  rounded-3xl hover:text-gray-500 ">Comprar</button>
            
        </div>
    </nav>
    
    )
}
export default NavBar
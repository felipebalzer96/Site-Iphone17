function Insiders() {
    return(
        <section className="h-full w-full flex flex-col justify-center items-center gap-10 py-10 ">
            <div className="h-auto w-auto flex flex-col justify-center items-center gap-4  bottom-0">
                <h2 className="text-2xl md:text-5xl font-bold">Design revolucionário</h2>
                <p className="text-xl md:text-2xl text-gray-600">Elegância e funcionalidade em cada detalhe.</p>
            </div>
        <section className=" flex flex-row gap-8 h-auto w-auto justify-center items-center  md:px-20 ">
            <div className="w-full h-auto bg-gray-900 p-4 pb-6 rounded-2xl
sm:w-170 sm:h-120 sm:p-9 sm:pb-16 sm:rounded-4xl
">  
                <img src="../public/img/titanium-design.jpg " className="w-auto h-auto rounded-4xl" alt="" />
                <p className="text-2xl md:text-3xl font-bold pt-1">Titânio Premium</p>
                <p className="text-[15px] md:text-xl" >Eatrutura em titânio de grau aeroespacial. O smartphone mais forte e leve</p>
            </div>
            <div className="w-full h-auto bg-gray-900 p-4 pb-6 rounded-2xl
sm:w-170 sm:h-120 sm:p-9 sm:pb-16 sm:rounded-4xl
 ">
                <img src="../public/img/ios-features.jpg " className="w-auto h-auto rounded-4xl" alt="" />
                <p className="text-2xl md:text-3xl font-bold pt-1.5">IOS 19</p>
                <p className="text-[15px] md:text-xl">O sistema operacional mais avançado do mundo com IA integrada.</p>
                
            </div>
                    
                
            
        </section>
        </section>



    )
    
    
 }
 export default Insiders;
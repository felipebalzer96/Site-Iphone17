function Intro() {

          const Spec=[
            {value:'6.3"',label:'Display Super Retina XDR' ,color :'text-blue-600'},
            {value:'A18 Pro',label:'Chip mais rápido em um smartphone', color :'text-orange-500'},
            {value:'48MP',label:'Câmera Pro com sensor avançado', color :'text-blue-600'},
            {value:'29h',label:'Bateria para o dia todo', color :'text-orange-500'},
          ]



  return (
  <section className=" px-6 py-20 bg-black text-white flex items-center justify-center flex-col gap-8   ">
    <div  className="max-w-5xl max-auto text-center  flex flex-col  ">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">iPhone 17 Pro</h1>
      <p className="text-2xl md:text-4xl text-gradient font-bold">iPhone 17 Pro. Potência que define o futuro.</p>
      <p className="text-[15px] md:text-2xl">Poder absoluto, design essencial.Feito para quem exige mais.</p>
    </div>
    <div className="   flex flex-col md:flex-row gap-15 ">
     <button className="bg-blue-600 hover:text-gray-500  h-15 w-40 rounded-[50px] text-[20px] font-bold hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer">Compre agora </button>
     <button className="bg-transparent hover:text-gray-500  h-15 w-40 border-2 border-white rounded-[50px] text-[20px] font-bold hover:scale-105 transition-all duration-200 shadow-lg cursor-pointer">Saiba mais</button>
     </div>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
       {Spec.map((item,index)=>(
        <div key={index} className="bg-gray-900 rounded-2xl p-6 text-[15px] font-bold md:text-[18px] flex flex-col items-center justify-center gap-2 hover:bg-gray-800 transition-all duration-200  hover:scale-105 cursor-pointer ">
          <p className={`text-[20px] md:text-3xl ${item.color}`}>{item.value} </p>
          <p>{item.label}</p>
        </div>
       ))}
     </div>
    
  </section>
  );
}
export default Intro;
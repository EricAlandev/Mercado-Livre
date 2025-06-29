const Headerbaixo = () => {
  return (
    <div className="bg-[#FFF159] md:bg-[#FFE600]">
      <div className="flex flex-wrap items-center md:ml-[245px] gap-4.5 p-2
      ">
        <div className=" flex items-center gap-2 border-transparent p-1  border-[1px] 
         hover:border-[gray] rounded-md cursor-pointer transition-all duration-200 ">
          <img
            src="/Mercado-Livre/assets/Icone.webp"
            alt="Logo ou ícone"
            className="h-4"
          />

           <div className="flex items-center md:flex-col md:items-center gap-1 md:gap-0 leading-tight">
              <h3 className="text-[#739600] text-[15px] text-sm  md:text-[12.5px]">Enviar para Eric</h3>
              <h2 className="text-[#739600] text-[14.5px]  md:text-black text-base md:text-[15px]">
                Rua Fortaleza CE...
              </h2>
           </div>
         </div>

        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Categorias ↓</h2>
        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Ofertas</h2>
        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Cupons</h2>
        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Supermercado</h2>
        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Moda</h2>

        <div className="hidden md:flex md:flex-col md:items-start md:mb-[8px] ">
          <h3 className=" bg-[#00A650] text-white mt-[-4px] pb-[-4px] px-1.5 rounded md:text-[8px] 
          md:ml-[26px] ">GRÁTIS</h3>
          <h2 className="md:text-[14.5px] font-[Inter] font-[350]">Mercado Play</h2>
        </div>

        <h2 className="hidden md:block md:text-[15.5px] font-[Inter] font-[350]">Vender</h2>
        <h2 className="hidden md: md:text-[15.5px] font-[Inter] font-[350]">Contato</h2>
        

        <div className="hidden  items-center gap-4 md:flex md:ml-[90px]">

            <div className="flex gap-2  items-center">
              <img src="/Mercado-Livre/assets/Meli+/usuario.webp" alt=""
              className="h-[35px] p-2 border-[2px] rounded-[50%] "
               />
              <h2 className="text-[15px] font-[Inter] font-[350]">Eric</h2>
              </div>
    
            <h2 className="text-[15px] font-[Inter] font-[350]">Compras</h2>
            <h2 className="text-[15px] font-[Inter] font-[350]">Favoritos ↓</h2>


          <img
            src="/Mercado-Livre/assets/Icone.webp"
            alt="Ícone do usuário"
            className="h-[20px]"
          />

          <div className="relative">
            <img
              src="/Mercado-Livre/assets/carrinho.webp"
              alt="Carrinho"
              className="h-5 mt-[5px]"
            />
            <h2 className="absolute left-[2.5px] top-[-8px] text-xs bg-[white] text-black rounded-full w-4 h-4 flex items-center justify-center  ">
              1
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerbaixo;

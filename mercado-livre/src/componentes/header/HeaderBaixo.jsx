const Headerbaixo = () => {
    return (
      <div className="bg-[#FFF159]">
        <div className="flex flex-wrap items-center gap-4 p-2">
          <div className="flex items-center">
            <img src="/assets/Icone.webp" alt="Logo ou ícone"
            className="h-4 pr-[20px]"
             />  
            <div className="flex gap-1.5">
                <h3 className="text-[#739600]">Enviar para Eric</h3>
                <h2 className="text-[#739600]">Rua Fortaleza CE...</h2>
                <h2 className="pl-[45px]"> ˃  </h2>
            </div>
          </div>
  
          <h2 className="hidden md:block">Categorias ↓</h2>
          <h2 className="hidden md:block">Ofertas</h2>
          <h2 className="hidden md:block">Cupons</h2>
          <h2 className="hidden md:block">Supermercado</h2>
          <h2 className="hidden md:block">Moda</h2>
  
          <div className="hidden md:flex flex-col items-start">
            <h3 className="bg-[#00A650] text-white px-2 rounded">GRÁTIS</h3>
            <h2>Mercado Play</h2>
          </div>
  
          <h2 className="hidden md:block">Vender</h2>
          <h2 className="hidden md:block">Contato</h2>
  
          <div className="hidden md:flex items-center gap-2">
            <div>
              <h2>Compras</h2>
              <h2>Favoritos ↓</h2>
            </div>
  
            <img src="/assets/Icone.webp" alt="Ícone do usuário" />
  
            <div className="relative">
              <img
                src="/assets/carrinho.webp"
                alt="Carrinho"
                className="h-5 mt-[5px]"
              />
              <h2 className="absolute left-[6px] top-[-8px] text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                1
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Headerbaixo;
  
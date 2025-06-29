const Footer = () => {
    return (
      <>
        <div>
          <div className="flex bg-[#FFF159] justify-center items-center
           h-[60px] gap-2 p-6 md:p-10">
            <img
              src="/Mercado-Livre/assets/LogoMobile.png"
              alt=""
              className="w-[55px] border-[2px] border-[#F1F1] shadow-2xl p-1
              md:w-[70px]
              "
            />
            <p className="font-[Inter] font-light text-[18px] md:text-[24px]">Compre e venda com o app!</p>
          </div>
  
          <div className="border-b-[2px] border-[#F1F1F1] pb-4 
           md:ml-[400px]">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-[35px] ml-[46px] 
             md:gap-[22px]">
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px]
              md:hover:underline
              ">Minha conta</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Compras</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Histórico</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Ofertas</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Favoritos</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Lojas oficiais</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Categorias</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Meli+</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Contato</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Vender</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Programa de Afiliados</h2>
              <h2 className="text-[14px] font-[Inter] font-light md:text-[20px] md:hover:underline">Lista de presentes</h2>
            </div>
          </div>
  
          <div>
            <div className="flex mt-[10px] ml-[37px] gap-1.5 md:justify-center 
            md:mt-[25px]">
              <img
                src="/Mercado-Livre/assets/Meli+/usuario.webp"
                alt=""
                className="h-[27px] border-[2px] rounded-[50%]
                 md:h-[45px]
                "
              />
              <h2 className="font-[Inter] font-light text-[18px]
              md:text-[28px]
               ">Eric</h2>
            </div>
  
            <div className="text-[12px] mt-[15px] ml-[35px] mb-[20px] ">
              <p className="md:flex md:justify-center md:text-[14.5px]">
                Termos e condições Promoções Como cuidamos da sua <br /> privacidade AcessibilidadeInformações sobre <br /> seguros Blog Afiliados Tendências
              </p>

                  {/*Parte abaixo dos termos e condições promoções*/}
                  <div className="md:flex md:justify-center">
                      <div className="flex-col">
                          <p className="mt-[12px] text-[gray] md:text-[15px]">© 1999-2025 Ebazar.com.br LTDA.</p>
                          <p className="text-[gray] md:text-[15px]">
                        CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, <br />
                        nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - <br />
                        empresa do grupo Mercado Livre
                          </p>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;
  
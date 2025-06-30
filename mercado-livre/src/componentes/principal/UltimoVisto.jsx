import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
import ProductCard from "../ProductCard";

const UltimoVisto = () => {
  const ultimoVisto = [
    {id: "1", image: "/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp",
      name: "Essencial Ato Deo Parfum Natura Masculino 100 M",
      price: "R$ 110.70", textoParcela: "em 12x de R$ 119.70",
      descricao: "Frete gratis"
    },
    {id: "2", image: "/Mercado-Livre/assets/ultimo_visto/EssencialOud.webp",
      name: "Essencial Ato Deo Parfum Natura Masculino 100 M",
      price: "R$ 110.70", textoParcela: "em 12x de R$ 119.70",
      descricao: "Frete gratis"
    },
    {id: "3", image: "/Mercado-Livre/assets/ultimo_visto/EssencialPalo.webp",
      name: "Essencial Palo Santo Natura Deo Parfum Masculino - 100ml",
      price: "R$ 186.86", textoParcela: "em 6x de R$ 31,14",
      descricao: "Frete gratis"
    },
    {id: "4", image: "/Mercado-Livre/assets/ultimo_visto/HomemELO.webp",
      name: "Perfume Natura Homem Elo De Parfum 100 Ml",
      price: "R$ 120.70", textoParcela: "em 12x de R$ 11.99",
      descricao: "Frete gratis"
    },
    {id: "5", image: "/Mercado-Livre/assets/ultimo_visto/CalvinKlein.webp",
      name: "CK Perfume Masculino Eau De Toilette - 50ml",
      price: "288.66", textoParcela: "em 12x de R$ 24.05",
      descricao: "Frete gratis"
    },
    {id: "6", image: "/Mercado-Livre/assets/ultimo_visto/Essencial Deo Parfum.webp",
      name: "Perfume Natura Una Brilho 75ml Deo Parfum Feminino",
      price: "R$ 110.70", textoParcela: "em 12x de R$ 119.70",
      descricao: "Frete gratis"
    },
    {id: "7", image: "/Mercado-Livre/assets/ultimo_visto/EssencialUnico.webp",
      name: "Natura Essencial Único Deo Perfume Masculino 90 Ml",
      price: "R$ 237.91", textoParcela: "em 12x de R$ 23.43",
      descricao: "Frete gratis"
    },
  ];

  return (
    <>
      {/* Versão para Mobile */}
<div className="bg-white m-4 pb-5 rounded-[8px] md:hidden">
  <h2 className="ml-8 pt-4 pb-1 pr-4 font-Inter font-bold border-b-2 border-[#F1F1F1] w-3/5">
    Inspirado no último visto
  </h2>

  <div className="grid grid-cols-2 grid-rows-2 gap-4 w-[200px] ml-5">
    <div>
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
        name="Essencial Ato"
        priceDiscount="159.69"
        price="119.99"
        imageSize="w-[90px] h-auto"
        productSize="w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div>
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialPalo.webp"
        name="Essencial Palo"
        priceDiscount="209.99"
        price="199.98"
        imageSize="w-[90px] h-[170px]"
        productSize="w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div>
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/HomemEvolutio.webp"
        name="Essencial Ato"
        priceDiscount="125.99"
        price="119.99"
        imageSize="w-[90px] h-auto mt-5"
        productSize="w-[140px] h-[260px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div>
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
        name="Essencial Ato"
        priceDiscount="299.99"
        price="219.99"
        imageSize="w-[90px] h-auto"
        productSize="w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>
  </div>
</div>


      {/* Versão para Desktop */}
      <div className="hidden md:block w-full max-w-[1246px] rounded-[12px] bg-white mt-5 mx-auto">
        <h2 className="pt-4 ml-8 text-[18px] font-medium font-Inter mb-4">Inspirado no último visto</h2>
        <div className="w-full px-4">
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={true}
          >
            {ultimoVisto.map((produtos) => (
              <SwiperSlide key={produtos.id}>
                <div className="w-[200px] h-[300px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-start">
                  <img src={produtos.image} alt="" className="w-[60px] mb-2" />
                  <h2 className="text-[18px] font-semibold text-center">{produtos.name}</h2>
                  <h2 className="text-[16px] text-gray-700">{produtos.price}</h2>
                  <h3 className="text-[14px] text-gray-500">{produtos.textoParcela}</h3>
                  <p className="text-[12px] text-[#00A650] text-center">{produtos.descricao}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/*Propagandas */}
<div className="flex gap-4 md:mt-[40px]">
  {/* Propaganda da esquerda */}
  <div className="hidden md:flex md:w-[620px] md:h-[110px] md:ml-[440px] md:bg-black md:rounded-[8px]">
    <div className="flex p-4 gap-4">
      <img
        src="/Mercado-Livre/assets/Propaganda/Samsung.webp"
        alt=""
        className="h-[40px] mt-[20px] ml-[40px]"
      />

      <div className="text-white">
        <h2 className="text-[8px]">MÊS DOS NAMORADOS</h2>
        <h2 className="text-[12px]">
          FRETE GRÁTIS <br />
          PARCELE EM 18X
        </h2>
        <p className="mt-[8px] font-[Inter] text-[12px]">Aproveite</p>
      </div>
    </div>

    <div className="flex">
      <img
        src="/Mercado-Livre/assets/Propaganda/windows11Direita.webp"
        alt=""
        className="ml-[22px] w-[180px] h-[110px]"
      />
      <img
        src="/Mercado-Livre/assets/Propaganda/InteligenciaAbsurda.webp"
        alt=""
        className="w-[190px] h-[110px]"
      />
    </div>
  </div>

  {/* Propaganda da direita */}
  <div className="hidden md:flex md:w-[620px] md:h-[110px]  md:bg-black md:rounded-[8px]">
    <div className="flex p-4 gap-4">
      <img
        src="/Mercado-Livre/assets/Propaganda/windos11.webp"
        alt=""
        className="h-[55px] mt-[15px] ml-[40px]"
      />

      <div className="text-white">
        <h2 className="mt-[5px] text-[10px] font-[Inter]" >Novo </h2>
        <h2 className="mt-[5px] text-[10px]">
          <span className="">Windows 11</span> <br />
           <span>Parcele em 18x</span>
        </h2>
        <p className="mt-[8px] font-[Inter] text-[12px]">Aproveite</p>
      </div>
    </div>

    <div className="flex">
      <img
        src="/Mercado-Livre/assets/Propaganda/celular.webp"
        alt=""
        className="ml-[162px] w-[230px] h-[110px]"
      />
    
    </div>
  </div>
</div>


      {/* Tela do Meli+ */}
      <div className="w-[345px] ml-[15px] bg-[#FFFFFF] rounded-[8px] overflow-hidden
      md:w-[1255px] md:mt-[40px] md:ml-[440px]
      ">
        <div
          className="bg-gradient-to-r from-[#5F228D] to-[#A21291] 
                flex items-center pt-[10px] pb-[10px]"
        >
          <img
            src="/Mercado-Livre/assets/Meli+/Meli+Anuncio.png"
            alt=""
            className="h-[35px] w-[35x] ml-[30px] border-r-[2px] border-[white] pr-[9px] object-cover"
          />
          <h2 className="pl-[12px] text-[white] font-[Inter]">
            Assine a partir de <br /> R$ 24.90/mês
          </h2>

          <h2 className="hidden md:block ml-[840px] md:p-1.5 text-[white]
           bg-[#B442A7] rounded-[4px]">Assinar o Meli+</h2>
        </div>

        {/* Código feito para dizer os benefícios do Meli+ */}
        <div className="pl-7 flex flex-col gap-2.5 border-b-[1px] border-[#F1F1F1]
        md:flex 
        ">
            <h2 className="mt-[17px] font-[Inter font-[600] text-[15px]
            md:text-[21.5px]
            ">
              Aproveite estes benefícios exlusivos:
            </h2>


            {/*Coluna feita para Desktop - deixar os benefícios in row. */}
            <div className="md:flex md:gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="/Mercado-Livre/assets/Meli+/Disney+.png"
                    alt=""
                    className="w-[50px] rounded-2xl"
                  />
                  <h2 className="text-[14px]">Disney+ incluído</h2>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/Mercado-Livre/assets/Meli+/CashBack.png"
                    alt=""
                    className="w-[50px] rounded-2xl"
                  />
                  <h2 className="text-[14px]">CashBack em compras e pagamentos</h2>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="/Mercado-Livre/assets/Meli+/Cofrinhos.png"
                    alt=""
                    className="w-[50px] rounded-2xl"
                  />
                  <h2 className="text-[14px]">
                    Cofrinhos que rendem 120% do CDI no Mercado Pago
                  </h2>
                </div>

                <div className="flex items-center gap-2 pb-[10px]">
                  <img
                    src="/Mercado-Livre/assets/Meli+/Cartao.png"
                    alt=""
                    className="w-[50px] rounded-2xl"
                  />
                  <h2 className="text-[14px]">Até 3 parcelas extras sem juros</h2>
                </div>
              </div>
            </div>

          <div className="flex pt-[8px] pl-7 pb-2.5 md:hidden">
            <h2 className="text-[#3483F9] font-[Inter] font-[500]">
              Assinar o Meli+{" "}
            </h2>
            <p className="ml-[180px] text-[#3483F9]"> ˃ </p>
          </div>
      </div>


      <div className="hidden md:block md:w-[1246px] md:rounded-[12px] md:bg-[white] 
      mt-[20px] md:ml-[440px]">
        <h2 className="pt-[15px] ml-[30px] text-[18px] font-[500] font-[Inter]">Inspirado no último visto</h2>
        <div className="w-[1200px] mx-auto"> {/* ⬅️ Essa é a div que engloba tudo */}
          <Swiper slidesPerView={6} spaceBetween={16}
          modules={[Navigation]} 
          navigation={true}
          
          >
            {ultimoVisto.map((produtos) => (
              <SwiperSlide key={produtos.id}>
                <div className="w-[200px] h-[300px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-start">
                  <img src={produtos.image} alt="" className="w-[60px] mb-2" />
                  <h2 className="text-[18px] font-semibold text-center">{produtos.name}</h2>
                  <h2 className="text-[16px] text-gray-700">{produtos.price}</h2>
                  <h3 className="text-[14px] text-gray-500">{produtos.textoParcela}</h3>
                  <p className="text-[12px] text-[#00A650] text-center">{produtos.descricao}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
    </>
  );
};

export default UltimoVisto;
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
import ProductCard from "../ProductCard";
import { useCart } from "../context/CartContext";

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

  const { addToCart } = useCart();


  return (
    <>
      {/* Versão para Mobile */}
<div className="bg-white m-4 pb-5 rounded-[8px] md:hidden">
  <h2 className="ml-4 pt-4 pb-1 pr-4 font-Inter font-bold border-b-2 border-[#F1F1F1] w-3/5">
    Inspirado no último visto
  </h2>

  <div className="grid grid-cols-2 gap-4 px-4 py-4">
    <div className="flex justify-center">
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
        name="Essencial Ato"
        priceDiscount="R$ 159.69"
        price="R$ 119.99"
        imageSize="w-[90px] h-auto ml-[20px]"
        productSize="w-full max-w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div className="flex justify-center">
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialPalo.webp"
        name="Essencial Palo"
        priceDiscount="R$ 209.99"
        price="R$ 199.98"
        imageSize="w-[90px] h-[170px] ml-[20px]"
        productSize="w-full max-w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div className="flex justify-center">
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialPalo.webp"
        name="Essencial Ato"
        priceDiscount="R$ 125.99"
        price="R$ 119.99"
        imageSize="w-[90px] h-auto  ml-[20px]"
        productSize="w-full max-w-[140px] h-[p260px] border-2 border-[#F1F1F1]"
      />
    </div>

    <div className="flex justify-center">
      <ProductCard
        image="/Mercado-Livre/assets/ultimo_visto/EssencialAto.webp"
        name="Essencial Ato"
        priceDiscount="R$ 299.99"
        price="R$ 219.99"
        imageSize="w-[90px] h-auto ml-[20px]"
        productSize="w-full max-w-[140px] border-2 border-[#F1F1F1]"
      />
    </div>
  </div>
</div>

{/* Swiper desktop */}
<div className="hidden md:block w-full max-w-[1213px] rounded-[12px] bg-white mt-5 mx-auto shadow-sm">
        <h2 className="pt-4 ml-8 text-lg font-medium font-Inter">
          Inspirado no último visto
        </h2>
        <div className="w-full px-4 pb-4">
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={true}
            className="py-4"
          >
            {ultimoVisto.map((produto) => (
              <SwiperSlide key={produto.id}>
                <div
                  onClick={() => addToCart(produto)}
                  className="w-[200px] h-[300px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-start border border-gray-100 cursor-pointer hover:shadow-lg transition"
                  title="Clique para adicionar ao carrinho"
                >
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-[60px] mb-2"
                  />
                  <h2 className="text-lg font-semibold text-center">
                    {produto.name}
                  </h2>
                  <h2 className="text-base text-gray-700">{produto.price}</h2>
                  <h3 className="text-sm text-gray-500">
                    {produto.textoParcela}
                  </h3>
                  <p className="text-xs text-[#00A650] text-center">
                    {produto.descricao}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

{/* Propagandas */}
<div className="flex flex-col md:flex-row md:justify-center md:gap-4 md:mt-[40px] md:px-4">
  {/* Propaganda da esquerda */}
  <div className="hidden md:flex md:w-[48%] max-w-[620px] h-[110px] bg-black rounded-[8px] overflow-hidden">
    <div className="flex flex-1 p-4 gap-4">
      <img
        src="/Mercado-Livre/assets/Propaganda/Samsung.webp"
        alt=""
        className="h-[40px] mt-[20px] ml-[20px] md:ml-[40px]"
      />

      <div className="text-white flex-1">
        <h2 className="text-[7px]">MÊS DOS NAMORADOS</h2>
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
        className="w-[180px] h-[110px] object-cover"
      />
      <img
        src="/Mercado-Livre/assets/Propaganda/InteligenciaAbsurda.webp"
        alt=""
        className="w-[190px] h-[110px] object-cover"
      />
    </div>
  </div>

  {/* Propaganda da direita */}
  <div className="hidden md:flex md:w-[48%] max-w-[620px] h-[110px] bg-black rounded-[8px] overflow-hidden">
    <div className="flex flex-1 p-4 gap-4">
      <img
        src="/Mercado-Livre/assets/Propaganda/windos11.webp"
        alt=""
        className="h-[55px] mt-[15px] ml-[20px] md:ml-[40px]"
      />

      <div className="text-white flex-1">
        <h2 className="mt-[5px] text-[10px] font-[Inter]">Novo </h2>
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
        className="w-[230px] h-[110px] object-cover rounded-r-[6.5px]"
      />
    </div>
  </div>
</div>

{/* Tela do Meli+ */}
<div className="w-[345px] mx-auto bg-white rounded-[8px] overflow-hidden shadow-sm
md:max-w-[1212px] md:w-[94%] md:mt-[40px]">
  <div className="bg-gradient-to-r from-[#5F228D] to-[#A21291] flex items-center pt-[10px] pb-[10px] relative">
    <img
      src="/Mercado-Livre/assets/Meli+/Meli+Anuncio.png"
      alt=""
      className="h-[35px] w-[100px] ml-[30px] border-r-[2px] border-white pr-[9px] object-contain"
    />
    <h2 className="pl-[12px] text-white font-[Inter]">
      Assine a partir de <br /> R$ 24.90/mês
    </h2>

    <h2 className="hidden md:block absolute right-[30px] p-1.5 text-white
    bg-[#B442A7] rounded-[4px] hover:bg-[#9D3A8F] cursor-pointer transition-colors">Assinar o Meli+</h2>
  </div>

  {/* Benefícios */}
  <div className="pl-7 pr-4 flex flex-col gap-2.5 border-b border-gray-100 md:flex">
    <h2 className="mt-[17px] font-[Inter] font-semibold text-[15px] md:text-[21.5px]">
      Aproveite estes benefícios exclusivos:
    </h2>

    <div className="md:flex md:items-center md:justify-between md:gap-4 md:pb-[15px] md:flex-nowrap md:overflow-x-auto md:scrollbar-hide">
      <div className="flex items-center gap-2 shrink-0">
        <img
          src="/Mercado-Livre/assets/Meli+/Disney+.png"
          alt="Disney+"
          className="w-[50px] rounded-2xl"
        />
        <h2 className="text-[14px]">Disney+ incluído</h2>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <img
          src="/Mercado-Livre/assets/Meli+/CashBack.png"
          alt="Cashback"
          className="w-[50px] rounded-2xl"
        />
        <h2 className="text-[14px]">CashBack em compras e pagamentos</h2>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <img
          src="/Mercado-Livre/assets/Meli+/Cofrinhos.png"
          alt="Cofrinhos"
          className="w-[50px] rounded-2xl"
        />
        <h2 className="text-[14px]">
          Cofrinhos que rendem 120% do CDI no Mercado Pago
        </h2>
      </div>

      <div className="flex items-center gap-2 pb-[10px] shrink-0">
        <img
          src="/Mercado-Livre/assets/Meli+/Cartao.png"
          alt="Cartão"
          className="w-[50px] rounded-2xl"
        />
        <h2 className="text-[14px]">Até 3 parcelas extras sem juros</h2>
      </div>
    </div>
  </div>

  <div className="flex pt-[8px] pl-7 pb-2.5 md:hidden">
    <h2 className="text-[#3483FA] font-[Inter] font-medium">
      Assinar o Meli+{" "}
    </h2>
    <p className="ml-[180px] text-[#3483FA]"> ˃ </p>
  </div>
</div>


{/* Swiper desktop */}
<div className="hidden md:block w-full max-w-[1213px] rounded-[12px] bg-white mt-5 mx-auto shadow-sm">
        <h2 className="pt-4 ml-8 text-lg font-medium font-Inter">
          Inspirado no último visto
        </h2>
        <div className="w-full px-4 pb-4">
          <Swiper
            slidesPerView={6}
            spaceBetween={16}
            modules={[Navigation]}
            navigation={true}
            className="py-4"
          >
            {ultimoVisto.map((produto) => (
              <SwiperSlide key={produto.id}>
                <div
                  onClick={() => addToCart(produto)}
                  className="w-[200px] h-[300px] bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-start border border-gray-100 cursor-pointer hover:shadow-lg transition"
                  title="Clique para adicionar ao carrinho"
                >
                  <img
                    src={produto.image}
                    alt={produto.name}
                    className="w-[60px] mb-2"
                  />
                  <h2 className="text-lg font-semibold text-center">
                    {produto.name}
                  </h2>
                  <h2 className="text-base text-gray-700">{produto.price}</h2>
                  <h3 className="text-sm text-gray-500">
                    {produto.textoParcela}
                  </h3>
                  <p className="text-xs text-[#00A650] text-center">
                    {produto.descricao}
                  </p>
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
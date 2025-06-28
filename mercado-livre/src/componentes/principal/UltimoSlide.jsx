import { Swiper, SwiperSlide } from 'swiper/react';

const SlideFinal = () => {

    const formas = [
        {id : "1", image: "/assets/UltimoSlider/payment.svg",
             name: "Escolha como Pagar",
             descricao: "Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x sem cartão com a Linha de Crédito.",
             extra: "Como pagar com Mercado Pago"
        },

        {id : "2", image: "/assets/UltimoSlider/shipping.svg",
            name: "Frete grátis a partir de R$ 19",
            descricao: "Ao se cadastrar no Mercado Livre, você tem frete grátis em milhares de produtos.",
       },

       {id : "3", image: "/assets/UltimoSlider/protected.svg",
        name: "Segurança, do início ao fim",
        descricao: "Você não gostou do que comrpou? Devolva! No Mercado Livre não há nada que você não possa fazer, porque você está sempre protegido.",
        extra: "Como te protegemos"
   }
    ]
    return(
    <>
        <Swiper >
            {formas.map((slide) => (
            <SwiperSlide key={slide.id}>
                    <div className='w-full h-[280px] mt-[20px] bg-[white] flex flex-col justify-center items-center'>
                        <img src={slide.image} alt=""
                        className='w-[85px] '
                         />
                        <h2 className='mt-[15px] font-[Inter] font-light text-[#565656]'>{slide.name}</h2>
                        <p className='w-[260px] text-[13.5px]'>{slide.descricao}</p>
                        <p className='mt-[5px] text-[#3483F9] text-[13px] font-[400]'>{slide.extra}</p>
                    </div>
            </SwiperSlide>
            ))}
        </Swiper>
    </>
    )
}

export default SlideFinal
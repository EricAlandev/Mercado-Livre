const ProductCard = ( {image,emCima, name, price, priceDiscount, descricao, imageSize, productSize, mostrarMeios}) => {

    return(
        <div className={` rounded-[6px] bg-[white] mt-[10px] ml-[10px]
        flex flex-col justify-center gap-1.5
        ${productSize || "w-[200px] h-[270px]" }
        `}>
            <h2 className="ml-[8px] text-[12px] text-[black] font-bold font-[Inter]
            md:flex md:justify-center md:text-[14px]
            ">{emCima}</h2>
            <img src={image} alt=""
            className={`ml-[7px] rounded-[8px] 
                ${imageSize ||  "w-[120px] h-[100px]"}
                `}
             />
            <h2 className="ml-[5px] font-[Inter] text-[11px] break-words w-[120px]
            md:flex  md:w-[180px] md:ml-[10px] md:text-[14px]
            ">{name}</h2>
            <h3 className="ml-[5px] text-[gray] text-[12px] line-through ">{priceDiscount}</h3>
            <h3 className="ml-[5px] text-[black] text-[14px] md:ml-[10px]">{price}</h3>

            {/*Feito para por o extra, como Frete grátis, Full etc*/}
            <h3 className=" ml-[5px] text-[13px] text-[#00A650] md:text-[14px]">{descricao}</h3>

            {/*Feito para por o extra quando é um botão, como Mostrar meios*/}
            <h3 className="flex justify-center
             w-[150px] ml-[20px]
             rounded-[12px] bg-[#CADDF8] 
             font-[Inter] text-[#3986FA]
             text-[14px]
              ">{mostrarMeios}</h3> 
                {/*Substituir mostrarMeios por um Link futuramente */}

        </div>
    )
}

export default ProductCard;
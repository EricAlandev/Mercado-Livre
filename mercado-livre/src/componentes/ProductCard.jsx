const ProductCard = ( {image,emCima, name, price, priceDiscount, descricao, imageSize, border}) => {

    return(
        <div className={` rounded-[6px] bg-[white] mt-[10px] ml-[10px]
        flex flex-col justify-center gap-1.5
        ${border || "w-[200px] h-[270px]" }
        `}>
            <h2 className="ml-[8px] text-[12px] text-[black] font-bold font-[Inter]">{emCima}</h2>
            <img src={image} alt=""
            className={`ml-[7px] rounded-[8px] 
                ${imageSize ||  "w-[120px] h-[100px]"}
                `}
             />
            <h2 className="ml-[5px] font-[Inter] text-[11px] break-words w-[120px]

            ">{name}</h2>
            <h3 className="ml-[5px] text-[gray] text-[12px] line-through">{priceDiscount}</h3>
            <h3 className="ml-[5px] text-[black] text-[14px] ">{price}</h3>
            <h3 className=" ml-[5px] text-[13px] text-[#00A650]">{descricao}</h3>

        </div>
    )
}

export default ProductCard;
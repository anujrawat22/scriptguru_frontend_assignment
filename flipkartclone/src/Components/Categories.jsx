const data = [{
    img: 'https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100',
    text: 'Grocery'
}, {
    img: "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
    text: "Mobiles",
}
    , {
    img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
    text: "Fashion",
    subcatergories: ["Men's Top Wear", "Men's Bottom Wear", "Women Ethnic", "Women Western", "Watches and Accessories", "Bags, Suticase & Luggage", "Kids", "Essentails"]
}
    , {
    img: "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    text: "Electronics",
    subcatergories : ["Audio" , "Electronics GST store" , "Cameras & Accessories" , "Computer Peripherals"  , "Gaming" , "Health & Personal Care"]
}
    , {
    img: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    text: "Home & Furniture",
}
    , {
    img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
    text: "Appliances",
}
    , {
    img: "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    text: "Travel",
}
    , {
    img: "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
    text: "Beauty,Toys & More",
}
    , {
    img: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
    text: "Two Wheelers",
}]

const Categories = () => {
    return (
        <div className="w-full h-42 px-6 pt-20 pb-4 z-10">
            <div className="w-full h-full bg-white flex justify-center cursor-pointer">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="relative group min-w-32 flex flex-col justify-around items-center px-2 ">
                            <img src={item.img} alt="category" className="w-full h-2/4 object-contain" />
                            <p className="m-0 font-semibold">{item.text}</p>
                            {item.subcatergories ? (
                                <div className="hidden absolute bg-white border rounded top-40 w-52 text-gray-700 group-hover:flex-col group-hover:flex z-30">
                                    {item.subcatergories.map((subCategory, subIndex) => (
                                        <button key={subIndex} className="h-8 hover:bg-slate-300">{subCategory}</button>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories
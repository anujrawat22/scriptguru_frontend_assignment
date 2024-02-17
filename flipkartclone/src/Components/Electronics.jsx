const data = [
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Top Mirrorless Cameras",
        tagLine: "Shop Now"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "best of Women Trimmers",
        tagLine: "From ₹599"
    }, {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "ViewSonic Monitors",
        tagLine: "From ₹8000"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Printers",
        tagLine: "From ₹3999"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Top Selling Dell Keyboard",
        tagLine: "From ₹229"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Premium PowerBanks",
        tagLine: "Shop Now"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Best of Shavers",
        tagLine: "From ₹1,649"
    },
    {
        image: "https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90",
        category: "Best of Shavers",
        tagLine: "From ₹1,649"
    }
]
const Electronics = () => {
    return (
        <div className="w-full h-72 px-6 py-4 mb-10 overflow-x-scroll no-scrollbar">
            <div className=" w-full bg-white border p-4 h-auto">
                <h1 className=" font-medium">Best of Electronics</h1>
                <div className="flex overflow-x-scroll no-scrollbar justify-around rounded py-4">
                    {
                        data.map((item, index) => {
                            return <div key={index} className="border min-h-40 min-w-44 text-center p-2 rounded">
                                <img src={item.image} alt="image" className="h-2/3"/>
                                <p >{item.category}</p>
                                <p className=" font-medium">{item.tagLine}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Electronics
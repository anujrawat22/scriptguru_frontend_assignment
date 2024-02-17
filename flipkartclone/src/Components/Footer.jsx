const info = [
    {
        heading: "ABOUT",
        subheadings: ["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Corporate Information"]
    }, {
        heading: "GROUP COMPANIES",
        subheadings: ["Myntra", "Flipkart Wholesale", "Cleartrip", "Shopsy"]
    }, {
        heading: "HELP",
        subheadings: ["Payments", "Shipping", "Cancellation & Returns", "FAQ", "Report Infingement"]
    }, {
        heading: "Mail US:",
        subheadings: ['Dummy text']
    }, {
        heading: "Registered Office Address",
        subheadings: ["Dummy text"]
    }
]

const Footer = () => {
    return (
        <div className="border h-52 flex bg-gray-800 justify-around py-4">
            {
                info.map((item, index) => {
                    return <div key={index}>
                        <h4 className=" text-gray-500">{item.heading}</h4>
                        {
                            item.subheadings.map((subheading, index) => {
                                return <p key={index} className="xs:text-xxs text-white text-xs font-medium hover:cursor-pointer hover:underline">{subheading}</p>
                            })
                        }
                    </div>
                })

            }
        </div>
    )
}

export default Footer
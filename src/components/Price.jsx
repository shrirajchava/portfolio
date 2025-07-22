import React from "react";

function price (){
    const header = {
        subHeading: "popular pricing plan For Creative Project",
        text:
        "When building a website, start here. our shared service delivers a powerful, proven plantform that's perfect for hosting your website.",
    };
    const state = [
{
id: 1,
heading: "Basic",
price: 299,
msg1: "Web Design (UX/UI)",
msg2: "Software Development",
msg3: "Fashion Design (Arts)",
msg4: "Web Development (php)",
msg5: "Game Design & DV",
},
{
id: 2,
heading: "Professional",
price: 499,
msg1: "Web Design (UX/UI)",
msg2: "Software Development",
msg3: "Fashion Design (Arts)",
msg4: "Web Development (php)",
msg5: "Game Design & DV"
},
{
id: 3,
heading: "Business",
price: 999,
msg1: "Web Design (UX/UI)",
msg2: "Software Development",
msg3: "Fashion Design (Arts)",
msg4: "Web Development (php)",
msg5: "Game Design & DV",
},
 ];
    return (
<div className="price">
    <div className="container">
        <div className="common">
            <h2 className="mainHeader">
{header.subHeading}
            </h2>
            <h6 className="maincontent">{header.text}</h6>
            <div className="commonBorder"></div>
        </div>
        <div className="row">
            {state.map((prices)=>(
          <div className="col-4" key={prices.id}>
            <div className="price">
                <div className="priceHeading">${prices.heading}</div>
                <div className="price_rs">
                    <span>$</span>
                    {prices.price}
                </div>
                <ul>
                    <li>{prices.msg1}</li>
                    <li>{prices.msg2}</li>
                    <li>{prices.msg3}</li>
                    <li>{prices.msg4}</li>
                    <li>{prices.msg5}</li>
                </ul>
                <div className="price_btn">
                    <a href="price" className="btn btn-outline">
                  start now
                    </a>
                </div>
            </div>
          </div>
           ))}
        </div>
    </div>
</div>

    )
}

export default price;
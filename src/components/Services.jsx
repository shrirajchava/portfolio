import React from "react";

function Services () {
const header = {
    mainHeader: "My Expertise",
    subHeading: "Provide wide Range of Digital services ",
};
const state = [
{
id: 1,
icon: './image/service-icon1.png',
heading: "Ui/Ux Design",
text:
"Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
},
{
id: 2,
icon: './image/service-icon2.png',
heading: "Web Design",
text:
"Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
},
{
id: 3,
icon: './image/service-icon3.png',
heading: "Web Development",
text:
"Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam.",
},
{
id: 4,
icon: './image/service-icon4.png',
heading: "App Development",
text:
"Dolor repellendus temporibus autem quibusdam officiis debitis rerum neces aibus minima veniam."
},
{
id: 5,
icon: './image/service-icon.png',
heading: "Video Editing",
text:
"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
},
{
id: 6,
icon: './image/service-icon.png',
heading: "SEO Expert",
text:
"Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
},
];


    return(
<div className="services">
    <div className="container">
        <div className="services_header">
            <div className="common">
            <h6 className="heading">{header.mainHeader}</h6>
            <h2 className="subheading">{header.subHeading} </h2>
            <div className="commonBorder"></div>
            </div>
            <div className="row bgMain">
                {state.map((info)=>(
                    <div className="col-4 bgMain">
                        <img src="{info.icon}" alt="" className="commonIcons" />
                        <h4 className="services_box-header">{info.heading}</h4>
                        <p className="services_box-p">{info.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
</div>

    )
}

export default Services;
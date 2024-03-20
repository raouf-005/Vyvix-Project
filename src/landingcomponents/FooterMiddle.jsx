import FooterList from "./FooterList";

const footerlist=[
    {
        title:"company"
        ,list:['hey','there']
    },   
    {
        title:"company"
        ,list:['hey','there']
    },
    {
        title:"company"
        ,list:['hey','there']
    },
    {
        title:"company"
        ,list:['hey','there']
    },
    {
        title:"company"
        ,list:['hey','there']
    }
]



export default function FooterMiddle (){

    return(
        <div className="grid grid-flow-col grid-cols-footer gap-4  pt-8  px-10 pl-16">
            <div> 
            <h3 className=" text-xl font-semibold mb-4   ">
                VYVIX
            </h3>
            <p className= "  max-w-44 text-md font-light ">
                Data visualization, and 
                expense management 
                for your life.
                
            </p>
            </div>
            <div className=" grid grid-flow-col ">

            {footerlist.map((item ,index)=>{
                return(
                    <FooterList {...item} key={index} />
                )
            
                })
             }
     
            </div>
            


        </div>
    )

}
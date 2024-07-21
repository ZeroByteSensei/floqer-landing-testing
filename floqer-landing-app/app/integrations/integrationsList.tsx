'use client'
import Link from "next/link";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const IntegrationsList = ({content}:{content:any}) => {

    const [setselectedCategory, setSetselectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("")


    const categoryFilter = (content:any) => {
        return content.filter((item:any) => {
            if(setselectedCategory==="All") {
                return item && item.name.toLowerCase().includes(searchQuery);
            } else {
                return item.content.category[0] === setselectedCategory && item.name.toLowerCase().includes(searchQuery);
            }
        });
    }


    const filtered = categoryFilter(content)
    // console.log(filtered, "filteredData");
    return ( 
        <>
        <div className="flex items-center gap-x-2 w-fit bg-white px-2 border border-black rounded-sm">
            <FaMagnifyingGlass/>
            <input type="text" placeholder="Search" className="px-2 py-2 outline-none" onChange={(e)=>setSearchQuery(e.target.value.toLowerCase())}/>
        </div>
        <div className="flex items-start">
            {/* The Categories SideBar */}
            <div className="pr-10 mt-10">
                <h1 className="text-lg border-b-1 mb-4">CATEGORIES</h1>
                <p className={`${setselectedCategory==="All"?"bg-bgSelected pl-2":""} cursor-pointer`}
                onClick={()=>setSetselectedCategory("All")}
                >All</p>
                {content.map((item:any, index:number) => (
                        <p key={index} 
                        className={`capitalize ${setselectedCategory===item.content.category[0]?"bg-bgSelected pl-2":""} cursor-pointer mt-4`}
                        onClick={()=>setSetselectedCategory(item.content.category[0])}>
                            {item.content.category[0]}
                        </p>
                    ))}
            </div>

            {/*  */}
            <div className="mt-10 px-20">
                <h1 className="uppercase text-primary font-bold text-xl">{setselectedCategory}</h1>

                <div className="flex gap-x-2 gap-y-2 mt-6">
                    {
                        filtered.map((item:any, index:number) => (
                            <div key={index} 
                            className="w-[300px] px-4 py-6 rounded-md border border-black gap-y-2 cursor-pointer bg-white hover:bg-gray-200">
                                <Link href={`/integrations/${item.slug}`}>
                                    <h1 className="font-bold text-xl">{item.name}</h1>
                                    <p>{item.content.IntegrationDetails}</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <select name="" id="" className="">
                    <option value="All">All</option>
                    {content.map((item:any, index:number) => (
                        <option key={index} value={item.content.category[0]}>{item.content.category[0]}</option>
                    ))}
                </select>
            </div>

        </div>
        </>
     );
}
 
export default IntegrationsList;
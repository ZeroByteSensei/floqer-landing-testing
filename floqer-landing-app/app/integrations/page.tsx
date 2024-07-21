import Navbar from "@/app/_components/Navbar"
import Head from "next/head";
import IntegrationsList from "./integrationsList";

const getIntegrations = async () => {
    const resulting = await fetch("https://api-ca.storyblok.com/v2/cdn/stories?starts_with=integrations-page/&version=published&token=me7kLZbMnLCfhuknlXHChgtt", {cache:"force-cache"});
    const content = await resulting.json();
    // console.log(resulting, "resulting");
    return content.stories;
    
};


const Integrations = async() => {
    // const { data } = await fetchData();
    // const content = data.stories;
    const content = await getIntegrations();
    // console.log(content, "content");


    // console.log(data, "data");
    // console.log(content, "content");
    // console.log(renderedRichText, "renderedRichText");
    return ( 
        <>
        <Head>
            <title>Floqer Integrations | Best alternative to Clay.com</title>
            <meta name = "description" content="Floqer is the best alternative to Clay.com, providing sales teams with 100+ data sources helping them enrich the data at the most cost-effective price range, and automate sales processes with AI powered workflows. Start using Floqer today!" />
        </Head>

        <div className="bg-bgPrimary text-black w-full px-14 py-10">
            <Navbar/>
            {/* <TextComponent content={content}/> */}
            {/* <StoryblokStory story={content}/> */}

            {/* <StoryblokComponent blok={content}/> */}
            {/* {content.name} */}

            <h1 className="text-[52px] font-secondary mt-20">Integrations</h1>
            <p className="text-[22px] w-[666px]">Explore how to enhance your GTM stack with our never ending library of seamless native integrations.</p>
            <div className="bg-bgPrimary py-10">
                <IntegrationsList content={content}/>
            </div>
        </div>
        </>
     );
}


export default Integrations;

// export async function fetchData() {
//     const storyblokApi = getStoryblokApi();
//     return storyblokApi.get(`cdn/stories`, { starts_with: "integrations-page/", version: "published" });
// }

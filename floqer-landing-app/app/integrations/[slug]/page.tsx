
export const generateStaticParams = async () => {
    const resulting = await fetch("https://api-ca.storyblok.com/v2/cdn/stories?starts_with=integrations_page&token=me7kLZbMnLCfhuknlXHChgtt&version=published");
    const content = await resulting.json();
    
    return content.stories.map((integration:any) => ({slug: integration.slug}));
}

const getIntegration = async (slug:any) => {
    try {
        const resulting = await fetch(`https://api-ca.storyblok.com/v2/cdn/stories/integrations-page/${slug}?cv=1721496171&token=me7kLZbMnLCfhuknlXHChgtt&version=published`, {cache:"force-cache"});
        const content = await resulting.json();
        // console.log(content, "content");
        return content.story;
    } catch (error) {
        console.log("ERROR_SLUG_INTEGRATION", error);
    }
};

const SingleIntegration = async ({params}:any) => {
    const {slug} = params;

    const integration = await getIntegration(slug);
    // const content = await getIntegrations();
    // console.log(integration, "integration");
    if(!integration){
        return <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-primary">
            <h1 className="text-[55px] font-bold">404!</h1>
            <p>Page Not Found</p>
        </div>
    }

    return ( 
        <div>

            <h1>{integration.name}</h1>
            <p>Category: {integration.content.category[0]}</p>
        </div>
     );
}
 
export default SingleIntegration;

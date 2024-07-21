import { getStoryblokApi, renderRichText } from "@storyblok/react";

const TextComponent = ({content}:{content:any}) => {

    function createMarkup(c:any) {
        return { __html: c };
    }
    const renderedRichText = renderRichText(content);

    console.log(renderedRichText, "renderedRichText");


    return ( 
        <div className="bg-red-300 text-black w-full px-10">
            <div dangerouslySetInnerHTML={createMarkup(renderedRichText)}>
                
            </div>
            
        </div>
     );
}
 
export default TextComponent;

export async function fetchData() {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories`, { starts_with: "integrations-page/", version: "published" });
}
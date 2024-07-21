/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "../page";
// import Teaser from "../components/Teaser";

const components = {
  page: Page,
};

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "gNLWn2fepqdgEYQkNfeW3gtt",
  use: [apiPlugin],
  apiOptions: {
    region: "ca",
  },
  components,
});

export default function StoryblokProvider({ children }:{children:any}) {
  return children;
}
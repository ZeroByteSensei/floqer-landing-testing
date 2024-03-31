export enum Type {
  linkedin = "linkedin",
  apollo = "apollo",
  generation = "generation",
}

export const faqs = [
  {
    question: "How does Floqer work?",
    answer: (
      <>
        <div className="mb-2">
          {
            "Floqer lets you build and automate your sales flows. Building a flow generally consists of 3 simple steps: "
          }
        </div>
        <div className="mb-2">
          <span className="font-semibold ">
            1. Importing your leads:
          </span>{" "}
          {
            "Floqer makes it easy to pull in lists of leads from dozens of sources including HubSpot/Salesforce, LinkedIn, Webhooks, or even CSV imports."
          }
        </div>
        <div className="mb-2">
          <span className="font-semibold ">2. Enriching leads: </span>
          {
            "Floqer collaborates with leading enrichment providers such as Hunter.io, Datagma, Zoominfo, etc. to enhance leads. Whether you begin with names, emails, LinkedIn profiles, or just a company domain, Floqer's integrations deliver an extensive range of people or company data, spanning from available positions to years of expertise and verified work emails. If it's out there on the web, Floqer has it covered – nothing escapes our radar."
          }
        </div>
        <span className="font-semibold ">
          3. Connecting destinations:{" "}
        </span>

        {
          "Floqer seamlessly integrates with a variety of tools, catering perfectly to your stack. From Outreach and customer.io to HubSpot/Salesforce, Apollo, Zapier (HTTP API), and beyond, we've got you covered. And if your desired destination isn't on our list, fear not – we'll build it for you at zero cost."
        }
      </>
    ),
  },
  {
    question: "How can Floqer offer so many enrichments at such a low cost?",
    answer:
      "We offer a simple monthly subscription that costs much less than what you'd pay for single data providers. Because we buy credits in bulk, you get them at a lower price without needing to sign up for large, unnecessary commitments. You can choose from over 50 data providers to find the ones that work best for you in reaching potential customers.",
  },
  {
    question: "What is the benefit of using multiple data providers?",
    answer:
      "Utilizing multiple data providers offers several advantages. It enables you to layer enrichments, thereby optimizing accuracy and expanding your search range while minimising costs. For example, you can employ LinkedIn to gather profile details and then utilize Datagma, Hunter.io, and RocketReach - all at the same time to obtain their work emails. Floqer introduces an innovative approach to sourcing the most valuable lead information at an unbelievable price point.",
  },
  {
    question: "How does AI and GPT-4 work within Floqer?",
    answer:
      "AI is only as powerful as the data that powers it. We understand that approaching each prospect needs a tailored process, and specific messaging. We use AI, not just to create specific outbound messaging for each prospect, but also to make decisions on which process to close the most meetings.",
  },
  {
    question: "Can Floqer be customized to fit my sales process?",
    answer:
      "Yes, absolutely. Most of our customers use tools such as Outreach, Instantly, Apollo, Zoominfo, and the list goes on. If you use a tool that is not on our list, we’ll build it for free of cost to make sure your sales process flows seamlessly.",
  },
  {
    question: "How can I sign-up?",
    answer: (
      <>
        {"We’re just a click away, Sign-up on this "}
        <a
          href=""
          target="_blank"
          className="underline text-primary font-semibold"
        >
          link
        </a>{" "}
        and we’ll be in touch in a few hours to get you started.
      </>
    ),
  },
  {
    question: "What makes Floqer different from other sales automation tools?",
    answer: `There is a looooong list of extremely capable sales tools teams use to make an effective sales process. For example, Zoominfo/Apollo for data enrichment, RocketReach or Hunter.io for verified email finding, Outreach for sending emails, LinkedIn Helper for linkedIn automation, and so on. This list keeps on getting bigger but sales people keep juggling between tools to find the sweet spot to optimize their sales process while staying within budget. At Floqer, we bring all of these specialised tools in one spot, so you can quickly iterate your sales process as your needs change. `,
  },
  {
    question: "Why choose us to improve your sales process?",
    answer: `Our sales team brings a wealth of experience from designing top-tier sales strategies at Fortune 500 companies. We're leading the charge to make data and sales tools accessible to all, ensuring sales processes are not just automated but transformed. We, as founders, guarantee an unmatched level of support, committing to make your sales team's success our top priority. We're here for you, 24/7, 365 days a year. When you choose us, you're not just picking another sales tool; you're joining forces with a team that won't stop until your sales are reaching new heights.`,
  },
];


export const reviews = [
  {
    user: "Uday Parmar",
    designation: "Sales Leader",
    subtitle: "What would take me three weeks, Floqer did in 3 mins.",
    review: <>{"I used to dedicate weeks to find orgs that are a fit and populate a sheet with leads from those orgs, do research on each org and create and send personalised emails. With Floqer, I was able to generate emails for an ICP in a matter of minutes using my tone and voice... "}</>
  },
  {
    user: "Pulkit Jaiswal",
    designation: "Sales Leader",
    subtitle: "Response rate was 2X normal!",
    review: <>{"Referred you to a few friends that will be trying it out :) We just finished the campaign with the initial 1,600 leads and the results were very conclusive! Response rate was 2X normal."}</>
  },
  {
    user: "Vishal Makwana",
    designation: "Director, Business Development",
    subtitle: "Anyone who isn't using tech like Floqer’s are going to fall behind.",
    review: <>{"My favourite part about how advanced automated email and messaging is becoming is the fact that we're not only automating the writing part, but the reading too!"}</>
  },
  {
    user: "Arjun R. Krishna",
    designation: "Co-founder at WeMakeScholars",
    subtitle: "THE premium sales automation tool around",
    review: <>{"I was sceptical at first about how an AI tool could understand the nuances or the different tasks involved in our sales cycle. But I've been pleasantly surprised! The automations are rather easy to learn, and use, allowing me to actually focus on what matters, SELLING!"}</>
  },


]


export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export interface ProjectInfo {
  id: string;
  title: string;
  cardDescription: string;
  detailedDescription: string;
  cardImage: string;
  detailedImage: string;
  imageScaling: string;
  technologies: string[];
  sourceLink: string;
  demoLink: string;
  challenges: string;
  takeaways: string;
}

export const projects: ProjectInfo[] = [
  {
    id: "service-desk",
    title: "AI-Powered IT Service Desk",
    cardDescription: "A web application that leverages LLMs to determine an issue's business impact, provide potential solutions, and route the issue to the correct team.",
    detailedDescription: "An IT service desk web application developed as my senior capstone project. Built with a React front end and cloud-native back end integrated using Amazon API Gateway, it automates incident triage by leveraging Anthropic's Claude 3.7 Sonnet model via Amazon Bedrock. Upon incident report creation, it predicts incident priority based on potential business impact, suggests relevant knowledge articles, and identifies the appropriate team for resolution.",
    cardImage: "/images/service-desk-card.png",
    detailedImage: "/images/service-desk.png",
    imageScaling: "object-left",
    technologies: ["Amazon Bedrock", "Amazon Cognito", "AWS Lambda"],
    sourceLink: "",
    demoLink: "",
    challenges: `
      <h3 class="underline decoration:2 text-lg">Challenge: Data Security & Access Control</h3>
      <p class="text-gray-700 mb-2">The application needed to securely handle sensitive incident report data and ensure that only authenticated and authorized users could access certain features. Protecting API routes and managing user sessions while integrating with AWS added complexity, especially when dealing with a federated identity provider.</p>
      <p class="text-gray-700 mb-4">To address this, I implemented protected routes on the front end using <code class="font-mono bg-gray-200 text-black px-1 py-0.5 rounded text-sm">react-oidc-context</code> for streamlined OpenID Connect (OIDC) authentication. On the back end, I integrated Amazon Cognito to manage user pools and federate identities, ensuring secure, scalable authentication. Fine-grained access control was enforced by configuring Cognito roles and policies, allowing for role-based access to specific API Gateway routes.</p>
      <h3 class="underline decoration:2 text-lg">Challenge: Effective Prompt Engineering Without Historical Data</h3>
      <p class="text-gray-700 mb-2">I initially considered training a custom classifier using Amazon Comprehend to predict incident priorities, suggest relevant knowledge articles, and identify the appropriate responding team. However, due to insufficient client-specific historical data, training an effective supervised model was not feasible.</p>
      <p class="text-gray-700 mb-4">Instead, I focused on prompt engineering to get the most out of Anthropic's Claude 3.7 Sonnet model via Amazon Bedrock. I designed a lightweight, context-rich prompt that clearly framed each incident report, including relevant metadata such as category, location, and description. This enabled Claude to provide accurate priority predictions and relevant knowledge article suggestions without the need for custom fine-tuning. Through iteration and testing, I refined the prompt to keep it succinct yet complete, minimizing latency while maintaining high accuracy.</p>
    `,
    takeaways: `
      <ul class="mb-4 text-gray-600 space-y-2 pl-5">
        <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Gained experience integrating secure authentication and authorization using Amazon Cognito.</li>
        <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Learned how to design effective, lightweight prompts to leverage LLMs without requiring custom fine-tuning.</li>
        <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Improved my ability to design scalable, cloud-native architectures using Amazon Web Services.</li>
      </ul>
    `
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    cardDescription: "This web application was built using React and is being hosted on Vercel. Vercel Functions serverlessly routes contact forms to Amazon SES.",
    detailedDescription: "This web application was built using React with TypeScript and is being hosted on Vercel. Amazon API Gateway, AWS Lambda, and Amazon SES are used to securely handle contact form delivery.",
    cardImage: "/images/personal-portfolio.png",
    detailedImage: "/images/personal-portfolio.png",
    imageScaling: "object-left",
    technologies: ["React", "TypeScript", "Amazon SES"],
    sourceLink: "https://github.com/gavinheiner/personal-portfolio",
    demoLink: "https://www.gavinheiner.com",
    challenges: `
      <h3 class="underline decoration:2 text-lg">Challenge: Mobile Responsiveness</h3>
      <p class="text-gray-700 mb-2">Making the website look good and function well on all devices was difficult. Elements that displayed perfectly on desktop screens would often break or become unusable on mobile phones.</p>
      <p class="text-gray-700 mb-4">I solved this by implementing a mobile-first design approach using breakpoints to create flexible layouts. I tested each component on multiple screen sizes and made adjustments to ensure text remained readable, images scaled properly, and navigation remained intuitive regardless of device.</p>
      <h3 class="underline decoration:2 text-lg">Challenge: Project Organization</h3>
      <p class="text-gray-700 mb-2">With multiple projects to showcase, I struggled to present them in a way that was both informative and engaging.</p>
      <p class="text-gray-700 mb-4">I designed a card-based system that displays key information about each project while allowing visitors to opt-in to more detailed information. I also created a consistent format for presenting technologies used and key outcomes.</p>
    `,
    takeaways: `
    <ul class="mb-4 text-gray-600 space-y-2 pl-5">
      <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Learned the importance of responsive design and how to implement it effectively.</li>
      <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Developed skills in creating organized, user-friendly interfaces that highlight my work effectively.</li>
      <li class="relative pl-2"><span class="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>Improved my ability to balance aesthetics with functionality in web design.</li>
    </ul>
    `
  }
];

export interface ExperienceInfo {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceInfo[] = [
  {
    title: "Software Development Intern",
    company: "Aptiv",
    period: "Jul 2024 - Aug 2024",
    location: "Troy, MI",
    description: [
      "Saved 8 developer hours per sprint by automating the tagging and release processes for 15+ Git repositories.",
      "Created a basic Spring Boot application demonstrating different concurrency control mechanisms.",
      "Configured an OAuth2 web client for an existing microservice using the client credentials flow."
    ],
    technologies: ["Python", "GitHub Actions", "Java", "Spring Boot"]
  },
  {
    title: "Software Development Intern",
    company: "Benefit Outsourcing Solutions",
    period: "May 2022 - Aug 2022",
    location: "Commerce, MI",
    description: [
      "Accelerated the release process by 12x with shell scripts, merging 10+ GitFlow repositories into a centralized codebase while preserving their individual commit histories and tags for minimal workflow disruption.",
      "Developed a REST API with 10+ Swagger-documented endpoints using Java and Spring Boot.",
      "Participated in workshops, code reviews, daily stand-ups, and weekly sprint planning meetings."
    ],
    technologies: ["Bash", "Java", "Spring Boot", "Swagger"]
  }
];
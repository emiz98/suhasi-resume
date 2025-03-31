export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Undergraduate Trainee Service Strategist",
        subTitle: "IFS R&D International (Pvt) Ltd",
        date: "July 2024 - Present",
        description:
          "Designed and built interactive dashboards using Power Automate and Power BI for data visualization and reporting. \n Assisted in planning and setting up initial service processes for IFS Cloud and Legacy products, ensuring structured workflows. \n Created Microsoft Forms integrated with Power Automate and SharePoint Lists to automate service request processing. \n Maintained and updated Service Catalog (SC) pages, ensuring accurate and up-to-date information. \n Authored Knowledge Base Articles (KBAs) to document key processes and solutions.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "BSC(Hons) in Business Information System",
        subTitle:
          "Informatics Institute of Technology, affiliated with the University of Westminster, UK",
        date: "2023 - Present",
        // description: "Specialized in web development.",
      },
      {
        title: "G.C.E Ordinary/Advanced Level, Commerce Stream",
        subTitle: "Girls' High School Mt.Lavinia",
        date: "2014 - 2022",
        // description: "Specialized in web development.",
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Tourism Mobile App",
        subTitle: "A mobile application for the tourism industry",
        date: "2024",
        description:
          "We have developed a solution for a challenge in the tourism industry, focusing on planning an entire trip in one place.",
      },
      {
        title: "Code Care Website",
        subTitle:
          "A website for a non-profit organization focused on coding education",
        date: "2023",
        description:
          "I worked as a Project Manager and group leader in this project.",
      },
    ],
  },
];

export type Content = {
  title: string;
  items: {
    title: string;
    subTitle: string;
    date: string;
    description?: string;
  }[];
};

export type ContentData = Content[];

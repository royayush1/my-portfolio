export interface TimelineEvent{
    id: number;
    date: string;
    title: string;
    description: string;
    image: string;
    type: 'project' | 'internship' | 'hackathon';
    link: string;
}

export const timelineData: TimelineEvent[] = [
    {
        id: 1,
        date: "Jan 2025 - Present",
        title: "Bissel Centre",
        description: "This project will be used by the Bissell Centre’s administrative staff to manage the distribution of digital bus passes (ARC cards). Furthermore, this product will be used to create user profiles and streamline data entry for reports that are sent to the City of Edmonton through Google Forms, enabling a more scalable and automated bus pass management system.",
        image: "/images/Bissel.png",
        type: "project",
        link: "https://github.com/UofA-Blueprint" //Temp Link

    },
    {
        id: 2,
        date: "Oct 2025",
        title: "AltVision",
        description: "AltVision is a Chrome Extension that scans any page for images and unlabeled background images, then generates concise, WCAG-quality alt text entirely on-device using Chrome’s built-in AI (Gemini Nano). Optional: translate the generated alt into your chosen language using the on-device Translator API. One click can also write the alt directly into the page (alt or aria-label). Built-in Chrome AI APIs used: Prompt API, Translator API",
        image: "/images/altvision.jpg",
        type: "hackathon",
        link: "https://github.com/royayush1/altvision.git"

    },
    {
        id: 3,
        date: "August 2025",
        title: "Book Recommender",
        description: "A Next.js + TypeScript book recommender that embeds your tastes with OpenAI, retrieves nearest matches from Supabase (Postgres + pgvector), and explains picks with GPT-4.1—deployed on Vercel with a Tailwind UI",
        image: "/images/biblio.png",
        type: "project",
        link: "hhttps://bibliorecs.vercel.app"

    },

    {
        id: 4,
        date: "July 2025",
        title: "Polyglot ",
        description: "AI-powered language translator and tutor using Next.js, OpenAI's GPT 4.1 & Whisper API, Tailwind CSS and Google Cloud API",
        image: "/images/polyglot.png",
        type: "project",
        link: "https://polyglottutor.vercel.app"

    },
    {
        id: 5,
        date: "Jan 2025 - Feb 2025",
        title: "Personal Portfolio Website",
        description: "The website you're on right now!! The website all about me :)",
        image: "/images/portfolio1.png",
        type: "project",
        link: "https://github.com/royayush1/my-portfolio"

    },
    {
        id: 6,
        date: "Dec 2024 - Jan 2025",
        title: "Movie Recommender App",
        description: "A hybrid movie recommendation system that combines a Collaborative Filtering Model and a Content Based Model (limited only to similar titles and genres) built using the MovieLens 32M dataset.",
        image: "/images/MovieApp.png",
        type: "project",
        link: "https://github.com/royayush1/movie-recommender-system" 

    },
    {
        id: 7,
        date: "June 2024 - Nov 2024",
        title: "Roblox - Warehouse Tycoon",
        description: "A warehouse-based tycoon game where players grow their business empire by battling others, completing quests, managing logistics and optimizing storage.",
        image: "/images/tycoon.png",
        type: "project",
        link: "https://github.com/CMC-Gaming/CMC-Tycoon"
    },
    
    {
        id: 8,
        date: "Jan 2024 - May 2024",
        title: "TangoRide/Coreo",
        description: "A web app that generates employee cluster maps and carpooling connections from employee postal codes. Click on this box to take you to the app store for the tangoride web app (if it has released). Coreo's main website: https://gocoreo.com",
        image: "/images/tango.jpg",
        type: "internship",
        link: "https://apps.apple.com/au/app/tangoride-carpooling/id1449951780"
    },
    {
        id: 9,
        date: "Jan 2024 - April 2024",
        title: "Theming City Engagement",
        description: "The City of Edmonton collects a large amount of qualitative feedback from the public, in the form of open-ended survey responses. The Edmonton Insight Community alone has thousands of members. Understanding what general themes are contained in these responses is important for planning. Implemented a Python-based NLP model using pandas and based on RoBERTa via the Hugging Face library to help optimize civilian survey data classification to help the City make more informed decisions on its policies",
        image: "/images/edmonton.png",
        type: "project",
        link: "https://drive.google.com/file/d/1U9DR-B2oFIyupNvew5Np3cEUrr2hwNke/view" 

    },
    {
        id: 10,
        date: "Jan 2024",
        title: "DaddyIssues",
        description: "A weekend hackathon where we put together a game where we have to defeat our dad while simulataneosly avoiding our mom who is trying to track us down and is controlled by the A* algorithm",
        image: "/images/dad.png",
        type: "hackathon",
        link: "https://github.com/royayush1/DaddyIssues"
    },
    {
        id: 11,
        date: "June 2023 - Jan 2024",
        title: "Dishzero",
        description: "Developed a React web app for reducing food waste, by allowing students to check out reusable plates and cutlery using the app by scanning the QR Codes on them allowing us to keep track of the dishes, gather info on the amount of waste being diverted and to remind students to return the dishes within 48 hrs. After using the dish, the student places back the dishware in a Dishzero waste bin where a volunteer collects it, cleans it up, checks the dish back in using the app upon returning it to the vendor. Also includes an admin page that helps summarise data, transactions, statistics on dishes used and manage permissions and privileges",
        image: "/images/dishzero.png",
        type: "project",
        link: "https://app.dishzero.ca"
    },
    {
        
        id: 12,
        date: "Aug 2023 - Dec 2023",
        title: "Dorsal AI",
        description: "Co-Developed primary website for authorized users to access key financial documents for investment research",
        image: "/images/dorsal.png",
        type: "internship",
        link: "https://dorsalai.com"
        
    },
    {
        id: 13,
        date: "Oct 2022 - May 2023",
        title: "ICard",
        description: "A mobile app that helps vendors verify eligible ICard holder for the UofA International Students' Association",
        image: "/images/isa1.png",
        type: "project",
        link: "https://github.com/UofA-Blueprint/ICard"

    },
    {
        id: 14,
        date: "Sept 2022 - Dec 2022",
        title: "CSL-esignature",
        description: "The goal of the CSL eSignature project is to help Community Service Learning (CSL) coordinators refine the process that students must use when completing their CSL placement. This product is intended to help students and community partners with CSL completion paperwork by creating webforms and automated emails, creating a simpler CSL completion process for the end users. The webforms will be used by both CSL students and community partners, while the automated emails will be sent to students, community partners, and CSL coordinators. Copies of all forms save to cloud storage, allowing coordinators to review past submissions; additionally, a spreadsheet will be generated that will allow coordinators to view the status of all ongoing submissions.",
        image: "/images/csl1.png",
        type: "project",
        link: "https://github.com/UAlberta-CMPUT401/csl-esignature?tab=readme-ov-file"

    },
    {
        id: 15,
        date: "Jan 2022 - April 2022",
        title: "RunQR",
        description: "Developed a game with a similar structure to Pokémon Go with a team of 5 software developers - a responsive app using Java and Android Studio that allow players to scan QR codes around the city in order to score points and compete on a leaderboard",
        image: "/images/qr1.png",
        type: "project",
        link: "https://github.com/CMPUT301W22T24/RunQR"

    },
    {
        id: 16,
        date: "June 2021 - July 2021",
        title: "Shoppers",
        description: "Developed one of my first React Native (JavaScript) Apps using the Expo development platform that allows users to register and login (user authentication) using separate accounts with the help of the Firebase Authentication API. Users can shop, place orders specific to their account which are stored on the Firebase Realtime Database. They can even sell their own products upon which push notifications are sent out to other users",
        image: "",
        type: "project",
        link: "https://github.com/royayush1/Shopper"

    },
    {
        id: 17,
        date: "May 2021 - June 2021",
        title: "Memories",
        description: "My first ever React Native app - this is an app where we take pictures of memories we hold dear, mark it's location on a map when we are about to store the picture, have some notes attached to it and save it all on an SQLite database",
        image: "",
        type: "project",
        link: "https://github.com/royayush1/Memories"
    }

    

]
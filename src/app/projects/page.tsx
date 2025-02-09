"use client"

import Head from "next/head";
import Timeline from "../components/Timeline";

export default function ProjectsPage(){
    return(
        <>
        <Head>
            <title>
                Projects | My Portfolio
            </title>
            <meta 
            name="description"
            content="Explore my projects, internships, hackathons, and the journey of my career in Software Development, Data Science, and AI/ML."/>
        </Head>
        <main className="container mx-auto p-6">
            <Timeline/>
        </main>
        </>
    )
}
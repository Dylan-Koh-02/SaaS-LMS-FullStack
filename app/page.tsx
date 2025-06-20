import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
// import { Button } from '@/components/ui/button'
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="Learn Web Fundamentals"
          topic="HTML5/CSS3"
          subject="Computer Science / Information Technology"
          duration={60}
          color="#ffda6e"
        />
        <CompanionCard
          id="2"
          name="Deep Dive into Modern Web"
          topic="React 19"
          subject="Computer Science / Information Technology"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="3"
          name="Behind the Scene"
          topic="Node.js"
          subject="Computer Science / Information Technology"
          duration={30}
          color="#DBE7FF"
        />
      </section>
      <section className="home-section">
        <CompanionsList title='Recently Completed Sessions' companions={recentSessions} classNames='w-2/3 max-lg:w-full'/>
        <CTA />
      </section>
    </main>
  );
};

export default Page;

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Features() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full py-20 px-4 max-w-screen-xl mx-auto">
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 mx-auto max-w-screen-md"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Micro Finance",
        title: "Little things make big impacts",
        src: "/images/mf.png",
        content: <DummyContent />,
    },
    {
        category: "Micro Investments",
        title: "Get more from little",
        src: "/images/mL.png",
        content: <DummyContent />,
    },
    {
        category: "Transparent marketplace",
        title: "Get the best for less",
        src: "/images/market.jpg",
        content: <DummyContent />,
    },
    {
        category: "Sustainable Farming",
        title: "Providing People and the Environment",
        src: "/images/susf.jpg",
        content: <DummyContent />,
    },
    {
        category: "Tracability",
        title: "Everything is see through",
        src: "/images/trace.jpg",
        content: <DummyContent />,
    },
    {
        category: "Trust",
        title: "Because you can see everything",
        src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        content: <DummyContent />,
    },
];

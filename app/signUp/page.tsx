import React from "react";
import { SignUpLogIn } from "../../components/SignUpLogIn";

export default function page() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 dark:bg-gray-900">
            {/* Text Section */}
            <div className="md:w-1/2 w-full p-4">
                <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    Welcome to Agro-Fin
                </h1>
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                    Our platform leverages innovative financial technology to support and
                    empower farmers and agro-based businesses. By integrating blockchain
                    technology and other advanced solutions, we aim to provide seamless
                    access to financial services, ensuring transparency, efficiency, and
                    growth in the agricultural sector.
                </p>
                <p className="text-lg text-neutral-700 dark:text-neutral-300">
                    Join us on this journey to revolutionize the way the agricultural
                    industry handles finances, and lets work together to create a
                    sustainable and prosperous future.
                </p>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 w-full p-4">
                <SignUpLogIn />
            </div>
        </div>
    );
}

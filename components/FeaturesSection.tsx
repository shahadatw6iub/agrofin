// components/FeaturesSection.tsx
import Link from "next/link";
import { Features } from "./Features";

const FeaturesSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#f0f4ec] px-3 py-1 text-sm text-[#4CAF50]">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2d3748]">
                            Transforming Agricultural Finance
                        </h2>
                        <p className="max-w-screen-lg text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Agro-fin offers a comprehensive suite of financial services tailored to the unique needs of farmers and agricultural businesses, empowering them to grow and thrive.
                        </p>
                    </div>
                </div>
                <div className="max-w-screen-xl mx-auto py-12">
                    <Features />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            {['Tailored Financing', 'Digital Payments', 'Crop Insurance'].map((feature, index) => (
                                <li key={index}>
                                    <div className="grid gap-1">
                                        <h3 className="text-xl font-bold text-[#2d3748]">{feature}</h3>
                                        <p className="text-muted-foreground">
                                            {feature === 'Tailored Financing' && 'Access customized loan products and financing options to meet your unique agricultural needs.'}
                                            {feature === 'Digital Payments' && 'Streamline your operations with our secure and convenient digital payment solutions.'}
                                            {feature === 'Crop Insurance' && 'Protect your investments with our comprehensive crop insurance products.'}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

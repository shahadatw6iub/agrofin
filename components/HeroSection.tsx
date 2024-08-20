// components/HeroSection.tsx
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#f0f4ec]">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#2d3748]">
                                Empowering Farmers, Transforming Agriculture
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Agro-fin is a leading agro-fintech company providing innovative financial solutions to help farmers and agricultural businesses thrive.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#45a049] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Sign Up
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <img
                        src="/placeholder.svg"
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

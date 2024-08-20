// components/JoinCommunitySection.tsx
const JoinCommunitySection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-[#f0f4ec] px-3 py-1 text-sm text-[#4CAF50]">
                            Join Us Today
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#2d3748]">
                            Be Part of the Agro-fin Revolution
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Sign up today to receive the latest updates and access exclusive benefits tailored for the agricultural community.
                        </p>
                    </div>
                    <form className="flex flex-col items-center gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full max-w-md rounded-md border border-input bg-background px-4 py-2 text-sm"
                        />
                        <button
                            type="submit"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#4CAF50] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#45a049] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Join Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunitySection;

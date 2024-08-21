import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdMenu as MenuIcon } from "react-icons/md";
import { FaLeaf as LeafIcon } from "react-icons/fa";
const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link href="#" className="flex items-center justify-center" prefetch={false}>
                <LeafIcon className="h-6 w-6 text-green-500" />
                <span className="font-bold">Agro-fin</span>
            </Link>
            <div className="ml-auto flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs bg-white font-bold">
                        <nav className="grid gap-4 py-6 ">
                            {['Features', 'Testimonials', 'About', 'Contact'].map((text) => (
                                <Link
                                    key={text}
                                    href="#"
                                    className="text-sm font-lg font-bold hover:underline underline-offset-4 text-muted-foreground"
                                    prefetch={false}
                                >
                                    {text}
                                </Link>
                            ))}

                        </nav>
                    </SheetContent>
                </Sheet>
                <nav className="hidden lg:flex gap-4 sm:gap-6">
                    {['Features', 'Testimonials', 'About', 'Contact'].map((text) => (
                        <Link
                            key={text}
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4 text-muted-foreground"
                            prefetch={false}
                        >
                            {text}
                        </Link>

                    ))}
                    <ConnectButton />

                </nav>
            </div>
        </header>
    );
};

export default Header;

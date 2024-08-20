// components/Footer.tsx
const Footer = () => {
    return (
        <footer className="w-full py-6 bg-[#4CAF50] text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} Agro-fin. All rights reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="text-sm hover:underline">Privacy Policy</a>
                        <a href="#" className="text-sm hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

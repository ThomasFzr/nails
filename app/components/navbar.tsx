import { Link } from "react-router";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`fixed top-0 left-0 w-full z-[100] text-2xl pt-1 text-black items-center transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className='flex flex-row justify-between w-full py-2 px-4'>
                <div className="w-[30%]">
                    <a href="https://www.instagram.com/lesgriffesduz/" target="_blank" rel="noopener noreferrer">
                        <img className="w-15 pl-4 hover:scale-110" src="/images/insta.png" alt="Instagram" />
                    </a>
                </div>
                <div>
                    <Link to="/">
                        <img className="w-30 hover:scale-110" src="/images/logo6.png" alt="Logo" />
                    </Link>
                </div>
                <div className="flex flex-row justify-around w-[30%]">
                    <Link to="/price" className="hover:scale-110">PRIX</Link>
                    <Link to="/dispo" className="hover:scale-110">DISPO</Link>
                    <Link to="/info" className="hover:scale-110">INFOS</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

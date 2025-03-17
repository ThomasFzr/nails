import { Link } from "react-router";

export const Navbar = () => {
    return (
        <div className='flex flex-row justify-between w-full z-[100] text-2xl pt-1 text-black items-center'>
            <div className="w-[30%]">
                <a href="https://www.instagram.com/lesgriffesduz/" target="_blank" rel="noopener noreferrer">
                    <img className="w-15 pl-4 hover:scale-110" src="/images/insta.png"></img>
                </a>
            </div>
            <div>
                <Link to="/">
                    <img className="w-30 hover:scale-110" src="../public/images/logo6.png"></img>
                </Link>
            </div>
            <div className="flex flex-row justify-around w-[30%]">
                <Link to="/price" className="hover:scale-110">PRIX</Link>
                <Link to="/dispo" className="hover:scale-110">DISPO</Link>
                <Link to="/info" className="hover:scale-110">INFOS</Link>
            </div>

        </div>
    );
};

export default Navbar;
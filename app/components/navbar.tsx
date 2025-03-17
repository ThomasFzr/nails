import { Link } from "react-router";

export const Navbar = () => {
    return (
        <div className='flex flex-row justify-between w-full z-[100] text-2xl pt-1 text-black items-center'>
            <div className="w-[30%]"></div>
            <div>
                <Link to="/">
                    <img className="w-30" src="../public/images/logo6.png"></img>
                </Link>
            </div>
            {/* <div>G du Z</div> */}
            <div className="flex flex-row justify-around w-[30%] ">
                <Link to="/price">PRIX</Link>
                <div>DISPO</div>
                <div>INFOS</div>
            </div>

        </div>
    );
};

export default Navbar;
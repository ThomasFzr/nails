export interface HamburgerProps {
    onClick: () => void;
    isOpen: boolean;
}

export function Hamburger({ onClick, isOpen }: HamburgerProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer"
        >
           <div
                className={`bg-[#F5960B] block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                }`}
            />
            <div
                className={`bg-[#F5960B] block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0'
                }`}
            />
            <div
                className={`bg-[#F5960B] block w-8 h-[0.35rem] rounded transition-all origin-[1px] ${
                    isOpen ? 'rotate-[-45deg]' : 'rotate-0'
                }`}
            />
        </button>
    );
}

import { Link } from "react-router-dom";

const NavLink = ({ to, label }) => {
  return (
    <Link
      className="relative text-14 px-5 py-1 rounded-[37px] flex items-center gap-1 
                 overflow-hidden bg-gray-300 text-gray-800 group transition-all duration-300"
      to={to}
    >
      <span className="absolute inset-0 bg-[#6366F1] 
                       transition-all duration-300 transform scale-x-0 origin-left 
                       group-hover:scale-x-100 rounded-[37px]"></span>
      <span className="relative z-10 group-hover:text-white transition-all duration-300">{label}</span>
    </Link>
  );
};

export default NavLink;

export const arrowLeft = `<svg width="10" height="18" fill="none"><path stroke="#1F1816" d="M9 17 1 9l8-8"/></svg>`;
export const arrowRight = `<svg width="10" height="18" fill="none"><path stroke="#1F1816" d="m1 17 8-8-8-8"/></svg>`;
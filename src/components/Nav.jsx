import { navLists } from "../constants/index";
const Nav = () => {
  return (
    <header className="nav-header w-full sm:px-10  flex justify-between items-center">
      <nav className=" flex  w-full screen-max-width">
        <img
          src="/assets/images/apple.svg"
          alt="Apple Logo"
          width={14}
          height={18}
        />
        <div className="flex flex-1 items-center justify-center gap-8 max-sm:hidden">
          {navLists.map((list, index) => (
            <div
              key={index}
              className="text-sm cursor-pointer text-[var(--color-gray)] hover:text-white transition-all"
            >
              <a href={list.href} className="block px-5 py-2">
                {list.name}
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1" >
          <img
            src="/assets/images/search.svg"
            alt="Search Icon"
            width={18}
            height={18}
          />
          <img
            src="/assets/images/bag.svg"
            alt="bag Icon"
            width={18}
            height={18}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

import Link from "../Links/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const OurNav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];
  return (
    <nav>
      <div className="md:hidden bg-green-400 p-5" onClick={() => setOpen(!open)}>
        {open ?<IoMdClose className="text-2xl"/> : <HiMenuAlt1 className="text-2xl " /> }
      </div>
      <ul className={`md:flex duration-1000 absolute md:static ${open?'top-12':'-top-52'} bg-green-400 pl-4 ml-5 mt-2`}> 
      {/* in ul className you can use this one also ${open?'':'hidden'} tar mane normally dekhabe click korle hidden hoye jabe..*/}
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default OurNav;

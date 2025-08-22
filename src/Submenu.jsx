import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "./Context";

// import Data from './Data'
export default function Submenu() {
  const {
    isSubmenu,
    page: { page, links },
    location,
    closeSubmenu,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    // if(!e.target.classList.contains('link-btn'))
    closeSubmenu();
  };

  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    console.log("submenu: ", submenu);

    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [page, links, location]);

  return (
    <aside
      onMouseLeave={handleSubmit}
      className={`${isSubmenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section className="w-max p-4 transform duration-300 rounded-md">
        <h4 className="font-medium text-[22px]">{page}</h4>

        <div className="submenu-center mt-5 items-center flex justify-center">
          {links.map((ele) => {
            const { url, icon, label } = ele;

            return (
              <a href={url}>
                <p className="text-[rgb(97,125,152)]">{icon}</p>
                <p className="ml-4">{label}</p>
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}

import React, { useContext } from "react";
import { AppContext } from "./Context";
import { FaTimes } from "react-icons/fa";

import sublinks from "./Data";

export default function Sidebar() {
  const { isSidebaropen, closeSidebar } = useContext(AppContext);

  return (
    <>
      <div className={`${isSidebaropen ? "sidebar show" : "sidebar"}`}>
        <div className="w-[90vw] h-[90vh] m-auto mt-10 relative   bg-white">
          <button
            className="absolute top-4 right-4 text-[30px] text-[grey] "
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>

          <div className="mt-10 z-10">
            {sublinks.map((item, index) => {
              const { page, links } = item;

              return (
                <div key={index} className="p-3">
                  <h4 className="font-medium">{page}</h4>
                  <div className="flex flex-wrap p-3">
                    {links.map((link, index) => {
                      const { url, icon, label } = link;

                      return (
                        <a
                          className="text-[rgb(97,125,152)] flex items-center w-[50%] flex-wrap"
                          key={index}
                          href={url}
                        >
                          <p className="text-[rgb(97,125,152)]">{icon}</p>
                          <p className="ml-3">{label}</p>
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

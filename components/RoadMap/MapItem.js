import React from "react";

const MapItem = (props) => {

  const { children } = props;

  const visit = (site) => {
    window.open(site, '_blank');
  }

  return (
    <div className="relative w-full flex flex-row items-center md:ml-0 justify-between">
      <img
        src="/image/git.png"
        className="w-8 md:w-10 absolute left-[5px] md:left-[3px] top-0 rounded-full shadow-lg shadow-orange-100"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
      <div
        className={`md:basis-[100%]  ml-6 md:ml-0 py-3`}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h6 className="text-lg md:text-xl ml-14">{children.history}</h6>
        <div className="hover:bg-slate-50 text-left w-full max-w-[90%] md:max-w-[90%] mx-auto rounded-md p-4 md:p-6">
          <div className=" font-bold text-slate-900 text-lg md:text-xl lg:text-2xl pb-4">
            <a className="hover:underline hover:decoration-sky-800 hover:cursor-pointer" onClick={() => visit(children.site)}>{children.title}</a>
          </div>
          <div className="text-lg md:text-xl">
            {children.role}
          </div>
          <div className="mt-4 text-base font-irish-grover p-2 md:p-4">
            <ul className="list-outside list-disc">
              {
                children.experience && children.experience.length > 0 &&
                children.experience.map((item, key) => (
                  <li key={key}><p className="text-lg md:text-xl text-black/60">{item}</p></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MapItem;

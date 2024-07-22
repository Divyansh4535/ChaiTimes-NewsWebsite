import React from "react";

const NewsItem =(props)=>{

    let { title, description, nImg, nUrl, nAlt, author, date, source } = props;
    return (
      <>
        <div className="card  relative  md:h-[40vh]  md:w-72 h-[60vh] w-[50vw] lg:h-[70vh] lg:w-80  shadow-2xl border-2 border-black rounded-lg image-full flex flex-col justify-between ">
          <span className="absolute top-[-1.5%] right-0 px-2 text-[1.5vw] md:text-[1vw]   rounded-full bg-red-800 z-10 text-white"  > {source} </span>
          <figure className="h-[55%] w-full">
            <img
              className=" sm:object-cover  h-full w-full rounded-t-lg md:object-center md:object-fill  "
              src={nImg}
              alt={nAlt}
            />
          </figure>
          <div className="rounded-b-xl h-[50%] bg-zinc-200 p-3 pb-5
           flex flex-col justify-between overflow-hidden  ">
           
            <div className="  ">
              <h2 className="card-title lg:font-thin  md:tracking-tighter md:leading-none   font-semibold md:text-[1.3vw]  text-[2vw] tracking-normal leading-1 md:mb-1  mb-0 underline">{title} </h2>
              <p className="font-normal md:mt-2 mt-0 lg:font-thin lg:text-sm lg:tracking-tighter lg:leading-none md:text-[1.1vw]  text-[1.5vw] text-gray-500  tracking-wide leading-1  ">{description}</p>
              <p> <small className="text-muted md:text-[.9vw] text-[1.3vw]  md:tracking-tight md:leading-1 leading-5 tracking-wide"> by {author ? author : "unknown"} on {new Date(date).toGMTString()} .</small>  </p> 
            </div>

            <div className="card-actions flex justify-end">
              <a href={nUrl} target="_blank" className="btn bg-gray-800 px-2  py-1 md:w-[10vw] text-center  md:py-2  ml-[60%] text-white font-medium lg:text-xs md:text-[1vw] text-[1.5vw] rounded-full hover:font-bold  hover:bg-blue-700 ">Go Someone</a>
            </div>
          </div>
        </div >
      </>
    );
  }


export default NewsItem;

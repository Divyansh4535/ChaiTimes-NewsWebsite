import React from "react";

const NewsItem =(props)=>{

    let { title, description, nImg, nUrl, nAlt, author, date, source } = props;
    return (
      <>
        <div className="card relative   md:h-[40vh]  md:w-72 h-[50vh] lg:h-[70vh] lg:w-80 w-96 bg-base-100 shadow-xl image-full flex flex-col justify-between ">
          <span className="absolute top-[-1.5%] right-0 px-2 text-xs rounded-full bg-red-800 z-1 text-white"  > {source} </span>
          <figure className="h-[55%] w-full">
            <img
              className="object-fill h-full w-full rounded-t-xl object-center "
              src={nImg}
              alt={nAlt}
            />
          </figure>
          <div className="rounded-b-xl h-[50%] bg-zinc-100 p-3 pb-5
           flex flex-col justify-between ">
            <div>
              <h2 className="card-title lg:font-thin lg:text-sm lg:tracking-tighter lg:leading-none   font-semibold text-base tracking-normal leading-5 mb-1 underline">{title} </h2>
              <p className="font-normal mt-2 lg:font-thin lg:text-sm lg:tracking-tighter lg:leading-none  text-xs text-gray-500  tracking-tight leading-1 ">{description}</p>
              <p> <small className="text-muted  tracking-tight leading-1"> by {author ? author : "unknown"} on {new Date(date).toGMTString()} .</small>  </p>
            </div>
            <div className="card-actions flex justify-end">
              <a href={nUrl} target="_blank" className="btn bg-gray-800 px-3  py-2 ml-[60%] text-white font-medium lg:text-xs  text-sm rounded-full hover:font-bold  hover:bg-blue-700 ">Go Someone</a>
            </div>
          </div>
        </div >
      </>
    );
  }


export default NewsItem;

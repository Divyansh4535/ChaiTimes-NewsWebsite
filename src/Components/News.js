import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import imgCard from "../Img/chaiTimes512.png"

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(6)
    const [totalResults, setTotalResults] = useState(0)
    console.log(props)

    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let fData = await fetch(url)
        props.setProgress(30)
        let NewsData = await fData.json()
        console.log('NewsData:', NewsData)
        props.setProgress(60)
        setArticles(NewsData.articles);
        setLoading(false);
        setTotalResults(NewsData.totalResults)
        props.setProgress(100)

    }

    useEffect(() => {
        document.title = ` ${props.category} - ChaiTimes`
        updateNews();
    }, [])

    const handlePageBtn = async (e) => {
        console.log('Next out')
        if(e >= 1 && e <= Math.ceil(articles.length ) ){
            setPage(e)
            updateNews()
        console.log('Next in')

        }
    }
    
    return (
        <>
            <div className="h-full ">
                    {loading ?<Loader /> : 
                <main className='  gap-2 md:gap-10  flex-cols flex flex-wrap justify-center items-center  h-full ' >
                    <h1 className=' text-center font-black text-gray-900 text-3xl font-Freeman mt-[10vh] lg:text-5xl lg:leading-9  tracking-wide lg:tracking-wide capitalize  '>
                        ChaiTimes - Top {props.category}  Headlines   </h1>
                    <div className='flex flex-wrap  justify-center items-center gap-10 md:gap-10 mt-2'>
                        {!loading && articles.map((item, index) => {
                            return (
                                <div key={item.url} >
                                    <NewsItem
                                        key={index}
                                        nImg={item.urlToImage ? item.urlToImage : imgCard }
                                        title={item.title ? item.title.slice(0, 80) : "no title"}
                                        description={item.description ? item.description.slice(0, 100) : "no description"}
                                        nAlt={item.img ? item.img : "news"}
                                        author={item.author}
                                        date={item.publishedAt}
                                        source={item.source.name}
                                        nUrl={item.url} />
                                </div>
                            )
                        })}

                    </div>
                    {loading ||
                        <div className="pagination  flex m-2 justify-between items-center w-full">
                            <button  className="border border-gray-800 text-gray-800  rounded-md font-bold py-2 px-2 md:px-4 mr-1 flex items-center hover:bg-gray-800 hover:text-white" onClick={()=> handlePageBtn(page-1)}
                            >
                                <svg className="h-5 w-5 mr-2 fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512', xmlSpace: "preserve" }} >
                                    <path id="XMLID_10_" d="M438,372H36.355l72.822-72.822c9.763-9.763,9.763-25.592,0-35.355c-9.763-9.764-25.593-9.762-35.355,0 l-115.5,115.5C-46.366,384.01-49,390.369-49,397s2.634,12.989,7.322,17.678l115.5,115.5c9.763,9.762,25.593,9.763,35.355,0 c9.763-9.763,9.763-25.592,0-35.355L36.355,422H438c13.808,0,25-11.193,25-25S451.808,372,438,372z"></path>
                                </svg>
                                Previous page
                            </button>
                            <button className="border border-gray-800 bg-gray-800 text-white  rounded-md font-bold py-2 px-4 mr-1 flex items-center " onClick={()=>handlePageBtn(page+1)} >
                                Next page
                                <svg className="h-5 w-5 ml-2 fill-current" clasversion="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                    viewBox="-49 141 512 512" style={{ enableBackground: 'new -49 141 512 512', xmlSpace: "preserve" }} >
                                    <path id="XMLID_11_" d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0
                                l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0
                                c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"/>
                                </svg>
                            </button>
                        </div>}
                </main>}
            </div>
        </>
    )
}

export default News
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'

}
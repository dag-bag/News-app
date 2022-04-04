import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    // updateNews(this.state.page + 1);

    setLoading(true);
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${Page}&pageSize=${props.pageSize}`
    );

    const respdata = await resp.json();
    console.log(respdata);

    setLoading(false);
    setTotalResult(respdata.totalResults);

    setArticles(Articles.concat(respdata.articles));

    setLoading(false);
    setPage(Page + 1);
  };
  const [Articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Page, setPage] = useState(1);
  const [TotalResult, setTotalResult] = useState(0);

  // function capitalize(str) {
  //   return str
  //     .split(" ")
  //     .map(
  //       (word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
  //     )
  //     .join(" ");
  // }
  // console.log(articles);
  // this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
  // document.title = `${capitalize(props.category)} - NewsMonkey`;

  const updateNews = async () => {
    props.progress(0);
    setLoading(true);
    const resp = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${Page}&pageSize=${props.pageSize}`
    );

    const respdata = await resp.json();
    console.log(respdata);

    setArticles(respdata.articles);
    setLoading(false);
    setTotalResult(respdata.totalResults);
    props.progress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // fetchMoreData();
  // const prevPage = async () => {
  //   // this.setState({
  //   //   loading: true,
  //   // });
  //   // const resp = await fetch(
  //   //   `https://newsapi.org/v2/top-headlines?country=${
  //   //     props.country
  //   //   }&category=${props.category}&apiKey=${props.apiKey}&page=${
  //   //     this.state.page - 1
  //   //   }&pageSize=${props.pageSize}`
  //   // );
  //   // const respdata = await resp.json();
  //   // console.log(respdata);
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: respdata.articles,
  //   //   loading: false,
  //   // });
  //   updateNews(this.state.page - 1);
  // };
  // const nextPage = async () => {
  //   // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   // } else {
  //   //   this.setState({
  //   //     loading: true,
  //   //   });
  //   //   const resp = await fetch(
  //   //     `https://newsapi.org/v2/top-headlines?country=${
  //   //       props.country
  //   //     }&category=${props.category}&apiKey=${props.apiKey}&page=${
  //   //       this.state.page + 1
  //   //     }&pageSize=${props.pageSize}`
  //   //   );

  //   //   const respdata = await resp.json();
  //   //   console.log(respdata);

  //   //   this.setState({
  //   //     page: this.state.page + 1,
  //   //     articles: respdata.articles,
  //   //     totalResults: respdata.articles.totalResults,
  //   //     loading: false,
  //   //   });
  //   // }
  //   updateNews(this.state.page + 1);
  // };

  return (
    <div className="container my-3">
      <h2
        className="text-center my-5"
        style={{
          marginTop: "90px",
        }}
      >
        NewsMonkey - Top Headlines from {props.category}
      </h2>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={Articles.length}
        next={fetchMoreData}
        hasMore={Articles.length !== TotalResult}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {Articles.map((element) => {
              const {
                url,
                title,
                description,
                urlToImage,
                publishedAt,
                author,
                source,
              } = element;
              return (
                <div className="col-md-4" key={url}>
                  <NewsItem
                    publishedAt={new Date(publishedAt).toGMTString()}
                    title={title}
                    description={
                      description === null
                        ? "description is not available right now we will in future Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eligendi temporibus delectus voluptatum iure sequi omnis facilis saepe sit quod mollitia optio reiciendis eos, quisquam, quae suscipit consequatur reprehenderit a?"
                        : description
                    }
                    imgUrl={
                      urlToImage === null
                        ? "https://www.espncricinfo.com/static/images/espncricinfo-og.png"
                        : urlToImage
                    }
                    newsUrl={url}
                    author={author === null ? "Unknown" : author}
                    source={source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={prevPage}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-primary"
            onClick={nextPage}
          >
            Next
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 5,
  apiKey: "c582e5a434194d319b49070a08665460",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;

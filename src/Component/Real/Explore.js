import React, { Component } from 'react';
import { connect } from "react-redux";
import BaseHeader from './BaseHeader';
import { fetchImages } from "../Redux/Action";
import Skeleton from 'react-loading-skeleton';

class Explore extends Component {

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const news = this.props.news;
        const countNews = this.props.countNews;
        const { index0, index1, index2, index3 } = this.props.header;
        return (
            <React.Fragment >
                <BaseHeader
                    mainTitle={index0}
                    subTitle={index1}
                    title1={index2}
                    title2={index3}
                />
                <div className="row explore">
                    {
                        news ?
                        news.map((result, index) => {
                            return (
                                <div key={index}  className="col-md-3">
                                    <img style={{height:150, width:300, padding:10, borderRadius:5}} className="img-fluid" src={result.urlToImage} />
                                </div>
                            );
                        })
                        : 
                        <div className="row">
                            {
                                countNews.map((result, index) => {
                                    return (
                                        <div key={index} className="col-md-3">
                                            <Skeleton width={300} height={150} />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    }
                </div>
            </React.Fragment >
        );
    }
}

const mapStateToProps = (prevState) => {
    return {
        header: prevState.BaseHeader,
        news: prevState.news,
        countNews: prevState.countNews
    }
}

const mapDispatchToProps = { fetchImages }
export default connect(mapStateToProps, mapDispatchToProps)(Explore);

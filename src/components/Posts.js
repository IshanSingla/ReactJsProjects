import React, { Component } from "react";
import Data from "./Data"
import {
    useParams
  } from "react-router-dom";


export default function Posts(){
    let art=[]
    let is=Data()
    let data
    const { id } = useParams();
    is.posts.forEach((datass) => {
      if (datass.postlisk==id){
        data=datass
      };
    })

    // Post Content 
    data.content.forEach((datas) => {
      if (datas.type == "Text") {
        art.push(<article className="article-post"><p>{datas.text}</p></article>);
      }
      else if (datas.type == "Image") {
        art.push(<div className="mb-5"><img src={datas.imageUrl} width="80%" /><h5 style={{alignment: "center"}}>{datas.imageTitle}</h5></div>);
      }
      else if (datas.type == "Code") {
        art.push(<><h5>{datas.CodeTitle}</h5><pre id="quickstart" className="language-markup mb-5" display="block">{datas.Codetext}</pre></>);
      }
    }
    );
    return (
      <>
        {/* Post Title */}
        <div className="container">
          <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
            <div className="h-100 tofront">
              <div className="row justify-content-between">
                <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                  <h1 className="display-5 secondfont mb-3 font-weight-bold">
                    {data.title}
                  </h1>
                  <p className="mb-3">{data.describe}</p>
                  <div className="d-flex align-items-center">
                    <img
                        className="rounded-circle"
                        src="https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4"
                        width="70"
                      />
                    <small className="ml-2">
                        {data.auther}
                      <span className="text-muted d-block">
                        {data.posttime}
                      </span>
                    </small>
                  </div>
                </div>
                <div className="col-md-6 pr-0">
                  <img src={data.image} className="shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Post Content */}
          <div className="container pt-4 pb-4">
            <div className="row justify-content-center">
              <div className="col-lg-2 pr-4 mb-4 col-md-12">
                <div className="sticky-top text-center">
                  <div className="text-muted">Share this</div>

                  <div className="share d-inline-block">
                    <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
                      <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
                      <a className="a2a_button_facebook"></a>
                      <a className="a2a_button_twitter"></a>
                    </div>
                    <script async src="https://static.addtoany.com/menu/page.js" ></script>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">{art}<Colector key={"nfjnfdjndkkmn nimci "}/></div>
            </div>
          </div>
      </>
    );
  }

export class Colector extends Component {
    render() {
      return (
        <div className="container">
        <div className="border p-5 bg-lightblue">
          <div className="row justify-content-between">
            <div className="col-md-5 mb-2 mb-md-0">
              <h5 className="font-weight-bold secondfont">Become a member</h5>
              Get the latest news right in your inbox. We never spam!
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your e-mail address"
                  />
                </div>
                <div className="col-md-12 mt-2">
                  <button type="submit" className="btn btn-success btn-block">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
    <div className="container">
        <div className="jumbotron jumbotron-fluid mb-3 pl-0 pt-0 pb-0 bg-white position-relative">
            <div className="h-100 tofront">
                <div className="row justify-content-between">
                    <div className="col-md-6 pt-6 pb-6 pr-6 align-self-center">
                        <h1 className="display-5 secondfont mb-4 font-weight-bold">InducedOfficial - Professional Devloper / Coder </h1>
                        <p className="mb-3">
                             Here we're introducing you what you can do with Coading Knowledge.
                        </p>
                        <div className="d-flex align-items-center">
                            <a target="_blank" href="https://github.com/IshanSingla"><img className="rounded-circle" src="https://avatars.githubusercontent.com/u/79676239?s=400&u=50ed13d45e13500fd65b3b84b4f64276d6313ea8&v=4" width="70"/></a>
                            <small className="ml-2"><a target="_blank" href="https://github.com/IshanSingla">IshanSingla</a> <span className="text-muted d-block">A few hours ago &middot; 5 min. read</span>
                            </small>
                        </div>
                    </div>
                    <div className="col-md-6 pr-0">
                        <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg" className="shadow"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}


export class MainHeader extends Component {
    render() {
      return (
      <div className="container">
          <div className="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 bg-lightblue position-relative">
              <div className="pl-4 pr-0 h-100 tofront">
                  <div className="row justify-content-between">
                      <div className="col-md-6 pt-6 pb-6 align-self-center">
                          <h1 className="secondfont mb-3 font-weight-bold">InducedOfficial - Professional Devloper / Coder </h1>
                          <p className="mb-3">
                          Here we're introducing you what you can do with Coading Knowledge. Mostly works on Python. Projects Which made are basically Bots like: GitHub Bot, Telegram Bots, WebScraping, etc
                          </p>
                          <a href="/article/InducedOfficial" className="btn btn-dark">Read More</a>
                      </div>
                      <div className="col-md-6 d-none d-md-block pr-0"><img src="https://telegra.ph/file/dff924bcc1144977cb0b5.png" height={"500px"} className="shadow"/></div>
                  </div>
              </div>
          </div>
      </div>
      )
    }
  }

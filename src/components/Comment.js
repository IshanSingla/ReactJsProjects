import React from 'react'

export default function Comment() {
  return (
    <div className="comments-app" ng-app="commentsApp" ng-controller="CommentsController as cmntCtrl">
        <div className="comment-form">
          <form className="form" name="form" >
            <div className="form-row"><textarea className="input" placeholder="Add comment..." required></textarea></div>
            <div className="form-row"> <input type="submit" value="Add Comment"/></div>
          </form>
        </div>

        <div className="comments">
          <div className="comment">
            <div className="comment-avatar"><img src="http://gravatar.com/avatar/412c0b0ec99008245d902e6ed0b264ee?s=80"/> </div>
            <div className="comment-box">
              <div className="comment-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto temporibus iste nostrum dolorem natus recusandae incidunt voluptatum.</div>
              <div className="comment-footer">
                <div className="comment-info">
                  <span className="comment-author"> <a >Sexar</a> </span>
                  <span className="comment-date">Feb 2, 2013 11:32:04 PM</span>
                </div>
                <div className="comment-actions"><a >Reply</a></div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

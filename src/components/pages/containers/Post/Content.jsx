import React,{Component} from "react"

export default class Content extends Component {
  render() {
    return(
      <div className="post-content-container">
        <img src={require('../../../../img/post/Layer38.png')} alt="asd"/>
        <div className='image-bottom-text clearfix'>
          <span className='image-titile'><strong>John Biggs </strong>@johnbiggs / 11 hours ago</span>
          <a href="" className="post-content-comment-button"><i className="fas fa-comment-dots"></i>Comment</a>
        </div>
        <h2 className="post-content-titile">11 Tips to Help You Get New Clients Through Cold Calling</h2>
        <p className="post-content-text">
          Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. 
          Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in 
          West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend 
          importing banjos in West Palm Beach, FL. Spent several years working on sheep on Wall Street. 
          Had moderate success investing in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for 
          farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working 
          with banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.
        </p>
        <img src={require('../../../../img/post/Layer38.png')} alt="asda"/>
        <h2 className="post-content-titile">11 Tips to Help You Get New Clients Through Cold Calling</h2>
        <p className="post-content-text">
          Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. 
          Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West 
          Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing 
          banjos in West Palm Beach, FL. Spent s everal years working on sheep on Wall Street. Had moderate success investing 
          in Yugos on Wall Street. Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing 
          licorice in West Palm Beach, FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend 
          importing banjos in West Palm Beach, FL. 
          Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a 
          small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. 
          Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm 
          Beach, FL.

          Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. Managed a 
          small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. 
          Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm 
          Beach, FL. Spent several years working on sheep on Wall Street. Had moderate success investing in Yugos on Wall Street. 
          Managed a small team buying and selling pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, 
          FL. Developed several new methods for working with banjos in the aftermarket. Spent a weekend importing banjos in West Palm 
          Beach, FL. 
        </p>
        <div className="share-buttons">
          <a href="" className="share-button facebook-share-button"> </a>
          <a href="" className="share-button twitter-share-button"> </a>
          <a href="" className="share-button linkedin-share-button"> </a>
          <a href="" className="share-button mail-share-button"> </a>
          <a href="" className="share-button arrow-share-button"> </a>
        </div>
      </div>
    );
  }
}

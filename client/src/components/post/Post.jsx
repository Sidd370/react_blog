
import "./post.css";
 
export default function Post(){
    return(
        <div className="post">
           <img src="img2.jpg" className="postImg" alt=""></img> 
           <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span> 
                <span className="postCat">Life</span> 
            </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora delectus
                 nam. 
                 </span>
                 <hr/>
                 <span className="postDate">1 Hour ago</span>
           </div>
        </div>
    );
}
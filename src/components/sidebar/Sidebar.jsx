
import "./sidebar.css"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImage"
            src="img1.jpg" 
            alt="" /> 
            
            <p>
            Lorem ipsum dolor sit amet. Aut sequi quam aut facere delectus et adipisci incidunt non quod inventore ut doloribus saepe. Ea accusantium quod eos unde laborum hic possimus dolores cum voluptatem facilis eum sequi nihil.
            </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarlist">
                    <li className="sidebarListItem">Life </li>
                    <li className="sidebarListItem">Music </li>
                    <li className="sidebarListItem">Style </li>
                    <li className="sidebarListItem">Sports</li>
                    <li className="sidebarListItem">Cinema </li>
                    <li className="sidebarListItem">Tech </li>
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            </div>

            </div>
      
    </div>
  );
}

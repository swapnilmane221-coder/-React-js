import style from "./css/user.module.css"
function User(){
    return(
       <div>
       <h1 className={style.heading}>component module Css</h1>
       <div className={style.card}>
         <div className={style.imgStyle}>
           <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="tree"
             style={{
               height: "200px",
               width: "200px",
             }}
           />
         </div>
         <div className={style.content}>
           <h4>Swapnil Mane</h4>
           <p>Software Developer </p>
         </div>
       </div>
     </div>
    )
}
export default User;
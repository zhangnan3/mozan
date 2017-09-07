import React ,{Component} from "react"

 class Logo extends Component{

   render(){
    const {color,size}=this.props
    return(

       <svg fill={color} t="1504669662221" width={size} height={size} viewBox="0 0 1024 1024" version="1.1" class="icon"  >
         <path d="M128 448l768 0 0 128-768 0 0-128ZM128 192l768 0 0 128-768 0 0-128ZM128 708l768 0 0 128-768 0 0-128Z" p-id="1966"></path>
       </svg>

     )
   }
 }
 export default Logo

import React ,{Component} from "react"

 class Logo6 extends Component{

   render(){
    const {color,size}=this.props
    return(

      <svg class="icon" fill={color} width={size} height={size} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path  d="M583.992 529.97h108.041v72.048H583.992V529.97zM187.926 529.97H512v72.048H187.926V529.97zM872.068 133.906H151.93c-59.697 0-108.042 48.345-108.042 107.986v540.16c0 59.64 48.345 108.042 108.042 108.042h720.138c59.697 0 108.043-48.401 108.043-108.042v-540.16c0-59.641-48.346-107.986-108.043-107.986z m72.048 648.146c0 39.761-32.23 71.991-72.048 71.991H151.93c-39.816 0-72.047-32.23-72.047-71.991V385.93h864.232v396.12z m0-468.11H79.884v-72.05c0-39.761 32.23-71.991 72.047-71.991H872.07c39.817 0 72.048 32.23 72.048 71.991v72.05zM187.926 674.009h288.078v72.048H187.926v-72.048z" /></svg>



     )
   }
 }
 export default Logo6
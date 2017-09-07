import React ,{Component} from "react"

 class Logo1 extends Component{

   render(){
    const {color,size}=this.props
    return(

       <svg class="icon" fill={color} t="1504669662221" width={size} height={size} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path  d="M419.788344 798.992363c-47.78226 0-94.146217-9.362228-137.804553-27.828812-42.158169-17.832134-80.016405-43.355437-112.521726-75.862805s-58.028625-70.367651-75.859735-112.528889c-18.46556-43.661406-27.828812-90.030479-27.828812-137.819902 0-47.78226 9.363252-94.14724 27.828812-137.8066 17.831111-42.159192 43.354414-80.019475 75.859735-112.526842s70.363558-58.032718 112.520703-75.865875c43.658336-18.467607 90.022293-27.831882 137.804552-27.831882s94.148263 9.363252 137.807623 27.831882c42.159192 17.833157 80.019475 43.357484 112.526842 75.865875 32.508391 32.507368 58.032718 70.366627 75.865875 112.525819 18.467607 43.660382 27.830859 90.025363 27.830859 137.807623 0 47.788399-9.363252 94.158497-27.830859 137.819902-17.833157 42.161239-43.357484 80.021521-75.865875 112.529912-32.507368 32.506345-70.366627 58.029648-112.526842 75.861782-43.659359 18.466584-90.024339 27.828812-137.806599 27.828812z m0-667.138336c-172.633802 0-313.081555 140.454916-313.081555 313.098951 0 172.648129 140.447752 313.108161 313.081555 313.108161 172.643012 0 313.098951-140.460032 313.09895-313.108161-0.001023-172.644035-140.456962-313.098951-313.09895-313.098951z"  /><path  d="M700.979584 649.015583l256.589936 256.589936-28.943193 28.943193-256.589936-256.589936z"  /></svg>

     )
   }
 }
 export default Logo1

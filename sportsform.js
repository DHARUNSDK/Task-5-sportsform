import React from 'react';
import './sportsform.css'
class Dkform extends React.Component{
  constructor(){
 super();   
 this.state={phno:null,fees:null,ref:null,errmsg:""}
 
}

uservalue=(event)=>
{
   let n=event.target.name;
   let v=event.target.value;
   let err="";

   if(n=="phno")
   {
    if(v!="" && !Number(v))
    {
        event.preventDefault();
    alert("Invalid! Must be a number ");
    }
   }

   if(n=="fees")
   {
    if(v!="" && !Number(v))
    {
        event.preventDefault();
        alert("Invalid! Must be a number ");    }
   }

   if(n=="ref")
   {
    if(v!="" && !Number(v))
    {
        event.preventDefault();
        alert("Invalid! Must be a number ");    }
        
        var r = document.getElementById("ref").value;
        var f = document.getElementById("fees").value;
        var t = r*f;
        document.getElementById("tot").value=t; 
   }

this.setState({errmsg:err});
this.setState({[n]:v});

}

formsubmit=(event)=>
{
    event.preventDefault();
    alert("REGISTRATION SUCCESFUL");
}

render()
{
    return(
        <body>
     <form action='post'>
        <h1>SPORTS REGISTRATION FORM</h1>
    <div>
       <p>SPORTS: <select className='op'>
            <option >FootBall</option>
            <option >Cricket</option>
            <option > VolleyBall</option>
         </select>
         </p>
         
       <p>PH NO: <input type='text' name='phno' maxLength={10} onChange={this.uservalue} className='ip'></input></p> 

       <p>ADDRESS: <input type='text' onChange={this.uservalue} className='ip'></input></p>

       <p>FEES: <input type='text' name='fees' onChange={this.uservalue} className='ip'></input></p>

       <p>REFERENCES: <input type='text' maxLength={2} name='ref'onChange={this.uservalue} className='ip'></input></p>

       <p>TOTAL: <input type='text' name='tot' onChange={this.uservalue} className='ip'></input></p>
       {/* {this.state.errmsg} */}

        {/* <h1>Hello its me {this.state.username}</h1> */}
        {/* Enter your name:<input type="text" name='username' onChange={this.uservalue}/> */}
        {/* <h1>Age is {this.state.age}</h1> */}
        {/* Enter your age:<input type="text" name='age' onChange={this.uservalue}/> */}
       
        <br/>
        <button onClick={this.formsubmit}>submit</button>
        </div>
     </form>
     </body>
    );
}
}
export default Dkform;



 
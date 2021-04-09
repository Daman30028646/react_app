import React, { Component } from "react";
import Game from "./SCP.json";

const games = Game.map(
    (Game) => 
    {
        return(
    <div>        
<div class="block2">
<div class="shadow p-4  block ">
   
   
<div key={Game.link}>

    <div class="back">
<h1 class="text-dark px-3 py-3 shadow-lg rounded bg1" style={{display:"inline-flex",  justifyContent:"center", }}><strong>{Game.item}</strong></h1>
</div>

<br></br>

<h2 class="text-dark ">{Game.object}</h2>
<br></br>
<div class="zoom">
<img class="mx-5 my-3 d-block shadow  " style={{float:"right", position:"inline"}} src={Game.image} alt={Game.game} />
</div>
<h4 class="text-dark">{Game.special}</h4>

<p>{Game.p1}</p>
<p>{Game.p2}</p>
<p>{Game.p3}</p>
<p>{Game.p4}</p>
<p>{Game.p5}</p>

<h4>{Game.description}</h4>
<p>{Game.p6}</p>
<p>{Game.p7}</p>
<p>{Game.p8}</p>
<p><b>{Game.p9}</b></p>
<p>{Game.p10}</p>
<p><b>{Game.p11}</b></p>
<p>{Game.p12}</p>
<p><b>{Game.p13}</b></p>
<p>{Game.p14}</p>
<p><b>{Game.p15}</b></p>
<p>{Game.p16}</p>
<p><b>{Game.p17}</b></p>
<p>{Game.p18}</p>
<h4>{Game.reference}</h4>

<p>{Game.d1}</p>
<p>{Game.d2}</p>
<p>{Game.d3}</p>
<p>{Game.d4}</p>
<p>{Game.d5}</p>
<p>{Game.d6}</p>
<p>{Game.d7}</p>
<p>{Game.d8}</p>
<p>{Game.d9}</p>
<p>{Game.d10}</p>
<p>{Game.d11}</p>
<p>{Game.d12}</p>
<p>{Game.d13}</p>
<p>{Game.d14}</p>
<p>{Game.d15}</p>
<p>{Game.d16}</p>
<p>{Game.d17}</p>

</div>
</div>





</div>
<br></br><br></br>
</div>
        );
    }
);

class Content extends Component {
    render() {
        return (
            
            <div className="album py-5 bg-light">
            <div className="container">
            

                {games}

            </div>
            </div>
          
            
        );
    }
}

export default Content;

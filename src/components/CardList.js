import React from "react";
import Card from "./Card";

const CardList = ({robo})=>{
  
    return(
        <div>
           {
            robo.map((_user, i) => {
                return (<Card key={i} id={robo[i].id} name={robo[i].name} email={robo[i].email}/>
                );
           })
        }
        </div>

    );
}
export default CardList;




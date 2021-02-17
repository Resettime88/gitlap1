import { getByTitle } from "@testing-library/react";
 
function Item(props){
  const {item1} = props;
    return(
        <div className="item">
        <img src={item1.thumbnaiUrl}/>
        <h4>{item1.title}</h4>
      </div>
    );
    
}
export  default Item;

import React, {useState,Fragment} from 'react';
import styled from 'styled-components';
import Jake from '../images/un.jpg'
import Card2 from './Card.jsx' 
import Addicts from '../images/react.png'
import Wolf from '../images/javascript.png'
import Drip from '../images/css.png'

const Container = styled.div`

padding:0px;

height:100%;

`

const Heading = styled.h2`
text-align:center;
color:white;
margin:0px;
`

const Flexed = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
margin: 0 auto;
width: 100%;
@media(max-width:786px){
    flex-direction:column;
    justify-content: center;
    margin:0 auto;
}
`

function Parallax() {
 
  const [State] = useState([
    {name:"R", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iste maiores hic! Aspernatur neque eos ullam quis cum placeat libero. Ad pariatur quibusdam doloribus ut, commodi non error inventore quidem?", img:Drip,  alt:"image"},
    {name:"S", message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum laborum quos nemo nihil obcaecati? Est itaque porro harum quasi impedit.", img:Addicts, alt:"image"},
    {name:"R", message:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloremque ex numquam eos provident dolore repellendus laborum, amet ut accusamus eius veniam eaque perspiciatis magnam rerum. Animi quisquam ullam soluta ipsa ducimus, vero fugiat eligendi neque magnam accusamus nesciunt itaque!", img:Wolf, alt:"image"},
    
    
  ]);
 
return(
   <div className="row">
        <Container  id="Skills">
       
            <Flexed >
            <Fragment  >
            {State.map((data, index) => (
            <Card2 key={index} name={data.name} message={data.message} img={data.img} Link={data.Link}  alt={data.alt}/>))}
           </Fragment>
           </Flexed>
          
        </Container>
        </div>
  );
}

export default Parallax;


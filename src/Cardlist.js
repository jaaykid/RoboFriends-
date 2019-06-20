import React from 'react';
import Card from './Card'


const CardList = ({robots}) => {
  const cardComponent = robots.map((robot, i) => {
    return <Card key={robots[i].name} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>
  })
  return (
    <div>
    {cardComponent}
    </div>
  );
}

export default CardList


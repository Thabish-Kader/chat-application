import React from 'react'

import '../styles/Cards.css'
import Card from 'react-bootstrap/Card';
import chat from '../assets/char.svg'
import community from '../assets/community.svg'
import facilities from '../assets/facilities.svg'
import team from '../assets/team.svg'

export const Card1 = () => {
    return (
      <Card  className='card-component'>
      <Card.Img variant="top" src={chat} className="card-image"/>
      <Card.Body>
        <Card.Title className='card-title'>Collaborate</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      <button className='card-btn'>Interested</button>
      </Card.Body>
    </Card>


    )
}


export const Card2 = () => {
  return (
    <Card  className='card-component'>
      <Card.Img variant="top" src={team} className="card-image"/>
      <Card.Body>
        <Card.Title className='card-title'>Team</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Interested</Button> */}
        <button className='card-btn'>Interested</button>

      </Card.Body>
    </Card>
  )
}

export const Card3 = () => {
  return (
    <Card  className='card-component'>
      <Card.Img variant="top" src={facilities} className="card-image"/>
      <Card.Body>
        <Card.Title className='card-title'>Facilities</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Interested</Button> */}
        <button className='card-btn'>Interested</button>

      </Card.Body>
    </Card>
  )
}

export const Card4 = () => {
  return (
    <Card  className='card-component'>
      <Card.Img variant="top" src={community} className="card-image"/>
      <Card.Body>
        <Card.Title className='card-title'>Community</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Interested</Button> */}
        <button className='card-btn'>Interested</button>

      </Card.Body>
    </Card>
  )
}


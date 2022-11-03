import React, { useState, useEffect } from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import axios from 'axios';

const baseURL = "https://api.imgflip.com/get_memes";

const MyNotes = () => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      const {data} = res.data
      setNotes(data.memes);
    })
  }, [])

  return (
    <MainScreen title={'welcome Raghu........'}>
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6}} size='lg'>
          create New Note
        </Button>
      </Link>

      { 
        notes.map((note, i) => { 
          return (
            <Accordion>
               <Accordion.Item eventKey="0">
               <Card style={{margin: 10}} key={i}>
          <div className="m-0">
            <Card.Header style={{display: "flex"}}>
              <span style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
              }}>
                  <Accordion.Header 
                  style={{
                    fontSize: "20px",
                    border: 0,
                    background: "inherit",
                    outline: 0
                  }}>
                    {note.name}</Accordion.Header>
              </span>
              <Button>Edit</Button>
              <Button varient="danger" className="mx-2">Delete</Button>
            </Card.Header>
          </div>
          <Accordion.Body>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
          </Accordion.Body>
          </Card>
               </Accordion.Item>
            </Accordion>
        )}) 
      }          
    </MainScreen>
  )
}

export default MyNotes
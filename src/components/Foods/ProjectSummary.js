import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ProjectSummary = ({ project, deleteProject }) => {

  const handleSubmit = () => {
    deleteProject(project.id)
  }
  return (
    <div className="col s4  text-center 
     d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img style={{ width: '18rem' }} variant="top" src={project.url} />
        <Card.Body class="d-flex justify-content-center">
          <Card.Title className="center"><h5>{project.title}</h5></Card.Title>
          <Card.Text className="center">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>    
          <button className="btn danger">text</button>

        </Card.Body>
      </Card>
      <button type="button" onClick={()=> handleSubmit()} className ="btn danger">Delet</button>
    </div>

  )
}

export default ProjectSummary

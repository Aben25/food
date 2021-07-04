import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects, deleteProject}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
            <ProjectSummary project={project}
            deleteProject={deleteProject}/>
         
        )
      })}  
    </div>
  )
}

export default ProjectList

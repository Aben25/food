import React, { Component } from 'react'
import ProjectList from '../Foods/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteProject } from '../../store/actions/projectActions'

class Dashboard extends Component {

  render() {  
    // console.log(this.props);
    const { projects, deleteProject} = this.props;
    
    return (
      
      <div className="dashboard container">
        <div className="row">
          <div className="col- s m6">
            <ProjectList projects={projects}
              deleteProject={deleteProject}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteProject: (id) =>dispatch(deleteProject(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)

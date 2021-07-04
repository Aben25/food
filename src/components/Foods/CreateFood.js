import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { storage } from "../../config/fbConfig"


class CreateFood extends Component {


  state = {
    title: '',
    content: '',
    url: ''
  }


  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }
  onContentChange = (e) => {
    this.setState({ content: e.target.value });
  }
  onFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(999999999999999, this.state);


    const ref = storage.ref(`/images/${this.state.file.name}`);
    const uploadTask = ref.put(this.state.file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      ref
        .getDownloadURL()
        .then((fireBaseUrl) => {
          this.setState({ file: null });
          this.setState({ url: fireBaseUrl });
          this.props.createProject(this.state);
        });
    });

    this.props.history.push('/');

  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.onTitleChange} />
            <label htmlFor="title">Project Title</label>
          </div>

          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.onContentChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <input type="file" id='file' onChange={this.onFileChange} />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (food) => dispatch(createProject(food))
  }
}

export default connect(null, mapDispatchToProps)(CreateFood)

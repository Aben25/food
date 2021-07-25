import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createFood } from '../../store/actions/foodActions'
import { storage } from "../../config/fbConfig"
import { Redirect } from 'react-router-dom'

class CreateFood extends Component {
  state = {
    title: '',
    content: '',
    price: 0,
    location: '',
    url: ''
  }

  onTitleChange = (e) => {
    this.setState({ title: e.target.value });
  }
  onContentChange = (e) => {
    this.setState({ content: e.target.value });
  }
  onPriceChange = (e) => {
    this.setState({ price: e.target.value });
  }
  onFileChange = (e) => {
    this.setState({ file: e.target.files[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.file) {
      const ref = storage.ref(`/images/${this.state.file.name}`);
      const uploadTask = ref.put(this.state.file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        ref
          .getDownloadURL()
          .then((fireBaseUrl) => {
            this.setState({ url: fireBaseUrl });
            this.props.createFood(this.state);
            this.props.history.push('/');

          });
      })
    } else {
      alert("Please add an image to compleat the uploading")

    }


  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New food</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.onTitleChange} />
            <label htmlFor="title">Food Name</label>
          </div>

          <div className="input-field">
            <textarea id="content" className="materialize-textarea" onChange={this.onContentChange}></textarea>
            <label htmlFor="content">Food Description</label>
          </div>


          <div class="input-field">
            <label htmlFor="price">Food Price </label>
            <input id="price" type="number" id='title' onChange={this.onPriceChange} />
            <div class="input-group-append">
            </div>

          </div>






          <div className="input-field">
            <input type="file" id='file' onChange={this.onFileChange} />
            <label htmlFor="title"></label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div >
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createFood: (food) => dispatch(createFood(food))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateFood)

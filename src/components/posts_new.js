import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class PostsNew extends Component {
  const {handleSubmit} = this.props
  render(){
    return (
      <form onSubmit={handleSubmit}>
        <h3>Create New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Category</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <text-area className='form-control' />
        </div>
        <button type='submit' className='btn btn-primary'>Submit Post</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'category', 'content']
})(PostsNew}

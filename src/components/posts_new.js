import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { createPosts } from '../actions/index'

class PostsNew extends Component {
  render(){
  const { fields: {title, categories, content}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPosts)}>
        <h3>Create New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
        </div>
        <div className='form-group'>
          <label>Content</label>
          <textarea className='form-control' {...content}/>
        </div>
        <button type='submit' className='btn btn-primary'>Submit Post</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
}, null, {createPosts})(PostsNew)

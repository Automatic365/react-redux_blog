import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { createPosts } from '../actions/index'

class PostsNew extends Component {
  render(){
  const { fields: {title, categories, content}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPosts)}>
        <h3>Create New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type='text' className='form-control' {...title}/>
          <div className='form-control-label'>
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type='text' className='form-control' {...categories}/>
          <div className='form-control-label'>
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className='form-control' {...content}/>
          <div className='form-control-label'>
            {content.touched ? content.error : ''}
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>Submit Post</button>
      </form>
    )
  }
}

function validate(values){
  const errors = {}
  if(!values.title){
    errors.title = "You Must Enter a Title"
  }
  if(!values.categories){
    errors.categories = "You Must Enter a Category"
  }
  if(!values.content){
    errors.content = "You Must Enter some Content"
  }
  return errors
}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'], validate
}, null, {createPosts})(PostsNew)

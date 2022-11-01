import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const SingleProduct = () => {
  const {id} = useParams();
  const [fetchPost, setFetchedPost] = useState();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(finalResult => setFetchedPost(finalResult))
  }, []) 

  return (
    fetchPost && <>
      <div>User's ID: {fetchPost.userId}</div>
      <br />
      <div>Post's ID: {fetchPost.id}</div>
      <br />
      <div>Post's title: {fetchPost.title}</div>
      <br />
      <div>Post's body: {fetchPost.body}</div>
    </>
  )
}

export default SingleProduct
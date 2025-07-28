import { useEffect, useState } from 'react';


const Posts = () => {

  const [ posts, setPosts ] = useState([]);
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setPosts(json))
    .then(setLoader(false))
  }

  return (
    <main className="posts">
      
      <div className="container content">
        {loader
          ? <div className="text-center">Loading...</div>
          : (
            <div className="row">
              {posts.map(post => {
                return(
                  <div className="col-sm-6" key={post.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">
                          {post.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        }
      </div>
    </main>
  )
}

export default Posts
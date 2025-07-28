import { useEffect, useState } from 'react';


const Posts = () => {

  const posts = [
    { id: 1, name: "Ravi Kumar", title: "Amazing Food!", rating: 5, body: "The dishes were delicious and fresh. Loved the ambiance too!" },
    { id: 2, name: "Sneha Reddy", title: "Great Service", rating: 4, body: "The staff were friendly and prompt. Will visit again soon." },
    { id: 3, name: "Amit Sharma", title: "Affordable & Tasty", rating: 5, body: "Best value for money. Highly recommend their puri and dosa!" },
    { id: 4, name: "Priya Verma", title: "Lovely Experience", rating: 5, body: "The environment was cozy and the food was top-notch!" },
    { id: 5, name: "Karthik Rao", title: "Decent Place", rating: 3, body: "Food was okay, service could be faster." },
    { id: 6, name: "Neha Jain", title: "Family Friendly", rating: 4, body: "Great place for family outings, kids enjoyed it too." },
    { id: 7, name: "Akhil", title: "Fresh and Healthy", rating: 4, body: "Great place for eating Food, my freinds had enjoyed it too." },
    
  ];

  return (
    <main className="posts">
      <div className="container content">
        <div className="row">
          {posts.map(post => (
            <div className="col-sm-6" key={post.id}>
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                  <p className="card-text"><strong>- {post.name}</strong></p>
                  <div className="text-warning">
                    {Array(post.rating).fill('★').join('')}
                    {Array(5 - post.rating).fill('☆').join('')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Posts;
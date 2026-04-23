import React from 'react';

export const Posts = ({ postsList }) => {
  return (
    <div id='posts'>

      {postsList.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {postsList.map(post => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>Loading...</h2>
      )}

    </div>
  );
};
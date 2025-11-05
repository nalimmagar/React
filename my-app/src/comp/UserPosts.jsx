// UserPosts Component (simulated API)
export default function UserPosts() {
  const posts = fetchUserPosts(); // This will suspend until data is ready
  
  return (
    <div style={{ 
      border: '2px solid #50c878', 
      padding: '20px', 
      margin: '20px 0',
      borderRadius: '8px',
      backgroundColor: '#f8fff9'
    }}>
      <h2 style={{ color: '#50c878', marginTop: 0 }}>📝 Recent Posts ({posts.length})</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {posts.map(post => (
          <div key={post.id} style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '6px',
            backgroundColor: 'white'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
            <p style={{ margin: '0 0 10px 0', lineHeight: '1.5' }}>{post.body}</p>
            <div style={{ color: '#666', fontSize: '0.9em' }}>
              📅 {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Data fetching for user posts (simulated slower API)
let userPostsCache = null;

function fetchUserPosts() {
  if (userPostsCache) {
    return userPostsCache;
  }

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { 
          id: 1, 
          title: "Learning React Suspense", 
          body: "The Suspense feature makes handling async operations so much cleaner!",
          date: "2024-01-20"
        },
        { 
          id: 2, 
          title: "API Integration Tips", 
          body: "Always handle loading states and errors when fetching from external APIs.",
          date: "2024-01-25"
        },
        { 
          id: 3, 
          title: "Real-world React Patterns", 
          body: "Combining Suspense with real APIs provides excellent user experiences.",
          date: "2024-01-30"
        }
      ]);
    }, 3000); // Simulate slower API (3 seconds)
  }).then(data => {
    userPostsCache = data;
    return data;
  });

  throw promise;
}
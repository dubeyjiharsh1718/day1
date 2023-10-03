import React from 'react';


function Comment(props) {
  const { author, content } = props;

  return (
    <div className="comment">
      <p><strong>{author}:</strong> {content}</p>
    </div>
  );
}
function Blogpost() {
    function handleClick(){
        alert("Function Called");
    }
   
        const handleInput = () => {
            console.log("Something Happening...");
        }
    
  return (
    <div className="blog-post">
      <h1>My Blog Post</h1>
      <Comment author="Harsh" content="Great post!" />
      <Comment author="ABhi" content="Thanks for sharing!" />
      <Comment author="Deepak" content="I learned a lot." />
      
      <main>
        <input type="text" onChange={handleInput} />
      </main>
      <button onClick={handleClick}>Click me</button>


    </div>
  );
}

export default Blogpost;

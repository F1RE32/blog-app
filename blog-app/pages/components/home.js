import { useRef } from 'react';

export default function Home() {
  const titleRef = useRef();
  const postRef = useRef();

  const handleSubmit = async event => {
    event.preventDefault();

    const title = titleRef.current.value;
    const post = postRef.current.value;

    try {
      const response = await fetch('/api/save-blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, post }),
      });

      if (response.ok) {
        console.log('Blog data saved successfully.');
        titleRef.current.value = '';
        postRef.current.value = '';
      } else {
        console.error('Error saving blog data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  console.log(titleRef,postRef)
  return (
    <>
      <div>
        <h1 style={{marginLeft:'430px'}}>Dashboard</h1>
      </div>
      <br />
      <br />
      <form className='card' onSubmit={handleSubmit}>
        <div>
          <br />
          <br />
          <textarea
            ref={titleRef}
            className="title"
            type="text"
            placeholder="Title"
          />
          <br />
          <br />
          <textarea
            ref={postRef}
            className="post"
            placeholder="What's On Your Mind"
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
        <br />
        <br/>



    </>

  );
}



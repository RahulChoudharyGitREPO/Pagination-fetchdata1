
const DataDisplay = ({ data }) => {
    return (
      <>
        {data.map((post) => (
          <div key={post.id} className="p-10 m-10 border rounded border-zinc-900 ">
            <p>{post.title}</p>
            <p>{post.id}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  };
  export default DataDisplay;
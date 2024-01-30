
import React, { useState, useEffect } from 'react';
import DataDisplay from './DataDisplay';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setIsLoading(true);
      let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
      let finalResponse = await response.json();
      setData(finalResponse);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleNextPage = () =>{
    setPage(prevPage => prevPage + 1)
    fetchData();
  }

  
  const handlePreviousPage = () =>{
    setPage(prevPage => prevPage - 1)
    fetchData();
  }


  
  const handleDisplayDataClick = () => {
    fetchData(page);
  };
  return (
    <>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <p>{page}</p>
        <button onClick={handleNextPage}>Next</button>
      </div>
      <div className='flex justify-center mt-4 '>
        <button onClick={ handleDisplayDataClick}  className='p-4 bg-green-400 rounded'>
         {isLoading ? 'loading':'display data'}
        </button>
      </div>
      <DataDisplay data={data} />
    </>
  );
}

export default App;

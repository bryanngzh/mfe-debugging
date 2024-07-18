// src/HomePage.js
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.example.data);
  const loading = useSelector((state) => state.example.loading);
  const error = useSelector((state) => state.example.error);

  const fetchData = () => {
    dispatch({ type: "FETCH_DATA_REQUEST" });
  };

  return (
    <div>
      <h1>Redux-Saga Example</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {data && <p>Data: {data}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default HomePage;

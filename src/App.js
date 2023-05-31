/* eslint-disable*/
import { fetchApi } from "./redux/apiSlice/api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchApi());
    console.log(1);
  }, []);

  return (
    <div>
      <h1>API Practice</h1>

      {loading ? <div>Loading...</div> : null}

      {post.map((post)=>(
        <>
       <span key={1}>{post.id}</span>
       <div >{post.title}</div>
       
       </> 
      ))  }


      {error ? <div>Sorry, there was an issue</div> : null}
    </div>
  );
};

export default App;

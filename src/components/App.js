import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadAlbums} from "../redux/action";
import Albums from "./Albums";
import Photos from "./Photos";
import { Route } from "react-router-dom"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAlbums())
  },[])
  return (
      <Route path='/:id?'>
          <div className="container">
              <div className='row'>
                  <div className='col-3'>
                      <Albums/>
                  </div>
                  <div className='col'>
                      <Photos/>
                  </div>
              </div>
          </div>
      </Route>
  );
}

export default App;

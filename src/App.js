
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { BrowserRouter, createBrowserRouter, Router, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResultsPage from './components/SearchResultsPage';


export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<><Header/><Body/></>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      {
        path:"results",
        element:<SearchResultsPage/>
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div>
      {/* <Header/> */}
      
      <RouterProvider router={appRouter}/>
      {/* <Body/> */}
     {/* </div> </RouterProvider> */}
    </div>
    </Provider>
  );
}

export default App;

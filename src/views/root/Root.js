import React from "react";
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwitterView from '../TwitterView/TwitterView';
import Navigation from '../../components/Navigation/Navigation';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


const initialStateItems = [
    {
        image:'',
        description: 'Working on @reactjs. The demo guy.',
        name: 'Dan Abramov',
        twitterLink: 'https://twitter.com/dan_abramov',
    }
]
class Root extends React.Component{

      state = {
            items:[...initialStateItems],
      }

      addItem = (event) =>{
           event.preventDefault();
           const newItem = {
                 name: event.target[0].value,
                 twitterLink: event.target[1].value,
                 image:event.target[2].value,
                 description: event.target[3].value,
              }
      this.setState(prevState =>(
            {items: [...prevState.items,newItem]}
      ));

      event.target.reset();
      }

      render(){
            return(
                  <BrowserRouter>
                        <Switch>
                              <>
                              <Navigation />
                              <h1>Hello World</h1>
                              <Route exact path="/" component={TwitterView}/>
                              <Route path="/articles" component={ArticlesView}/>
                              <Route path="/notes" component={NotesView}/>
                              </>
                        </Switch>
                  </BrowserRouter>
            )
      }
}

export default Root;
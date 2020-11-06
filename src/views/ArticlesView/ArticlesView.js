import React from 'react';
import AppContext from '../../Context/Context';

const ArticlesView = () => ( 
  <AppContext.Consumer>
  {(context)=>(
    <p>This is an Articles View {}</p>
  )}
  </AppContext.Consumer>
);

export default ArticlesView;
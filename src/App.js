
import React, { lazy, Suspense } from 'react';

const HtmlRouter = lazy(() => import('./router/HtmlRouter.js'));

function App() {
  let routerComponent;
    routerComponent = (
      <HtmlRouter />
    );
  return (
    <Suspense>
      {routerComponent}
    </Suspense>    
  );
}

export default App;

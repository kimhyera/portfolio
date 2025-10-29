import React, {  lazy, Suspense } from 'react';

const HtmlRouter = lazy(() => import('./router/HtmlRouter.js'));

function App() {


  return (
      <Suspense>
        <HtmlRouter />
      </Suspense>
  );
}

export default App;

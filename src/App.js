import React, { Suspense } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './pages/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import indexRoutes from 'routes';
const switchRoutes = (
  <Suspense fallback={<div />}>
    <Routes>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Routes>
  </Suspense>
);
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>{switchRoutes}</BrowserRouter>
        <Main />
      </ChakraProvider>
    </Provider>
  );
}

export default App;

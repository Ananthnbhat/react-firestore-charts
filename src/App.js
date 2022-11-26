import React from 'react';
import { Header, Dashboard, Signin } from './components';
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path="signin" element={<Signin />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
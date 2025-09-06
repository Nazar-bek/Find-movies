import React, { lazy, Suspense } from "react";
import Navbar from "../navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Spinner from "../spinner/spinner";


const NotFound = lazy(() => import("../../pages/NotFound"))
const HomePage = lazy(() => import("../../pages/HomePage"))
const TrandingPage = lazy(() => import("../../pages/TrandingPage"))
const PopularPage = lazy(() => import("../../pages/PopularPage"))
const DetailedPage = lazy(() => import("../../pages/DetailedPage"))
const App = () => {
 
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={<div className="loader-wrapper"><Spinner/></div>}>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/tranding" element={<TrandingPage/>}/>
        <Route path="/popular" element={<PopularPage/>}/>
        <Route path={`/movie/:movieId`} element={<DetailedPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;

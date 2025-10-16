import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
const Button = lazy(() => import('../components/Button'))
function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <h1>Home page</h1>
      <Link to="/about">Navigate to About</Link>
      <Button />
    </Suspense>
  );
}

export default Home;

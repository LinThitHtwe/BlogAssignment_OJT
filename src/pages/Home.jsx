import { allBlogs } from "api/APIs";
import AllArticles from "components/AllArticles";
import MainBlog from "components/MainBlog";
import useFetchData from "hooks/useFetchData";
import React from "react";
import MainBlogSkeleton from "skeletons/MainBlogSkeleton";

const Home = () => {
  const { data, isLoading } = useFetchData(["blogs"], allBlogs);

  return (
    <>
      {data ? <MainBlog data={data.data[0]} /> : <MainBlogSkeleton />}

      <AllArticles />
    </>
  );
};

export default Home;

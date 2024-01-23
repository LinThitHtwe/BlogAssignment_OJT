import { getAllBlogs } from "api/APIs";
import AllArticles from "components/AllArticles";
import MainBlog from "components/MainBlog";
import useFetchData from "hooks/useFetchData";
import React from "react";
import { useSelector } from "react-redux";
import MainBlogSkeleton from "skeletons/MainBlogSkeleton";

const Home = () => {
  const { data, isLoading } = useFetchData(["blogs"], () => getAllBlogs(""));
  return (
    <>
      {data && <MainBlog data={data.data.content[0]} />}
      {data && <AllArticles blogs={data.data.content.slice(1)} />}
    </>
  );
};

export default Home;

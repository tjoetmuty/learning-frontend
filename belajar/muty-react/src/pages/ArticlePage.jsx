import { Outlet, useParams } from "react-router-dom";

const ArticlePage = () => {
    const {articleId} = useParams();
    console.log(articleId)
  return (
    <>
      <h1>Article Page</h1>
      <Outlet/>
    </>
  );
};

export default ArticlePage;

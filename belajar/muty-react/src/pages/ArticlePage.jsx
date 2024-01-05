import { Outlet, useParams } from "react-router-dom";

const ArticlePage = () => {
    const {articleId} = useParams();
  return (
    <>
      <h1>Article Page</h1>
      <Outlet />
    </>
  );
};

export default ArticlePage;

import { useParams } from "react-router-dom"

const ArticleDetail = () => {
    const {articleId} = useParams();
  return (
    <div>
        <p>Article detail with id = {articleId}</p>
    </div>
  )
}

export default ArticleDetail
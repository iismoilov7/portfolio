import Loading from '@src/components/common/Loading';
import Messages from '@src/components/common/Messages';
import NotFound from '@src/components/common/NotFound';
import { EndPoints } from '@src/config';
import { i18 } from '@src/hooks/languages';
import { BlogResponse } from '@src/models/blog';
import { apiServer } from '@src/utils/api';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
interface ArticleProps {
  
}

const Article: React.FC<ArticleProps> = ({}) => {
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading
    const [article, setArticle] = useState<BlogResponse>();
    const [error, setError] = useState<string | null>(null); // State to manage errors

    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");

        const fetchArticle = async () => {
            try {
                const response = await apiServer.get(EndPoints.blog.articles+"/"+id+"?lng="+i18.language);
                const articlesData = response.data as BlogResponse;
                setArticle(articlesData);
            } catch (err) {
                setError('Failed to fetch articles');
            } finally {
              setLoading(false);
            }
          };
      
          fetchArticle();
    }, [])

    console.log(article);

  return ( 
    <div className="page-article fade-in mr-top-20">
        { loading && <Loading /> }
        { error && <Messages message={error} status="error" /> }

        { article ? (
            <>
            <img src={article.preview_url} />
            <div className="page-article__topbox flex">
                <div className="page-article__user">
                    <img src={article.user.picture_url} className="page-article__user-avatar" />
                    <div className="flex-col">
                        <div className="page-article__user-name">{article.user.name}</div>
                        <div className="page-article__user-username">@{article.user.username}</div>
                    </div>
                </div>
                <div className="page-article__date">{article.created_at}</div>
            </div>

            <div className="page-article__content">
                <ReactMarkdown>
                    {article.content}
                </ReactMarkdown>
            </div>
            </>
        ): <NotFound /> }
    </div>
  )
}

export default Article;

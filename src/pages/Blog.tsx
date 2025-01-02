import BlogArticle from '@src/components/blog/Blog';
import Loading from '@src/components/common/Loading';
import Messages from '@src/components/common/Messages';
import { EndPoints } from '@src/config';
import { i18 } from '@src/hooks/languages';
import { BlogResponse } from '@src/models/blog';
import { apiServer } from '@src/utils/api';
import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

interface BlogProps {}

const Blog: React.FC<BlogProps> = () => {
  const [articles, setArticles] = useState<BlogResponse[]>([]); // State to hold articles
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading
  const [error, setError] = useState<string | null>(null); // State to manage errors

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await apiServer.get(EndPoints.blog.articles+"?lng="+i18.language);
        const articlesData = response.data.articles as BlogResponse[];
        setArticles(articlesData);
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response && axiosError.response.status === 404) {
          setError(i18.t("blog.errors.notfound"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="page-blog fade-in mr-top-20">
      <h2 className="page-blog__title title" dangerouslySetInnerHTML={{ __html: i18.t("blog.title") }}></h2>
      <h4 className="page-blog__subtitle subtitle">{i18.t("blog.subtitle")}</h4>
      <div className="page-blog-container flex mr-top-20">
        {loading && <Loading />}
        {error && <Messages message={error} status="error" />}
        {articles.map((article) => (
          <BlogArticle key={article.id} {...article} /> // Ensure to provide a unique key
        ))}
      </div>
    </div>
  );
};

export default Blog;

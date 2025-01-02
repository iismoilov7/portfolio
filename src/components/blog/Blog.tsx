import { i18 } from '@src/hooks/languages';
import { BlogResponse } from '@src/models/blog';
import React from 'react'
import { Link } from 'react-router-dom';


const BlogArticle: React.FC<BlogResponse> = ({
    id,
    preview_url,
    category_name,
    created_at,
    user,
    title,
    content
}) => {
  return (
    <div className="article">
        <img src={preview_url} alt="" className="article__preview" />
        <div className="article__meta">
            <img className="article__meta-avatar" src={ user.picture_url } />
            <div className="article__meta-name">{ user.name }</div>
            
            <div className="article__meta-date">{ created_at }</div>
            <div className="article__meta-category"><span className="accent">#</span>{ category_name }</div>
        </div>
        <div className="article__info">
            <div className="article__info-title">
                { title }
            </div>

            <div className="article__info-description">
                { content }
            </div>

            <div className="flex">
                <Link to={`/blog/article?id=${id}`} className="article__btn btn">{ i18.t("blog.read") }</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogArticle;

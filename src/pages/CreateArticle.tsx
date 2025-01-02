import { RootState } from '@src/store';
import Loading from '@src/components/common/Loading';
import Messages from '@src/components/common/Messages';
import { EndPoints } from '@src/config';
import { useAppSelector } from '@src/hooks/dispatch';
import { i18 } from '@src/hooks/languages';
import { CategoryResponse } from '@src/models/blog';
import { apiServer } from '@src/utils/api';
import MDEditor from '@uiw/react-md-editor';
import React, { useEffect, useState } from 'react'

interface CreateArticleProps {

}

const CreateArticle: React.FC<CreateArticleProps> = ({ }) => {
    const isAuthenticated = useAppSelector((state: RootState) => state.auth.isAuthenticated)

    if (!isAuthenticated) {
        window.location.href = "/login";
    }
    
    
    const [categories, setCategory] = useState<CategoryResponse[]>([]); // State to hold articles
    const [loading, setLoading] = useState<boolean>(true); // State to manage loading
    const [error, setError] = useState<string | null>(null); // State to manage errors
    const [preview_url, setPreviewUrl] = useState("");
    const [title_ru, setTitleRu] = useState("");
    const [title_en, setTitleEn] = useState("");
    const [content_en, setContentEn] = useState("");
    const [content_ru, setContentRu] = useState("");
    const [category_id, setCategoryId] = useState<Number>();
    const [success_message, setSuccessMessage] = useState("");



    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await apiServer.get(EndPoints.blog.category + "?lng=" + i18.language, {withCredentials: true});
                const categoriesData = response.data as CategoryResponse[];
                setCategory(categoriesData);
                setCategoryId(categoriesData[0].id)
            } catch (err) {
                setError('Failed to fetch articles');
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!preview_url || !title_ru || !title_en || !content_ru || !content_en || !category_id) {
            console.log(category_id)
            console.log(preview_url)
            console.log(title_ru)
            console.log(title_en)
            console.log(content_ru)
            console.log(content_en)
            setError(i18.t("create-artc.errors.fullfill"));
            return;
        }

        try {
            const response = await apiServer.post(
                EndPoints.blog.create_article,
                {
                    "preview_url": preview_url,
                    "title_ru": title_ru,
                    "title_en": title_en,
                    "content_ru": content_ru,
                    "content_en": content_en,
                    "category_id": category_id
                },
                {
                    withCredentials: true,
                });
            setContentEn("");
            setContentRu("");
            setTitleEn("");
            setTitleRu("");
            setPreviewUrl("");
            setError(null);
            setSuccessMessage(response.data.detail);
        } catch (err) {
            setError('Failed to fetch articles');
        } finally {
            setLoading(false);
        }
    }



    return (
        <div className="page-create-artc fade-in mr-top-20">

            <h2 className="page-create-art__title title" dangerouslySetInnerHTML={{ __html: i18.t("create-artc.title") }}></h2>
            <h4 className="page-create-art__subtitle subtitle">{i18.t("create-artc.subtitle")}</h4>

            <form className="page-create-artc__form mr-top-20" onSubmit={submitForm}>
                <input 
                    className="page-create-artc__form-input"
                    type="text"
                    placeholder={i18.t("create-artc.preview_url")}
                    value={preview_url}
                    onChange={(e) => { setPreviewUrl(e.target.value) }}
                />

                <div className="mr-top-20"><b>{ i18.t("create-artc.category_label") }</b></div>
                
                <select 
                    className="page-create-artc__form-select"
                    value={category_id?.toString()}
                    onChange={(e) => {
                        setCategoryId(parseInt(e.target.value))
                    }}
                    >
                    { categories.map((category) => (
                        <option key={category.id} id={category.id.toString()}>{category.name}</option>
                    ))}
                </select>

                <div className="mr-top-20">
                    <input 
                        className="page-create-artc__form-input"
                        type="text"
                        placeholder={i18.t("create-artc.title_en")}
                        value={title_en}
                        onChange={(e) => { setTitleEn(e.target.value) }}
                    />

                    <div className="mr-top-20">
                        <MDEditor
                            value={content_en}
                            onChange={(value) => setContentEn(value || "")}
                            textareaProps={{
                                placeholder: i18.t("create-artc.content_en")
                            }}
                        />
                    </div>
                </div>

                <div className="mr-top-20">
                    <input
                        className="page-create-artc__form-input"
                        type="text"
                        placeholder={i18.t("create-artc.title_ru")}
                        value={title_ru}
                        onChange={(e) => { setTitleRu(e.target.value) }}
                    />

                    <div className="mr-top-20">
                        <MDEditor
                            value={content_ru}
                            onChange={(value) => setContentRu(value || "")}
                            textareaProps={{
                                placeholder: i18.t("create-artc.content_ru")
                            }}
                        />
                    </div>
                </div>
                
                { error && <Messages message={error} status="error" /> }

                { success_message && <Messages message={success_message} status="success" /> }

                { loading && <Loading /> }

                <button type="submit" className="page-create-artc__form-btn btn mr-top-20">{i18.t("create-artc.btn")}</button>
            </form>
        </div>
    )
}

export default CreateArticle;

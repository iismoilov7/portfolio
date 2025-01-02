import { User } from "./auth";


export interface BlogResponse {
    id: number;
    preview_url: string;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
    category_name: string;
    user: User;
}

export interface CategoryResponse {
    name: string;
    id: number;
}

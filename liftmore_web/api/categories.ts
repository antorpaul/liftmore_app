import urlBase from "@/api/common";

export interface Category {
    id: number,
    name: string,
    description: string,
    type: string
}

export const fetchAllCategories = async () : Promise<Category[]> => {
    try {
        const response = await fetch(`${urlBase.base}${urlBase.categories}`);
        if (!response.ok) {
            throw new Error("Network response was invalid");
        }

        const data: Category[] = await response.json();
        return data;
    } catch (error: unknown) {
        throw error;
    }
}
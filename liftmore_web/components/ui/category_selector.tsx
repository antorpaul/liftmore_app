import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Category, fetchAllCategories } from "@/api/categories";

interface CategorySelectorProps {
    setCategoryDispatch: React.Dispatch<React.SetStateAction<number>>;
}

export const CategorySelector: React.FC<CategorySelectorProps> = async ({ setCategoryDispatch }) => {
    const categories: Category[] = await fetchAllCategories();
    categories.splice(0, 0, { name: "All", id: -1, type: "exercise", description: "All Categories" });

    return (
        <div className="max-w-96">
            <Select onValueChange={(value) => {
                setCategoryDispatch(parseInt(value));
            }}>
                <SelectTrigger>
                    <SelectValue placeholder="Select Exercise Category"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {categories.map((item, index) => (
                        <SelectItem key={index} value={item.id.toString()}>{item.name}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export default React.memo(CategorySelector);

'use client'

import React, { useEffect, useRef, useState } from "react";
import { Exercise, fetchAllExercises } from "@/api/exercise";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { TbPencil } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import dynamic from 'next/dynamic';
import {useMediaQuery} from "@/hooks/use-media-query";

const CategorySelector = dynamic(() => import('@/components/ui/category_selector'), { ssr: false });

interface ExerciseListViewProps {
    defaultCategoryId: number;
    page: number;
    pageSize: number;
}

interface NewExerciseDialogProps {
    categoryDispatch: React.Dispatch<React.SetStateAction<number>>;
}

const NewExerciseDialog: React.FC<NewExerciseDialogProps> = ({ categoryDispatch }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Create New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="flex align-middle">
                        <TbPencil size="20" className="mt-[0.1em] mr-2" />
                        <h1 className="libre-franklin-h1">Create Exercise</h1>
                    </div>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-y-2">
                    <Input type="text" placeholder="Exercise Name" />
                    <CategorySelector setCategoryDispatch={categoryDispatch} />
                    <Textarea placeholder="Describe your category." />
                </div>
                <DialogFooter>
                    <Button type="submit">Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export const ExerciseListView: React.FC<ExerciseListViewProps> = ({ defaultCategoryId, page, pageSize }) => {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    const [displayCategoryId, setDisplayCategoryId] = useState<number>(defaultCategoryId);
    const [newExerciseCategoryId, setNewExerciseCategoryId] = useState<number>(defaultCategoryId);

    useEffect(() => {
        const loadExercises = async (displayCategoryId: number) => {
            setLoading(true);
            try {
                const data = await fetchAllExercises(page, pageSize, displayCategoryId);
                setExercises(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadExercises(displayCategoryId);
    }, [page, pageSize, displayCategoryId]);

    if (loading) return (
        <div className="flex flex-col space-y-3">
            <div className="space-y-4">
                <Skeleton className="h-8 w-[200px]" />
                <div className="space-y-2">
                    <Skeleton className="h-32 w-full" />
                    <Skeleton className="h-32 w-full" />
                </div>
            </div>
        </div>
    );
    if (error) return (<div><span>Error retrieving exercises.</span></div>);

    return (
        <div>
            <div className="flex pb-4">
                <CategorySelector setCategoryDispatch={setDisplayCategoryId} />
                <div className="flex items-center ml-auto">
                    {isDesktop ?
                        <h3 className="libre-franklin-h3 pr-2">Don&apos;t see what you&apos;re looking for?</h3>
                        : <div></div>
                    }
                    <NewExerciseDialog categoryDispatch={setNewExerciseCategoryId}/>
                </div>
            </div>
            <div>
                <ul>
                    {exercises.map((exercise, index) => (
                        <li key={index} className="pb-2 last:pb-0">
                            <Card className="px-4 pt-4">
                                <CardTitle className="pb-2">
                                    {exercise.name}
                                </CardTitle>
                                <CardContent>
                                    <p className="text-slate-500">{exercise.description}</p>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

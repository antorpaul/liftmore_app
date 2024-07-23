import React from 'react';
import { Exercise, fetchAllExercises } from '@/api/exercise';
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog";
import {TbPencil} from "react-icons/tb";
import { Input } from '@/components/ui/input';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

async function RetrieveAllExercises(page: number = -1, page_size: number = -1, category_id: number = -1) {
    const exercises: Exercise[] = await fetchAllExercises(page, page_size, category_id)

    return (
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
    );
}

// async function RetrieveAllCategories() {
//     const categories: Category[] = await fetchAllCategories();
//
//     return (
//
//     )
// }

export default function ExerciesMain() {
    return (
        <main>
            <div className="p-4">
                <h1 className="libre-franklin-h1 text-xl">Exercise Library</h1>
            </div>
            <div className="flex px-2 pb-4">
                <div className="max-w-96">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Exercise Category"></SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            {/* TODO Implement <RetrieveAllCategories /> */}
                            {/*<SelectItem value="bicep">Bicep Exercises</SelectItem>*/}
                            {/*<SelectItem value="leg">Leg Exercises</SelectItem>*/}
                            {/*<SelectItem value="calf">Calf Exercises</SelectItem>*/}
                            {/*<SelectItem value="chest">Chest Exercises</SelectItem>*/}
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center ml-auto">
                    <h3 className="libre-franklin-h3 pr-2">Don&apos;t see what you&apos;re looking for?</h3>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Create New</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <div className="flex align-middle">
                                    <TbPencil size="20" className="mt-[0.1em] mr-2"/>
                                    <h1 className="libre-franklin-h1">Create Exercise</h1>
                                </div>
                            </DialogHeader>
                            <div className="grid grid-cols-1 gap-y-2">
                                <Input type="text" placeholder="Exercise Name" />
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Exercise Category"></SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="bicep">Bicep Exercises</SelectItem>
                                        <SelectItem value="leg">Leg Exercises</SelectItem>
                                        <SelectItem value="calf">Calf Exercises</SelectItem>
                                        <SelectItem value="chest">Chest Exercises</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Textarea placeholder="Describe your category." />
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save Changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            {/* TODO Get retrieve all exercises working with categories and pagination <RetrieveAllExercises />*/}
        </main>
    );
}

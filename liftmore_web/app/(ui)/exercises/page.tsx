import React, {Suspense} from 'react';
import {ExerciseListView} from "@/components/ui/exercise_listview";


export default function ExerciesMain() {
    return (
        <main>
            <div className="p-4">
                <h1 className="libre-franklin-h1 text-xl">Exercise Library</h1>
            </div>
            <Suspense fallback={<div><span>Exercises are loading...</span></div>}>
                <ExerciseListView defaultCategoryId={-1} page={0} pageSize={10}/>
            </Suspense>
        </main>
    );
}

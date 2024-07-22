import urlBase from "@/api/common";

export interface Exercise {
    id: number,
    name: string,
    description: string,
    category_id: number
}

export const fetchAllExercises = async () : Promise<Exercise[]> => {
  try {
      const response = await fetch(`${urlBase.base}${urlBase.exercise}s/all`);
      if (!response.ok) {
          throw new Error("Network response was invalid.");
      }
      const data: Exercise[] = await response.json();
      return data;
  } catch (error: unknown) {
      throw error;
  }
};

export const fetchExerciseById = async (exercise_id: number)=> {
  try {
      const response = await fetch(`${urlBase.base}${urlBase.exercise}/${exercise_id}`);
      if (!response.ok) {
          throw new Error("Network response was invalid.");
      }
      return await response.json();
  } catch (error) {
      throw error;
  }
};

export const searchExercises = async (query: number)=> {
  try {
      const response = await fetch(`${urlBase.base}${urlBase.exercise}/search?query=${query}`);
      if (!response.ok) {
          throw new Error("Network response was invalid.");
      }
      return await response.json();
  } catch (error) {
      throw error;
  }
};
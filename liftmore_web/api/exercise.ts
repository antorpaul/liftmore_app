import urlBase from "@/api/common";

export interface Exercise {
    id: number,
    name: string,
    description: string,
    category_id: number
}

export const fetchAllExercises = async (page: number = -1, page_size: number = -1, category_id: number = -1) : Promise<Exercise[]> => {
  try {
      const response = await fetch(`${urlBase.base}${urlBase.exercise}s/all?page=${page}&page_size=${page_size}&category_id=${category_id}`);
      console.log(`${urlBase.base}${urlBase.exercise}s/all?page=${page}&page_size=${page_size}&category_id=${category_id}`);
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
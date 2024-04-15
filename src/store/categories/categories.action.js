import { createAction } from "../../utils/reducer/reducer.utlis";
import { CATEGORIES_ACTIONS } from "./categories.types";

export const setCategories = (categoriesArray) =>
    createAction(CATEGORIES_ACTIONS.SET_CATEGORIES, categoriesArray);
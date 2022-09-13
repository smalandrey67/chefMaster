import { createAsyncThunk } from '@reduxjs/toolkit'
import { handlerError } from 'utils/helpers/handleError.helper'

import { RootState } from 'store/store'
import { WeekPlanType } from 'store/slices/mealPlanSlice/mealPlanSlice.types'

import { db } from '../../../firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export const getMealPlanThunk = createAsyncThunk<WeekPlanType[] | undefined, void, { rejectValue: string }>(
   'getMealPlan', async (_, { rejectWithValue, getState }) => {
      try {
         const state = getState() as RootState
         const uidOfUserDocument = state.authorisation.user?.uid


         if (uidOfUserDocument) {
            const mealPlanRef = doc(db, 'users', uidOfUserDocument)
            const userMealPlan = await getDoc(mealPlanRef)

            return userMealPlan.data()?.mealPlan
         }
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

export const updateMealPlanThunk = createAsyncThunk<void, void, { rejectValue: string }>(
   'updateMealPlanThunk', async (_, { rejectWithValue, getState }) => {
      try {
         const state = getState() as RootState
         const uidOfUserDocument = state.authorisation.user?.uid

         if (uidOfUserDocument) {
            const mealPlanRef = doc(db, 'users', uidOfUserDocument)

            await updateDoc(mealPlanRef, { mealPlan: state.mealPlan.weekPlan })
         }
      } catch (error) {
         return rejectWithValue(handlerError(error, 'Server Error'))
      }
   }
)

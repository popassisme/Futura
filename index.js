import React from 'react'
import Screen from './Screen'

export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Profile"/>
export const TrackBudgetScreen = ({navigation}) => <Screen navigation={navigation} name="Track Budget"/>
export const TrackGoalScreen = ({navigation}) => <Screen navigation={navigation} name="Track Goal"/>
export const FinancialGoalScreen = ({navigation}) => <Screen navigation={navigation} name="Financial Goal"/>

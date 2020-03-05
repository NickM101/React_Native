import React from 'react';
import Screen from "./Screen";

export const ProfileScreen = ({ navigation }) => <Screen navigation={navigation} name="Profile"></Screen>
export const MessageScreen = ({ navigation }) => <Screen navigation={navigation} name="Message"></Screen>
export const ActivityScreen = ({ navigation }) => <Screen navigation={navigation} name="Activity"></Screen>
export const ListScreen = ({ navigation }) => <Screen navigation={navigation} name="List"></Screen>
export const ReportScreen = ({ navigation }) => <Screen navigation={navigation} name="Report"></Screen>
export const StatisticsScreen = ({ navigation }) => <Screen navigation={navigation} name="Statistics"></Screen>
export const SignOutScreen = ({ navigation }) => <Screen navigation={navigation} name="SignOut"></Screen>
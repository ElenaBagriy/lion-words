import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChooseNativeLanguage from "../../screens/Onboarding/ChooseNativeLanguage/ChooseNativeLanguage";
import ChooseLearningLanguage from "../../screens/Onboarding/ChooseLearningLanguage/ChooseLearningLanguage";
import ChooseSourceScreen from "../../screens/Onboarding/ChooseSourceScreen/ChooseSourceScreen";
import ChooseReasonsScreen from "../../screens/Onboarding/ChooseReasonsScreen/ChooseReasonsScreen";
import SetRemindersScreen from "../../screens/Onboarding/SetRemindersScreen/SetRemindersScreen";
import CreateProfileWelcomeScreen from "../../screens/Onboarding/CreateProfile/CreateProfileWelcomeScreen/CreateProfileWelcomeScreen";
import CreatingProfile from "../../screens/Onboarding/CreateProfile/CreatingProfile/CreatingProfile";
import ChooseIdentity from "../../screens/Onboarding/CreateProfile/ChooseIdentity/ChooseIdentity";
import ChooseBirthday from "../../screens/Onboarding/CreateProfile/ChooseBirthday/ChooseBirthday";
import SignIn from "../../screens/LogIn/SignIn/SignIn";
import ForgotPassword from "../../screens/LogIn/ForgotPassword/ForgotPassword";
import PasswordReset from "../../screens/LogIn/PasswordReset/PasswordReset";
import NewPassword from "../../screens/LogIn/NewPassword/NewPassword";
import WelcomeBack from "../../screens/LogIn/WelcomeBack/WelcomeBack";
import PaginationDots from "../PaginationDots/PaginationDots";
import ActionPage from "../../screens/ActionPage/ActionPage";
import { SvgXml } from "react-native-svg";
import { homeIcon } from "../../images/svg/bottomNav/homeIcon-svg";
import { challengeIcon } from "../../images/svg/bottomNav/challengeIcon-svg";
import { profileIcon } from "../../images/svg/bottomNav/profileIcon-svg";
import { backArrowHeaderIcon } from "../../images/svg/backArrowHeaderIcon-svg";

import LessonScreen from "../../screens/ActionPage/LessonScreen";
import ChallengePage from "../../screens/ChallengePage/ChallengePage";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";
import PersonalInfoScreen from "../../screens/SettingsScreen/PersonalInfoScreen/PersonalInfoScreen";
import SecurityScreen from "../../screens/SettingsScreen/SecurityScreen/SecurityScreen";
import ChangeTargetLanguage from "../../screens/SettingsScreen/ChangeTargetLanguage/ChangeTargetLanguage";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.keyboardContainer}
    >
      <NavigationContainer>
        <MainStack.Navigator initialRouteName={Home}>
          <MainStack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={0} />,
              headerTitleAlign: "center",
              headerLeft: () => null,
            }}
          />
          <MainStack.Screen
            name="ChooseNativeLanguage"
            component={ChooseNativeLanguage}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={1} />,
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 31 }}
                >
                  <SvgXml xml={backArrowHeaderIcon} />
                </TouchableOpacity>
              ),
            })}
          />
          <MainStack.Screen
            name="ChooseLearningLanguage"
            component={ChooseLearningLanguage}
            options={({ navigation }) => ({
              title: "",
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={2} />,
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 31 }}
                >
                  <SvgXml xml={backArrowHeaderIcon} />
                </TouchableOpacity>
              ),
            })}
          />
          <MainStack.Screen
            name="ChooseSourceScreen"
            component={ChooseSourceScreen}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={3} />,
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 31 }}
                >
                  <SvgXml xml={backArrowHeaderIcon} />
                </TouchableOpacity>
              ),
            })}
          />
          <MainStack.Screen
            name="ChooseReasonsScreen"
            component={ChooseReasonsScreen}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={4} />,
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 31 }}
                >
                  <SvgXml xml={backArrowHeaderIcon} />
                </TouchableOpacity>
              ),
            })}
          />
          <MainStack.Screen
            name="SetRemindersScreen"
            component={SetRemindersScreen}
            options={({ navigation }) => ({
              headerBackTitleVisible: false,
              headerShadowVisible: false,
              headerTitle: () => <PaginationDots total={7} pageNumber={5} />,
              headerTitleAlign: "center",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ paddingLeft: 31 }}
                >
                  <SvgXml xml={backArrowHeaderIcon} />
                </TouchableOpacity>
              ),
            })}
          />
          <MainStack.Group>
            <MainStack.Screen
              name="CreateProfileWelcomeScreen"
              component={CreateProfileWelcomeScreen}
              options={({ navigation }) => ({
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitle: () => <PaginationDots total={7} pageNumber={6} />,
                headerTitleAlign: "center",
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="CreatingProfile"
              component={CreatingProfile}
              options={({ navigation }) => ({
                title: "Creating a Profile",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="ChooseIdentity"
              component={ChooseIdentity}
              options={({ navigation }) => ({
                title: "Choose your identity",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="ChooseBirthday"
              component={ChooseBirthday}
              options={({ navigation }) => ({
                title: "When is Your Birthday?",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
          </MainStack.Group>
          <MainStack.Group>
            <MainStack.Screen
              name="SignIn"
              component={SignIn}
              options={({ navigation }) => ({
                title: "Sign In",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={({ navigation }) => ({
                title: "Forgot Password",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="PasswordReset"
              component={PasswordReset}
              options={({ navigation }) => ({
                title: "Password Reset",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="NewPassword"
              component={NewPassword}
              options={({ navigation }) => ({
                title: "New Password",
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Poppins-Regular",
                  fontSize: 19,
                  color: "#650000",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ paddingLeft: 31 }}
                  >
                    <SvgXml xml={backArrowHeaderIcon} />
                  </TouchableOpacity>
                ),
              })}
            />
            <MainStack.Screen
              name="WelcomeBack"
              component={WelcomeBack}
              options={{
                headerShown: false,
              }}
            />
          </MainStack.Group>
          <MainStack.Group>
            <MainStack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="LessonScreen"
              component={LessonScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="PersonalInfoScreen"
              component={PersonalInfoScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="SecurityScreen"
              component={SecurityScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="ChangeTargetLanguage"
              component={ChangeTargetLanguage}
              options={{
                headerShown: false,
              }}
            />
          </MainStack.Group>
        </MainStack.Navigator>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

function TabNavigator() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="ActionPage"
        screenOptions={{
          tabBarInactiveTintColor: "#FFFFFF",
          tabBarActiveTintColor: "#F2C600",
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        <Tab.Screen
          name="ActionPage"
          component={ActionPage}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <SvgXml xml={homeIcon} width={size} height={size} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ChallengePage"
          component={ChallengePage}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <SvgXml
                xml={challengeIcon}
                width={size}
                height={size}
                fill={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <SvgXml
                xml={profileIcon}
                width={size}
                height={size}
                fill={color}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Tab.Screen name="A2" component={A2} />
      <Tab.Screen name="A3" component={A3} /> */}
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabBarStyle: {
    borderRadius: 20,
    backgroundColor: "#650000", // измените на нужный цвет
    marginBottom: 30,
    marginLeft: 14,
    marginRight: 14,
    alignItems: "space-between",
    justifyContent: "space-between",
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 18,
    paddingRight: 18,
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000",
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
});

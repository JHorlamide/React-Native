import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { SIZES, COLORS, icons, images } from "../constants";
import {
  NearbyJobCard,
  PopularJobs,
  Welcome,
  ScreenHeaderBtn,
} from "../components";

const Home = () => {
  const router = useRouter();

  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerTitle: "",
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
        ),

        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
        ),
      }}
    />

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome />
        <PopularJobs />
        <NearbyJobCard />
      </View>
    </ScrollView>
  </SafeAreaView>;
};

export default Home;

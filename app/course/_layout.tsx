import { Stack } from "expo-router";
import { bg, border, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd, justifyBetween, justifyCenter, justifyEnd, mb, mt, p, pb, pl, px, py, rounded, w, wFull, wHFull } from "@/utils/styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { index_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Link, router, useNavigation } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { c, fs, fs12, fs14, fs16, fw400, fw500, fw600, fw700 } from "@/utils/fontStyles";
import { useLayoutEffect } from "react";
import Entypo from '@expo/vector-icons/Entypo';
import { course_images } from "@/constants/images";


function CourseLayout() {


    return (
        <Stack screenOptions={{ headerTitle: '', }}>
            <Stack.Screen name="index" options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Entypo name="chevron-small-left" size={30} color="#697586" />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => router.push('/degree')}>
                        <Image style={[image.w(24), image.h(24)]} source={course_images.forward} />
                    </TouchableOpacity>
                ),
                headerStyle: { backgroundColor: 'white', },
                headerTitle: '',
                headerBackTitle: '',
                headerBackTitleStyle: { fontSize: 0 },
                headerTitleStyle: { color: 'transparent' }
            }} />
        </Stack>
    )
}

export default CourseLayout;
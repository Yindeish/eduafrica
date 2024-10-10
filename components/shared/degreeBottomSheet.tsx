import { absolute, bg, border, borderB, borderT, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd, justifyBetween, justifyCenter, justifyEnd, m, mb, ml, mt, mx, my, p, pb, pl, pr, pt, px, py, r, relative, rounded, t, w, wFull, wHFull } from "@/utils/styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { course_images, degree_images, index_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Link, router, useNavigation } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { c, fs, fs12, fs14, fs16, fw400, fw500, fw600, fw700 } from "@/utils/fontStyles";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons/Octicons';
import { useState } from "react";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useBottomSheet } from "@/contexts/useBottomSheetContext";

function DegreeBottomSheet() {
    const { hideBottomSheet } = useBottomSheet()


    return (
        <View style={[rounded(20), flexCol, gap(30), relative]}>
            <View style={[wFull, flex, justifyBetween, px(10),]}>
                <Text style={[fw600, fs16, c('#384250')]}>Announcement</Text>
                <Ionicons onPress={hideBottomSheet} name="close-outline" size={24} color="black" />
            </View>

            <ScrollView style={[wHFull, bg('white'), flexCol, gap(20),]}>

                <View style={[borderT(1, '#D3D8DE'), px(10), py(20), wFull, h('auto'), flexCol, gap(15)]}>

                    <View style={[flexCol, gap(8)]}>
                        <Text>How to make figmotion design</Text>
                        <Text>11/29/2023, 11:43</Text>
                        <Text>Hi All,</Text>
                    </View>

                    <View style={[flexCol, gap(8)]}>
                        <Text>Learn how to design your mobile pp and website for
                        </Text>
                        <Text>different screen size and platforms and what you</Text>
                        <Text>will learn are</Text>
                    </View>

                    <Image style={[image.w('100%'), image.rounded(8)]} source={degree_images.video1} />

                </View>

                <View style={[borderT(1, '#D3D8DE'), px(10), pt(30), wFull, h('auto'), flexCol, gap(15), mb(100)]}>

                    <View style={[flexCol, gap(8)]}>
                        <Text>How to make figmotion design</Text>
                        <Text>11/29/2023, 11:43</Text>
                        <Text>Hi All,</Text>
                    </View>

                    <View style={[flexCol, gap(8)]}>
                        <Text>Learn how to design your mobile pp and website for
                        </Text>
                        <Text>different screen size and platforms and what you</Text>
                        <Text>will learn are</Text>
                    </View>

                    <Image style={[image.w('100%'), image.rounded(8)]} source={degree_images.video2} />

                </View>
            </ScrollView>

        </View>
    )
}

export default DegreeBottomSheet;
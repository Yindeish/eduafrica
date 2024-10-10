import {
    absolute, b, bg, border, borderB, borderT, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd,
    justifyBetween, justifyCenter, justifyEnd, l, m, mb, ml, mt, mx, my, p, pb, pl, pr, pt, px, py, r, relative, rounded, t, w, wFull, wHFull
} from "@/utils/styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { course_images, degree_images, index_images, profile_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image, imgAbsolute } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Link, router, useNavigation } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { c, colorWhite, fs, fs12, fs14, fs16, fw400, fw500, fw600, fw700 } from "@/utils/fontStyles";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Octicons from '@expo/vector-icons/Octicons';
import { useState } from "react";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useBottomSheet } from "@/contexts/useBottomSheetContext";
import DegreeBottomSheet from "@/components/shared/degreeBottomSheet";



function Profile() {
    const { height, width } = Dimensions.get('window')

    const [tab, setTab] = useState('Course taken')

    return (
        <SafeScreen>
            <View style={[relative]}>
                <LinearGradient
                    colors={['#21B8ED33', 'white', 'white']}
                    style={[wFull, h(height), flexCol, gap(10), pt(10), pb(30), mb(30), px(10), { overflow: 'visible', }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >

                    <View style={[wFull, h(170), relative]}>
                        <Image style={[image.w('100%'), image.h(150)]} source={profile_images.gradient} />
                        <Image style={[imgAbsolute, image.t(120)]} source={profile_images.content} />
                        <Image style={[imgAbsolute, image.t(170), image.r(10)]} source={profile_images.action} />
                    </View>

                    <View style={[mt(30), flexCol, ml(20)]}>
                        <Text style={[fw600, fs(24), c('#101828')]}>Joshua Wilson <Text style={[fs(100), c('#12B76A')]}>.</Text></Text>
                        <Text style={[fw400, fs16, c('#475467')]}>josh@untitledui.com</Text>
                        <Text style={[fw400, fs16, c('#475467')]}>Last seen 08:20pm (5 minutes ago)</Text>
                    </View>

                    {/* //!Tab bar */}
                    <View style={[wFull, h(32), flex, justifyBetween, mt(20)]}>
                        {[
                            'Course taken', 'Courses in progress'
                        ].map((item, index) => (
                            <View style={[item === tab ? borderB(1, '#00BF63') : {}, flexCenter, w('50%')]}>
                                <Text onPress={() => setTab(item)} style={[hFull, pt(3), fw600, flex, itemsCenter, item === tab ? { ...borderB(1, '#00BF63'), ...c('#00BF63') } : { ...c('#364152') }]} key={index}>{item}</Text>
                            </View>
                        ))}
                    </View>
                    {/* //!Tab bar */}

                    <View style={[flexCol, gap(20)]}>
                        {Array.from({ length: 2 }).map((item, index) => (
                            <View style={[border(1, '#D0D5DD'), rounded(4), wFull, flex, relative]} key={index}>

                                <Image style={[image.w('40%'), image.h(100)]} source={snoop_images.snoop_img_8} />

                                <View style={[flexCol, justifyCenter, gap(10), pl(10), bg('white'), relative]}>
                                    <SimpleLineIcons style={[absolute, t(10), r(10)]} name="options-vertical" size={19} color="#697586" />
                                    <Text style={[w('70%'), fw700, fs16, c('#364152')]}>Figma UI/UX Design
                                        Essentials</Text>
                                    <Text style={[fw500, fs(13), c('#697586')]}>50 students</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </LinearGradient>

            </View>
        </SafeScreen>
    )
}

export default Profile;
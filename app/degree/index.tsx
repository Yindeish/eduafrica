import { absolute, bg, border, borderB, borderT, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd, justifyBetween, justifyCenter, justifyEnd, l, m, mb, ml, mt, mx, my, p, pb, pl, pr, pt, px, py, r, relative, rounded, t, w, wFull, wHFull } from "@/utils/styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { course_images, degree_images, index_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
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


function Course() {
    const { height, width } = Dimensions.get('window')
    const { showBottomSheet } = useBottomSheet()

    type FTab = 'Courses' | 'Resources' | 'Permission' | 'Info'
    type STab = 'All' | 'Downloads' | 'Downloading'

    const [fTab, setFTab] = useState<FTab>('Courses');
    const [sTab, setSTab] = useState<STab>('All');
    const [activeAcordionIndex, setActiveAcordionIndex] = useState(0);
    const [fab, setFab] = useState({
        shown: false,
        open: false
    });
    const [chat, setChat] = useState({
        chatting: false
    })
    const { chatting } = chat;

    return (
        <SafeScreen>
            <View style={[relative]}>
                <ScrollView >
                    <LinearGradient
                        colors={['#21B8ED33', 'white', 'white']}
                        style={[wFull, h(height * 0.65), flexCol, gap(10), pt(10), pb(30), mb(30), px(10), { overflow: 'visible', }]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >

                        <Image source={snoop_images.snoop_img_8} style={[image.w('100%'), image.h(200)]} />

                        <View>
                            <Text style={[fw700, fs(20), c('#364152'),]}>
                                Figma UI/UX Design Essentials :
                            </Text>
                            <Text style={[fw700, fs(20), c('#364152'),]}>
                                from Entry level to senior level
                            </Text>
                        </View>

                        {/* //!Tab bar */}
                        <View style={[wFull, h(32), flex, justifyBetween, mt(20)]}>
                            {[
                                'Courses', 'Resources', 'Permission', 'Info'
                            ].map((item, index) => (
                                <Text onPress={() => setFTab(item as FTab)} style={[hFull, pt(3), fw600, flex, itemsCenter, item === fTab ? { ...borderB(1, '#00BF63'), ...c('#00BF63') } : { ...c('#364152') }]} key={index}>{item}</Text>
                            ))}
                        </View>
                        {/* //!Tab bar */}

                        <View style={[flexCol, gap(7), pr(10), mt(20)]}>
                            <Text style={[c('#364152'), fw500, fs12]}>About this course</Text>

                            <Text style={[c('#364152'), fw400, fs12]}>
                                Learn how to design your mobile pp and website for different screen size and platforms and what you will learn are
                            </Text>

                            <View style={[flex, gap(7),]}>
                                <Octicons name="dot-fill" style={[m(7)]} size={10} color="#364152" />
                                <Text style={[c('#364152'), fw400, fs12]}>
                                    A go-to destination that caters to all your jewelry desires, offering a wide range of pieces to elevate your individual style and essential accessories.
                                </Text>
                            </View>

                            <View style={[flex, gap(7),]}>
                                <Octicons name="dot-fill" style={[m(7)]} size={10} color="#364152" />
                                <Text style={[c('#364152'), fw400, fs12]}>
                                    A go-to destination that caters to all your jewelry desires, offering a wide range of pieces to elevate your individual style and essential accessories.
                                </Text>
                            </View>

                            <View style={[flex, gap(7),]}>
                                <Octicons name="dot-fill" style={[m(7)]} size={10} color="#364152" />
                                <Text style={[c('#364152'), fw400, fs12]}>
                                    A go-to destination that caters to all your jewelry desires, offering a wide range of pieces to elevate your individual style and essential accessories.
                                </Text>
                            </View>

                            <Text style={[c('#364152'), fw400, fs12]}>
                                Learn how to design your mobile pp and website for different screen size and platforms and what you will learn are
                            </Text>
                        </View>

                    </LinearGradient>

                    <View style={[bg('white'), px(10), mb(120)]}>
                        <TouchableOpacity style={[mt(20), mx('auto')]}>
                            <Text style={[fw600, fs14, c('#21B8ED')]}>Learn more</Text>
                        </TouchableOpacity>

                        {/* //!Tab bar */}
                        <View style={[wFull, h(32), flex, justifyBetween, gap(10), mt(20)]}>
                            {[
                                'All', 'Downloads', 'Downloading'
                            ].map((item, index) => (
                                <View style={[w('33.33%'), hFull, flex, itemsCenter, justifyCenter, sTab === item ? { ...borderB(1, '#00BF63'), ...c('#00BF63') } : { ...c('#364152') }]} key={index}>
                                    <Text onPress={() => setSTab(item as STab)} style={[pt(3), fw600, index === 0 ? { ...c('#00BF63') } : { ...c('#364152') }]} >{item}</Text>
                                </View>
                            ))}
                        </View>
                        {/* //!Tab bar */}

                        <View style={[flexCol, gap(15), mt(20)]}>

                            {/* //!Week 1 */}
                            <TouchableOpacity style={[flexCol, gap(10)]}>
                                <View style={[flexCol, gap(8), pt(16), borderT(1, '#EAECF0')]}>
                                    <View style={[flex, itemsCenter, justifyBetween]}>
                                        <Text style={[fw400, fs(13), c('#364152')]}>Week 1</Text>
                                        <Entypo onPress={() => setActiveAcordionIndex((prev) => prev == 0 ? 1 : 0)} name="chevron-down" size={24} color="#00BF63" />
                                    </View>
                                    <Text style={[fw700, fs(14), c('#364152')]}>Introducing user experience design</Text>
                                </View>

                                {activeAcordionIndex == 0 && <View style={[flexCol, gap(18)]}>
                                    {[
                                        {
                                            icon: <SimpleLineIcons name="screen-desktop" size={24} color="#D0D5DD" />,
                                            titles: ['Introduction to course :Build', 'wireframe and low-Fidelity', 'Prototypes'],
                                            subTitle: 'Video - 2mins'
                                        },
                                        {
                                            icon: <SimpleLineIcons name="screen-desktop" size={24} color="#D0D5DD" />,
                                            titles: ['Introduction to course :Build', 'wireframe and low-Fidelity', 'Prototypes'],
                                            subTitle: 'Video - 2mins'
                                        },
                                        {
                                            icon: <Ionicons name="book-outline" size={24} color="#D0D5DD" />,
                                            titles: ['Optional - Read this if you are', 'new to this course to get', 'familiar with the course'],
                                            subTitle: 'Reading - 20mins'
                                        },
                                        {
                                            icon: <SimpleLineIcons name="screen-desktop" size={24} color="#D0D5DD" />,
                                            titles: ['Introduction to course :Build', 'wireframe and low-Fidelity', 'Prototypes'],
                                            subTitle: 'Video - 2mins'
                                        },
                                    ].map(({ icon, subTitle, titles }, id) => (
                                        <TouchableOpacity onPress={() => {
                                            showBottomSheet([height * 0.8], <DegreeBottomSheet />)
                                            setFab((prev) => ({ ...prev, shown: !prev.shown }))
                                        }} style={[flex, gap(20), wFull]} key={id}>
                                            {icon}
                                            <View style={[flexCol, gap(7)]}>
                                                {titles.map((title, index) => (
                                                    <Text style={[fw500, fs12, c('#4B5565')]} key={index}>{title}</Text>
                                                ))}

                                                <Text style={[fw500, fs(8), c('#4B5565')]}>{subTitle}</Text>
                                            </View>
                                            <Feather style={[ml('auto')]} name="download-cloud" size={24} color="#00BF63" />
                                        </TouchableOpacity>
                                    ))}
                                </View>}

                                {/* //!10% */}
                                {activeAcordionIndex === 0 && (
                                    <View style={[flex, itemsCenter, justifyBetween]}>
                                        <View style={[w('90%'), h(8), bg('#EAECF0'), rounded(4),]}>
                                            <View style={[w('10%'), h(8), bg('#00AC59'), rounded(4),]} />
                                        </View>
                                        <Text style={[fw500, fs14, c('#344054')]}>10%</Text>
                                    </View>
                                )}
                                {/* //!10% */}

                            </TouchableOpacity>
                            {/* //!Week 1 */}

                            {/* //!Week2 */}
                            <TouchableOpacity style={[flexCol, gap(10)]}>
                                <View style={[flexCol, gap(8), pt(16), borderT(1, '#EAECF0')]}>
                                    <View style={[flex, itemsCenter, justifyBetween]}>
                                        <Text style={[fw400, fs(13), c('#364152')]}>Week 2</Text>
                                        <Entypo onPress={() => setActiveAcordionIndex((prev) => prev == 0 ? 1 : 0)} name="chevron-down" size={24} color="#00BF63" />
                                    </View>
                                    <Text style={[fw700, fs(14), c('#364152')]}>Introducing user experience design</Text>
                                </View>

                                {activeAcordionIndex == 1 && <View style={[flexCol, gap(18)]}>
                                    {[
                                        {
                                            icon: <AntDesign name="checkcircle" size={24} color="#00BF63" />,
                                            titles: ['Introduction to course :Build', 'wireframe and low-Fidelity', 'Prototypes'],
                                            subTitle: 'Video - 2mins',
                                            trailing: <Image style={[image.w(24), image.h(24), image.ml('auto')]} source={degree_images.trash} />
                                        },
                                        {
                                            icon: <SimpleLineIcons name="screen-desktop" size={24} color="#D0D5DD" />,
                                            titles: ['Introduction to course :Build', 'wireframe and low-Fidelity', 'Prototypes'],
                                            subTitle: 'Video - 2mins'
                                        },
                                        {
                                            icon: <Ionicons name="book-outline" size={24} color="#D0D5DD" />,
                                            titles: ['Optional - Read this if you are', 'new to this course to get', 'familiar with the course'],
                                            subTitle: 'Reading - 20mins'
                                        },
                                        {
                                            icon: <Ionicons name="book-outline" size={24} color="#D0D5DD" />,
                                            titles: ['Optional - Read this if you are', 'new to this course to get', 'familiar with the course'],
                                            subTitle: 'Reading - 20mins'
                                        },
                                        {
                                            icon: <Ionicons name="book-outline" size={24} color="#D0D5DD" />,
                                            titles: ['Optional - Read this if you are', 'new to this course to get', 'familiar with the course'],
                                            subTitle: 'Reading - 20mins'
                                        },
                                    ].map(({ icon, subTitle, titles, trailing }, id) => (
                                        <TouchableOpacity
                                            onPress={() => {
                                                showBottomSheet([height * 0.8], <DegreeBottomSheet />)
                                                setFab((prev) => ({ ...prev, shown: !prev.shown }))
                                            }}
                                            style={[flex, gap(20), wFull]} key={id}>
                                            {icon}
                                            <View style={[flexCol, gap(7)]}>
                                                {titles.map((title, index) => (
                                                    <Text style={[fw500, fs12, c('#4B5565')]} key={index}>{title}</Text>
                                                ))}

                                                <Text style={[fw500, fs(8), c('#4B5565')]}>{subTitle}</Text>
                                            </View>

                                            {trailing && (trailing)}

                                            {!trailing && <Feather style={[ml('auto')]} name="download-cloud" size={24} color="#00BF63" />}
                                        </TouchableOpacity>
                                    ))}
                                </View>}

                            </TouchableOpacity>
                            {/* //!Week2 */}

                        </View>

                    </View>

                </ScrollView>

                {/* //!Chat Modal */}
                {fab.open && (
                    <View style={[w(width), h(height), bg('gray'), absolute]}>
                        {!chatting && <View style={[w('100%'), h(height * 0.65), t(height * 0.02), absolute, bg('white')]}>
                            <View style={[wFull, h(113), bg('#00BF63'), rounded(4), px(10), pt(50)]}>
                                <Text style={[fw700, fs(24), colorWhite]}>Hi there!</Text>
                                <View style={[wFull, bg('white'), rounded(4), border(1, '#D9DBE4'), flexCenter, h(80)]}>
                                    <TouchableOpacity onPress={() => setChat((prev) => ({ ...prev, chatting: true }))} style={[w('80%'), h('70%'), rounded(4), flexCenter, gap(7), bg('#00BF63'), border(1, '#008F4A')]}>
                                        <Ionicons name="send-outline" size={24} color="white" />
                                        <Text style={[fw600, fs16, colorWhite]}>New conversion</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={[mt(60), bg('white'), border(1, '#D9DBE4'), rounded(4), p(10), flexCol, gap(10), w(width - 20), mx('auto')]}>
                                <Text style={[fw500, fs16, c('#364152')]}>Conversations</Text>
                                <View style={[flex, gap(10)]}>
                                    <Image source={degree_images.greenFillChat} />
                                    <View>
                                        <Text>Eduafri</Text>
                                        <Text>It seems like you have like were talk..</Text>
                                        <Text>August 20, 18 : 27</Text>
                                    </View>
                                </View>
                            </View>
                        </View>}

                        {chatting && (
                            <View style={[w('100%'), h(height * 0.65), t(height * 0.02), absolute, bg('white')]}>
                                <View style={[wFull, h('auto'), bg('#00BF63'), rounded(4), px(10), py(20), flex, gap(width / 3)]}>
                                    <Feather name="chevron-left" size={24} color="white" />

                                    <View style={[flexCol, gap(7)]}>
                                        <Image source={degree_images.greenFillChat} />

                                        <Text style={[fw600, fs16, colorWhite]}>Eduafri</Text>
                                        <Text style={[fw600, fs16, colorWhite]}>AI assistant</Text>
                                    </View>
                                </View>

                                <View style={[bg('white'), wFull, h(height * 0.5), px(10), py(25), flexCol, gap(30)]}>

                                    {/* !Sender */}
                                    <View style={[w('80%'), flex, gap(20)]}>
                                        <Image source={degree_images.greenFillChat} />
                                        <View style={[flexCol, gap(7)]}>
                                            <View style={[flex,]}>

                                                <Text style={[fw500, fs14, c('#364152')]}>Eduafri</Text>
                                                <Text style={[fw400, fs12, c('#364152')]}>Thursday 10:16am</Text>
                                            </View>
                                            <View style={[bg('#F2F4F7'), w('80%')]}>
                                                <Text style={[c('#364152')]}>
                                                    Welcome to our site, if you need help simply reply to this message, we are online and ready to help.
                                                </Text>
                                            </View>
                                        </View>

                                    </View>
                                    {/* !Sender */}

                                    {/* !Receiver */}
                                    <View style={[w('50%'), ml('auto'), flexCol, gap(7)]}>
                                        <View style={[flex, gap(10)]}>
                                            <Text style={[c('#364152'), fw500, fs12]}>You</Text>
                                            <Text style={[c('#364152'), fw400, fs12]}>Thursday 11:41am</Text>
                                        </View>

                                        <View style={[bg('#00BF63'), flexCol, gap(10), p(10), { borderTopLeftRadius: 8, borderBottomRightRadius: 8 }]}>
                                            <Text style={colorWhite}>Awesome! </Text>
                                            <Text style={colorWhite}>Thanks.</Text>
                                        </View>
                                    </View>
                                    {/* !Receiver */}

                                    <TextInput style={[mt('auto'), bg('white'), border(1, '#D9DBE4')]} />
                                </View>
                            </View>
                        )}
                    </View>
                )}
                {/* //!Chat Modal */}

                {/* //!FAB */}
                {fab.shown && <View style={[w(70), h(70), absolute, t(height * 0.7), r(10)]}>
                    {fab.open ? (
                        <TouchableOpacity onPress={() => {
                            setFab((prev) => ({ ...prev, open: false }))
                            setChat((prev) => ({ ...prev, chatting: false }))
                        }} style={[w(50), h(50), bg('#00BF63'), rounded('100%'), flexCenter]}>
                            <Ionicons name="close-outline" size={24} color="white" />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setFab((prev) => ({ ...prev, open: true }))} style={[wHFull, flexCenter]}>
                            <Image style={[image.w('100%'), image.h('100%'), { objectFit: 'contain' }]} source={degree_images.chatCta} />
                        </TouchableOpacity>
                    )}
                </View>}
                {/* //!FAB */}
            </View>
        </SafeScreen>
    )
}

export default Course;
import { bg, border, borderT, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd, justifyBetween, justifyCenter, justifyEnd, mb, mt, mx, p, pb, pl, pt, px, py, rounded, w, wFull, wHFull } from "@/utils/styles";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { course_images, index_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Link, router, useNavigation } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { c, fs, fs12, fs14, fs16, fw400, fw500, fw600, fw700 } from "@/utils/fontStyles";
import { Entypo } from "@expo/vector-icons";

function Course() {

    const { height } = Dimensions.get('window')

    return (
        <SafeScreen>
            <ScrollView>
                <LinearGradient
                    colors={['#EB912033', '#00BF6333', '#21B8ED33']}
                    style={[wFull, h(height * 0.73), flexCol, gap(10), pt(10), pb(30), mb(30), px(10), { overflow: 'visible', }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >

                    <Image source={snoop_images.snoop_img_8} style={[image.w('100%'), image.h(200)]} />

                    <View>
                        <Text style={[fw700, fs(20), c('#364152'),]}>
                            Figma UI/UX Design
                        </Text>
                        <Text style={[fw700, fs(20), c('#364152'),]}>
                            Essentials
                        </Text>
                    </View>

                    <View>
                        <Text style={[fw600, fs(12), c('#364152'),]}>
                            About this course
                        </Text>
                        <Text style={[fw400, fs(12), c('#364152'), w('80%')]}>
                            Learn how to design your mobile pp and website for different screen size and platforms
                        </Text>
                    </View>

                    <View style={[flex, gap(4), itemsCenter]}>
                        <Text style={[fw400, fs12, c('#364152')]}>4.8 (86)</Text>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <AntDesign name="star" size={10} color="#FFE500" key={index} />
                        ))}
                        <AntDesign name="star" size={10} color="white" />
                    </View>

                    <Text style={[fw400, fs12, c('#364152')]}>(765 ratings) 588 students</Text>

                    <View style={[flex, gap(5)]}>
                        <Text style={[fw600, fs14, c('#364152')]}>Created by </Text>
                        <Text style={[fw600, fs14, c('#00BF63')]}>Samad Opabode</Text>
                    </View>

                    <View style={[flexCol, gap(8)]}>
                        <View style={[flex, gap(8), itemsCenter]}>
                            <Feather name="info" size={16} color="black" />
                            <Text style={[fw400, fs12, c('#364152')]}>Last updated- 8th Septermber,2024</Text>
                        </View>
                        <View style={[flex, gap(8), itemsCenter]}>
                            <Feather name="globe" size={16} color="black" />
                            <Text style={[fw400, fs12, c('#364152'), w('65%')]}>
                                Taught in English
                                Closed Caption available in : English, French, Swahili, Hausa, Arabic
                            </Text>
                        </View>
                        <View style={[flex, gap(8), itemsCenter]}>
                            <Image style={[image.w(16), image.h(16)]} source={course_images.chart} />
                            <Text style={[fw400, fs12, c('#364152')]}>
                                Beginner Level
                                No prior Knowledge needed
                            </Text>
                        </View>
                    </View>

                    <View style={[flexCol, gap(8), mt(35)]}>
                        <Text style={[fw600, fs14, c('#364152')]}>Skills You will Gain</Text>

                        <View style={[flex, w('65%'), gap(7), { flexWrap: 'wrap' }]}>
                            {[
                                'User interface design', 'Empathy', 'Prototying', 'User experience design', 'Wireframing', 'UX Research'
                            ].map((skill, index) => (
                                <TouchableOpacity style={[bg('#E7F0F5'), rounded(4), p(10)]} key={index}>
                                    <Text style={[fw600, fs12, c('#697586')]}>{skill}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                </LinearGradient>

                <View style={[wFull, flexCol, gap(20), h('auto'), bg('white'), pt(30), px(10)]}>
                    <Text style={[w('70%'), fw600, fs14, c('#364152')]}>Syllabus : what you will learn in this course</Text>

                    <View style={[flexCol, gap(15)]}>
                        {[
                            'Introducing user experience design',
                            'Joining design sprint',
                            'Joining design sprint',
                        ].map((item, index) => (
                            <TouchableOpacity style={[flexCol, gap(8), pt(16), borderT(1, '#EAECF0')]} key={index}>
                                <View style={[flex, itemsCenter, justifyBetween]}>
                                    <Text style={[fw400, fs(13), c('#364152')]}>Week {index + 1}</Text>
                                    <Entypo name="chevron-down" size={24} color="#00BF63" />
                                </View>
                                <Text style={[fw700, fs(14), c('#364152')]}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={[flex, gap(7),]}>
                        <Text style={[fw600, fs14, c('#364152')]}>Instructor:</Text>
                        <Text style={[fw600, fs14, c('#00BF63')]}>Samad Opabode</Text>
                    </View>

                    <View style={[wFull, h('auto'), py(24), px(10), rounded(8), bg('#E7F0F5'), flexCol, gap(20), mt(15)]}>

                        {Array.from({ length: 3 }).map((_, index) => (
                            <View style={[flexCol, gap(15)]} key={index}>

                                <View style={[flex, gap(4), itemsCenter]}>
                                    <Text style={[fw700, fs16, c('#6A410E')]}>4.8 (86)</Text>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <AntDesign name="star" size={18} color="#6A410E" key={index} />
                                    ))}
                                    <AntDesign name="star" style={[{ shadowColor: '#6A410E', shadowRadius: 10 }]} size={18} color="white" key={index} />
                                </View>

                                {index == 0 && <Text style={[fw600, fs14, c('#364152')]}>Top Reviews</Text>}

                                <View style={[flexCol, gap(15), bg('white'), p(10), rounded(4), { shadowColor: '#0000004025', shadowRadius: 15 }]}>
                                    <View style={[flex, gap(4), itemsCenter]}>
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <AntDesign name="star" size={18} color="#6A410E" key={index} />
                                        ))}
                                        <AntDesign name="star" size={10} color="white" key={index} />

                                        <Text style={[fw400, fs16, c('black')]}>4.8</Text>
                                        <Text style={[fw400, fs16, c('#364152')]}>by SO</Text>
                                    </View>

                                    <Text style={[fw400, fs12, c('#364152')]}>
                                        the course is quite comprehensive, but the first two courses mainly focuses on what design is, not how to design. starting with a project would be more be affective and the course would be less boring
                                    </Text>
                                </View>
                            </View>
                        ))}

                    </View>

                    <View style={[wFull, h('auto'), py(24), rounded(10), bg('white'), flexCol, gap(20), mt(15)]}>
                        <Text style={[fw600, fs14, c('#364152')]}>Frequently asked questions</Text>

                        <View style={[flexCol, gap(15)]}>
                            {[
                                'Introducing user experience design',
                                'Joining design sprint',
                                'Joining design sprint',
                            ].map((item, index) => (
                                <TouchableOpacity style={[flex, justifyBetween, gap(8), pt(20), borderT(1, '#EAECF0')]} key={index}>
                                    <Text style={[fw700, fs(14), c('#364152')]}>{item}</Text>
                                    <Entypo name="chevron-down" size={24} color="#00BF63" />
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>


                </View>

                <View style={[flexCol, wFull, mb(120)]}>
                    <View style={[wFull, h(20), px(10), { overflow: 'hidden' }]}>
                        <View style={[wFull, h(50), border(1, '#D0D5DD'), pt(20), rounded(8)]}></View>
                    </View>

                    <TouchableOpacity style={[h(44), flex]}>
                        <Text style={[fs(32), c('#364152'), fw600, hFull, w('50%'), bg('white'), { textAlign: 'center' }]}>N5000.00</Text>
                        <Text style={[fs(32), c('white'), bg('#008F4A'), w('50%'), fw600, border(1, '#008F4A'), { textAlign: 'center' }]}>Enroll Now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeScreen>
    )
}

export default Course;
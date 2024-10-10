import { bg, border, flex, flexCenter, flexCol, gap, h, hFull, itemsCenter, itemsEnd, justifyBetween, justifyCenter, justifyEnd, mb, mt, p, pb, pl, px, py, rounded, w, wFull, wHFull } from "@/utils/styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { index_images, snoop_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Href, Link, router } from "expo-router";
// import { ScrollView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { c, fs, fs12, fs14, fs16, fw400, fw500, fw600, fw700 } from "@/utils/fontStyles";


function Snoop() {

    const { height, width } = Dimensions.get('window')

    return (
        <SafeScreen>
            <ScrollView contentContainerStyle={[wFull, flexCenter]}>
                <LinearGradient
                    colors={['#21B8ED33', '#ffffff20']}
                    style={[wHFull, flexCol, gap(30), pb(30)]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <Image source={snoop_images.snoop_img_0} style={[image.w('100%'), image.h(200)]} />

                    <View style={[flexCol, gap(10), px(10)]}>
                        <Text style={[fw700, fs(26), c('#384250')]}>Learning at your own pace</Text>

                        <Text style={[fw500, fs12, c('#4B5565')]}>Knowledge and skills for all (for now and future) </Text>
                    </View>

                    <View style={[flex, justifyBetween, itemsCenter, mt(10), px(10)]}>
                        <Text style={[fw600, fs(20), c('#384250')]}>Categories</Text>

                        <Text style={[fw600, fs(14), c('#00BF63')]}>See all</Text>
                    </View>

                    <View style={[flexCol, mt(10), px(10), gap(10)]}>
                        <ScrollView horizontal contentContainerStyle={[flex, flex, gap(5), h(40)]}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <TouchableOpacity style={[rounded(32), h(38), border(1, '#9DA4AE'), flexCenter, px(10)]} key={index}>
                                    <Text style={[fw600, fs12, c('#697586'),]}>Arts and humanities</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        <ScrollView horizontal contentContainerStyle={[flex, flex, gap(5), h(40)]}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <TouchableOpacity style={[rounded(32), h(38), border(1, '#9DA4AE'), flexCenter, px(10)]} key={index}>
                                    <Text style={[fw600, fs12, c('#697586'),]}>Arts and humanities</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {/* //!New Courses */}
                    <View style={[flex, justifyBetween, itemsCenter, mt(10), px(10)]}>
                        <View style={[flex, gap(5), itemsCenter]}>
                            <Text style={[fw600, fs(20), c('#384250')]}>New Courses on </Text>
                            <Text style={[fw600, fs(20), c('#00BF63')]}>EduAfrica</Text>
                        </View>

                        <Text style={[fw600, fs(14), c('#00BF63')]}>See all</Text>
                    </View>

                    <View style={[h(height * 0.3)]}>
                        <ScrollView horizontal contentContainerStyle={[flex, flex, gap(10), hFull, pl(10)]}>
                            {Array.from({ length: 7 }).map((_, index) => (
                                <TouchableOpacity onPress={() => router.push('/course/' as Href)} style={[hFull, w(width * 0.6),]} key={index}>
                                    <Image style={[image.w('100%'), image.h('50%'), image.rounded(4)]} source={snoop_images.snoop_img_8} />

                                    <View style={[h('50%'), flexCol, gap(3), justifyCenter, py(10)]}>
                                        <Text style={[fw600, fs14, c('#364152')]}>Figma UI/UX Design</Text>

                                        <Text style={[fw400, fs12, c('#364152')]}>Samad Opabode</Text>

                                        <View style={[flex, gap(4), itemsCenter]}>
                                            <Text style={[fw400, fs12, c('#364152')]}>4.8 (86)</Text>
                                            {Array.from({ length: 4 }).map((_, index) => (
                                                <AntDesign name="star" size={10} color="#FFE500" key={index} />
                                            ))}
                                        </View>

                                        <Text style={[fw600, fs16, c('#364152'), mt(10)]}>N5000.00</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    {/* //!New Courses */}

                    {/* //!Degree courses */}
                    <View style={[flex, justifyBetween, itemsCenter, mt(10), px(10)]}>
                        <Text style={[fw600, fs(20), c('#384250')]}>Earn Your Degree </Text>

                        <Text style={[fw600, fs(14), c('#00BF63')]}>See all</Text>
                    </View>

                    <View style={[h(height * 0.3)]}>
                        <ScrollView horizontal contentContainerStyle={[flex, flex, gap(10), hFull, pl(10)]}>
                            {Array.from({ length: 7 }).map((_, index) => (
                                <TouchableOpacity onPress={() => router.push('/course/' as Href)} style={[hFull, w(width * 0.6),]} key={index}>
                                    <Image style={[image.w('100%'), image.h('50%'), image.rounded(4)]} source={snoop_images.snoop_img_8} />

                                    <View style={[h('50%'), flexCol, gap(3), justifyCenter, py(10)]}>
                                        <Text style={[fw600, fs14, c('#364152')]}>Essentials</Text>

                                        <Text style={[fw400, fs12, c('#364152')]}>Samad Opabode</Text>

                                        <View style={[flex, gap(4), itemsCenter]}>
                                            <Text style={[fw400, fs12, c('#364152')]}>4.8 (86)</Text>
                                            {Array.from({ length: 4 }).map((_, index) => (
                                                <AntDesign name="star" size={10} color="#FFE500" key={index} />
                                            ))}
                                        </View>

                                        <Text style={[fw600, fs16, c('#364152'), mt(10)]}>N5000.00</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    {/* //!Degree courses */}

                    {/* //!Most popular courses */}
                    <View style={[flex, justifyBetween, itemsCenter, mt(10), px(10)]}>
                        <Text style={[fw600, fs(20), c('#384250')]}>Most Popular Courses </Text>

                        <Text style={[fw600, fs(14), c('#00BF63')]}>See all</Text>
                    </View>

                    <View style={[h(height * 0.3)]}>
                        <ScrollView horizontal contentContainerStyle={[flex, flex, gap(10), hFull, pl(10)]}>
                            {Array.from({ length: 7 }).map((_, index) => (
                                <TouchableOpacity onPress={() => router.push('/course/' as Href)} style={[hFull, w(width * 0.6),]} key={index}>
                                    <Image style={[image.w('100%'), image.h('50%'), image.rounded(4)]} source={snoop_images.snoop_img_8} />

                                    <View style={[h('50%'), flexCol, gap(3), justifyCenter, py(10)]}>
                                        <Text style={[fw600, fs14, c('#364152')]}>Essentials</Text>

                                        <Text style={[fw400, fs12, c('#364152')]}>Samad Opabode</Text>

                                        <View style={[flex, gap(4), itemsCenter]}>
                                            <Text style={[fw400, fs12, c('#364152')]}>4.8 (86)</Text>
                                            {Array.from({ length: 4 }).map((_, index) => (
                                                <AntDesign name="star" size={10} color="#FFE500" key={index} />
                                            ))}
                                        </View>

                                        <Text style={[fw600, fs16, c('#364152'), mt(10)]}>N5000.00</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    {/* //!Most popular courses */}

                    {/* //!Most popular certificates */}
                    <View style={[flex, justifyBetween, itemsCenter, mt(10), px(10)]}>
                        <Text style={[fw600, fs(20), c('#384250')]}>Most Popular Certificate </Text>

                        <Text style={[fw600, fs(14), c('#00BF63')]}>See all</Text>
                    </View>

                    <TouchableOpacity onPress={() => router.push('/course/' as Href)} style={[wFull, h(140), flex, justifyBetween, itemsCenter, , mt(10), px(10)]}>
                        <View style={[hFull, w('75%'), flexCol, gap(3), justifyCenter, py(10)]}>
                            <Text style={[fw600, fs14, c('#364152'), { lineHeight: 20 }]}>
                                Copywriting with Chatgpt: Produce
                                compelling copy to sell
                                E-commerce
                            </Text>

                            <Text style={[fw400, fs12, c('#364152')]}>EduAfrica Project course</Text>

                            <View style={[flex, gap(4), itemsCenter]}>
                                <Text style={[fw400, fs12, c('#364152')]}>4.8 (86)</Text>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <AntDesign name="star" size={10} color="#FFE500" key={index} />
                                ))}
                            </View>

                            <Text style={[fw600, fs16, c('#364152'), mt(10)]}>N5000.00</Text>
                        </View>

                        <Image style={[image.w('25%'), image.h('95%'), image.rounded(4)]} source={snoop_images.snoop_img_7} />
                    </TouchableOpacity>

                    <FlatBtn
                        text="Sign in"
                        style={{
                            container: [bg('#00BF63'), mb(50)]
                        }}
                    />

                </LinearGradient>
            </ScrollView>
        </SafeScreen>
    )
}

export default Snoop;
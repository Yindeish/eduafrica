import { bg, border, flex, flexCenter, flexCol, gap, h, itemsCenter, itemsEnd, justifyCenter, justifyEnd, mb, mt, my, pb, pl, px, rounded, w, wFull, wHFull } from "@/utils/styles";
import { Image, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { index_images, signup_later_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Href, Link, router } from "expo-router";
import { c, colorBlack, fs, fs12, fs14, fs16, fw500, fw600, fw700 } from "@/utils/fontStyles";
import CtaBtn from "@/components/shared/ctaBtn";

function SingupLater() {


    return (
        <SafeScreen>
            <View style={[wHFull, flexCenter]}>
                <LinearGradient
                    colors={['#21B8ED33', '#ffffff20']}
                    style={[wHFull, flexCol, gap(30), pb(30)]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >

                    <Text style={[fs16, fw600, c('#00AC59'), mt(24), pl(10)]}>Sign up later</Text>

                    <Image style={[image.w('100%')]} source={signup_later_images.signup_later} />

                    <View style={[flexCol, gap(20), itemsCenter, mt(150), px(10)]}>
                        <Text style={[fw700, fs(24), c('#384250')]}>Create account</Text>

                        <FlatBtn
                            onPress={() => router.push('/(home)/' as Href)}
                            text="Continue with email"
                            style={{
                                container: [bg('#008F4A')]
                            }}
                        />

                        <View style={[h('auto'), w('90%'), flex, itemsCenter, justifyCenter, px(10), my(10)]}>
                            <View style={[wFull, h(1), bg('#D4DBE0')]}></View>

                            <Text style={[fs14, fw500, c('#D4DBE0')]}>OR</Text>

                            <View style={[wFull, h(1), bg('#D4DBE0')]}></View>
                        </View>

                        <TouchableOpacity onPress={() => router.push('/(home)/' as Href)} style={[wFull, h(44), rounded(8), flexCenter, bg('white'), gap(12), { shadowColor: '#1018280D5', shadowRadius: 2 },]}>
                            <Image source={signup_later_images.google} />
                            <Text style={[fw600, fs16,]}>Continue with Google</Text>
                        </TouchableOpacity>

                        <View style={[flexCol, itemsCenter, gap(5)]}>
                            <Text style={[fw500, fs12, c('#727475')]}>By Proceeding, you agree to EduAfrica <Text style={[fw700, fs12, c('#727475')]}>Terms of</Text></Text>
                            <Text style={[fw500, fs12, c('#727475')]}> <Text style={[fw700, fs12, c('#727475')]}>services</Text> and policy <Text style={[fw700, fs12, c('#727475')]}>privacy</Text></Text>
                        </View>

                        <View style={[flex, gap(3), flexCenter, mb(30)]}>
                            <Text style={[fw500, fs12, c('#727475')]}>Have an account?</Text>
                            <Link href={'/(home)/' as Href} style={[c('#00BF63')]}>Sign in</Link>
                        </View>

                    </View>

                </LinearGradient>
            </View>
        </SafeScreen>
    )
}

export default SingupLater;
import { bg, border, flex, flexCenter, flexCol, gap, h, itemsEnd, justifyEnd, mb, pb, px, rounded, w, wFull, wHFull } from "@/utils/styles";
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { index_images } from "@/constants/images";
import SafeScreen from "@/components/shared/safeScreen";
import { image } from "@/utils/imageStyles";
import FlatBtn from "@/components/shared/flatBtn";
import { Href, Link, router } from "expo-router";
import { colorBlack, fs, fw700 } from "@/utils/fontStyles";

function Index() {


    return (
        <SafeScreen>
            <View style={[wHFull, bg('red'), flexCenter]}>
                <LinearGradient
                    colors={['#F9E4CC', '#00BF63']}
                    style={[wHFull, flex, itemsEnd, justifyEnd, px(10), pb(30)]}
                >

                    <View style={[wFull, h('auto'), flexCol, gap(30)]}>
                        <Image style={[image.w(175), image.h(135), image.mx('auto')]} source={index_images.edu_africa_logo} />

                        <View style={[w('auto'), flexCenter, flexCol]}>
                            <Text style={[fw700, fs(24)]}>A classical Education for</Text>
                            <Text style={[fw700, fs(24)]}>your future accessible</Text>
                            <Text style={[fw700, fs(24)]}>anywhere, anytime</Text>
                        </View>

                        <FlatBtn
                            onPress={() => router.push('/signup_later' as Href)}
                            text="I'm new here"
                            style={{
                                container: [bg('white'), h(44), rounded(8), border(1, '#D0D5DD')],
                                text: [colorBlack]
                            }}
                        />

                        <FlatBtn
                            onPress={() => router.push('/(home)/' as Href)}
                            text="I have an account"
                            style={{ container: [bg('#008F4A'), h(44), rounded(8),] }}
                        />

                        <View style={[flex, gap(3), flexCenter, mb(30)]}>
                            <Text>Are you an instructor or organization?</Text>
                            <Link href={'/(home)/' as Href}>Go here</Link>
                        </View>
                    </View>

                </LinearGradient>
            </View>
        </SafeScreen>
    )
}

export default Index;
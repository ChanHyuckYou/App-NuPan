import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Frame3 = () => {
    return (
        <View style={styles.view}>
            <View style={styles.view1}>
                <View style={[styles.child, styles.itemBorder]} />
                <Text style={[styles.text, styles.textTypo4]}>합계</Text>
                <Text style={[styles.text1, styles.textTypo4]}>15,000₩</Text>
            </View>
            <View style={[styles.view2, styles.viewPosition]}>
                <View style={[styles.view3, styles.viewLayout1]}>
                    <View style={[styles.item, styles.viewLayout1]} />
                    <Text style={[styles.text2, styles.textTypo3]}>메뉴4 이름</Text>
                    <Text style={[styles.text3, styles.textTypo1]}>7,000₩</Text>
                </View>
                <View style={[styles.view4, styles.viewLayout1]}>
                    <View style={[styles.item, styles.viewLayout1]} />
                    <Text style={[styles.text2, styles.textTypo3]}>메뉴6 이름</Text>
                    <Text style={[styles.text5, styles.textTypo1]}>8,000₩</Text>
                </View>
                <Text style={[styles.text6, styles.textPosition]}>주문완료된 메뉴</Text>
            </View>
            <View style={[styles.view5, styles.viewPosition]}>
                <View style={[styles.view6, styles.viewLayout]}>
                    <View style={[styles.rectangleView, styles.viewLayout]} />
                    <View style={styles.child1} />
                    <Text style={[styles.text7, styles.textTypo2]}>메뉴2 이름</Text>
                    <Text style={[styles.text8, styles.textTypo2]}>7,000₩</Text>
                </View>
                <View style={[styles.view7, styles.viewLayout]}>
                    <View style={[styles.rectangleView, styles.viewLayout]} />
                    <View style={styles.child1} />
                    <Text style={[styles.text7, styles.textTypo2]}>메뉴1 이름</Text>
                    <Text style={[styles.text8, styles.textTypo2]}>8,000₩</Text>
                </View>
                <Text style={[styles.text11, styles.textPosition]}>선택한 메뉴</Text>
            </View>
            <View style={styles.view8Position}>
                <View style={[styles.child4, styles.view8Position]} />
                <Text style={[styles.text12, styles.textClr]}>주문현황</Text>
                <Image
                    style={styles.epbackIcon}
                    contentFit="cover"
                    source={require("../assets/ep_back.png")}
                />
            </View>
            <Text style={[styles.text13, styles.textTypo]}>결제완료</Text>
            <Text style={[styles.text14, styles.textTypo]}>추후결제</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    itemBorder: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    textTypo4: {
        height: 29,
        fontSize: FontSize.size_6xl,
        top: 9,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    viewPosition: {
        width: 360,
        left: 0,
        position: "absolute",
    },
    viewLayout1: {
        height: 52,
        width: 360,
        left: 0,
        position: "absolute",
    },
    textTypo3: {
        fontFamily: FontFamily.interRegular,
        top: 12,
        height: 29,
    },
    textTypo1: {
        height: 23,
        width: 86,
        left: 185,
        fontSize: FontSize.size_xl,
        textAlign: "center",
        color: Color.colorBlack,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
        position: "absolute",
    },
    textPosition: {
        left: 14,
        height: 23,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.interRegular,
        color: Color.colorBlack,
        top: 0,
        position: "absolute",
    },
    viewLayout: {
        height: 100,
        width: 360,
        left: 0,
        position: "absolute",
    },
    textTypo2: {
        fontSize: FontSize.size_xl,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    view8Position: {
        height: 70,
        width: 360,
        left: 0,
        top: 0,
        position: "absolute",
    },
    textClr: {
        color: Color.colorBlack,
        textAlign: "center",
        position: "absolute",
    },
    textTypo: {
        height: 21,
        width: 64,
        fontFamily: FontFamily.interLight,
        fontWeight: "300",
        fontSize: FontSize.size_mid,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    child: {
        left: 0,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        top: 0,
        height: 47,
        width: 359,
        position: "absolute",
    },
    text: {
        left: 6,
        width: 85,
    },
    text1: {
        left: 237,
        width: 119,
    },
    view1: {
        top: 400,
        left: 1,
        height: 47,
        width: 359,
        position: "absolute",
    },
    item: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    text2: {
        left: 15,
        fontSize: FontSize.size_5xl,
        width: 116,
        textAlign: "center",
        color: Color.colorBlack,
        position: "absolute",
    },
    text3: {
        top: 15,
    },
    view3: {
        top: 36,
    },
    text5: {
        top: 12,
        height: 23,
        width: 86,
        left: 185,
    },
    view4: {
        top: 88,
    },
    text6: {
        width: 139,
        textAlign: "center",
    },
    view2: {
        top: 512,
        height: 140,
    },
    rectangleView: {
        borderWidth: 1,
        borderColor: Color.colorBlack,
        borderStyle: "solid",
        top: 0,
        backgroundColor: Color.colorWhite,
    },
    child1: {
        top: 10,
        left: 18,
        backgroundColor: Color.colorGainsboro,
        width: 107,
        height: 80,
        position: "absolute",
    },
    text7: {
        left: 164,
        width: 158,
        fontFamily: FontFamily.interRegular,
        top: 12,
        height: 29,
    },
    text8: {
        top: 59,
        left: 259,
        width: 98,
        height: 31,
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    view6: {
        top: 136,
    },
    view7: {
        top: 36,
    },
    text11: {
        textAlign: "left",
        width: 105,
    },
    view5: {
        top: 147,
        height: 236,
    },
    child4: {
        backgroundColor: Color.colorOrangered,
    },
    text12: {
        top: 14,
        left: 45,
        fontSize: FontSize.size_11xl,
        width: 270,
        height: 56,
        textAlign: "center",
        fontFamily: FontFamily.interSemiBold,
        fontWeight: "600",
    },
    epbackIcon: {
        top: 20,
        left: 23,
        width: 30,
        height: 30,
        position: "absolute",
        overflow: "hidden",
    },
    text13: {
        top: 564,
        left: 283,
    },
    text14: {
        top: 612,
        left: 282,
    },
    view: {
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        backgroundColor: Color.colorWhite,
    },
});

export default Frame3;

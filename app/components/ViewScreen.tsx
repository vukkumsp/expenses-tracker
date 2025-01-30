import { Link } from "expo-router";
import React, { ReactNode } from "react";
import BackButton from "@/app/components/BackButton";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { ProfileIcon } from "@/app/utils/IconComponents";

// Define props type
interface CustomComponentProps {
  header: ReactNode;
  children: ReactNode; // ReactNode allows passing any valid React content
  footer: ReactNode;
  isBackNeeded?: boolean;
}

const ViewScreen: React.FC<CustomComponentProps> = ({ header, children, footer, isBackNeeded = true }) => {

  return (

    <View style={styles.wholeContent}>
      <View style={styles.content}>
        <View style={styles.header}>
          {isBackNeeded ? <View style={styles.backButton}><BackButton /></View> : <></>}
          <Text style={styles.headerText}>
            {header}
          </Text>
          <Link href={"./Profile"}>
            <ProfileIcon />
          </Link>
        </View>
        <View style={styles.scrollContent}>
          {children}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {footer}
          </Text>
        </View>
      </View>
      <ImageBackground source={require('@/assets/images/partial-logo.png')}
        resizeMode='contain'
        style={styles.bgImage} ></ImageBackground>
    </View>

  );
}

export default ViewScreen;

const styles = StyleSheet.create({
  header: {
    height: '10%',
    // backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    // backgroundColor: '#ffffff',
    // justifyContent: 'center',
    alignItems: 'center',
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
  },
  headerText: {
    color: '#333',
    fontSize: 16,
  },
  bgImage: {
    position: "absolute",
    bottom: -350,
    width: '100%',
    height: "100%", // Adjust the height of the background image
    // maxWidth: 'auto',
    zIndex: -1,
    backgroundColor: '#ffffff'
  },
  wholeContent:{
    backgroundColor: '#ffffff',
    zIndex: -2
  },
  content: {
    height: '100%',
    // backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 10,
    // borderWidth: 1,
    width: '100%',
    height: '70%',
    margin: 0
  },
  backButton: {
    // padding: 10,
    // alignSelf: 'flex-end',
  },
  footer: {
    height: '10%',
    // backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderTopWidth: 1,
    // borderTopColor: '#ddd',
  },
  footerText: {
    color: '#333',
    fontSize: 16,
  },
});
import { Link } from "expo-router";
import React, { ReactNode } from "react";
import BackButton from "@/components/BackButton";
import { ScrollView, StyleSheet, Text, View } from "react-native";

// Define props type
interface CustomComponentProps {
    header: ReactNode;
    children: ReactNode; // ReactNode allows passing any valid React content
    footer: ReactNode;
    isBackNeeded?: boolean;
}

const ViewScreen: React.FC<CustomComponentProps> = ({header, children, footer, isBackNeeded=true}) => {
  
  return (
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {header}
          </Text>
        </View>
        <View style={styles.scrollContent}>
          {children}
          {isBackNeeded?<BackButton />:<></>}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {footer}
          </Text>
        </View>
      </View>
    );
}

export default ViewScreen;

const styles = StyleSheet.create({
    header:{
        height: '10%',
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    headerText: {
        color: '#333',
        fontSize: 16,
    },
    content: {
        height: '100%'
    },
    scrollContent: {
        flexGrow: 1,
        padding: 10,
        borderWidth: 1,
        width: '100%',
        height: '70%',
        margin: 0
    },
    footer: {
        height: '10%',
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerText: {
        color: '#333',
        fontSize: 16,
    },
});
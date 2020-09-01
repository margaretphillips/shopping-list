import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'


const Img = ({ source }) => {
    return (
        <View style={styles.imgContainer}>
            <Image source={{ uri: source }}
                style={styles.img} />
        </View>
    )
}

Img.defaultProps = {
    source: 'https://randomuser.me/api/portraits/men/1.jpg'
}


const styles = StyleSheet.create({
    imgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2
    }
})

export default Img;
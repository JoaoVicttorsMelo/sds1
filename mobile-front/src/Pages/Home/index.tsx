import React from 'react';
import { Text, StyleSheet, Image, View, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome as Icon } from '@expo/vector-icons';
import Header from '../../components/Header'
const Home = () => {
    const handleOnPress = () => {
        Alert.alert('Você clicou no botão');
    }
    return (
        <>
            <Header />

            <View style={styles.container}>
                <Image
                    source={require('../../assets/GAMER.png')}
                    style={styles.gamerImage} />
                <Text style={styles.title}>
                    Vote Agora!
            </Text>
                <Text style={styles.subTitle}>
                    Nos diga seu jogo favorito!
            </Text>
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>
                        Coletar Dados
                                </Text>

                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="chevron-right" color='#FFF' size={25} />
                        </Text>
                    </View>

                </RectButton>
            </View>
        </>
    )
};
const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        backgroundColor: '#0B1F34',
        alignItems: 'center',
    },
    gamerImage: {
        width: 309,
        height: 288
    },
    title: {
        color: '#00D4FF',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 31,
        fontFamily: "Play_700Bold",
    },
    subTitle: {
        color: '#ED7947',
        fontSize: 21,
        marginTop: 15,
        fontFamily: "Play_400Regular",
    },
    footer: {
        marginTop: '15%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        borderRadius: 10
    },
    buttonIcon: {
        backgroundColor: '#ED7947',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0B1F34',
    }
})

export default Home;
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/AntDesign'

export default function ProgramScreen_S4() {
    return (
        <View>
            <Text style={styles.titleText}>
                Fillter by programs
            </Text>
            <Text style={styles.subTitleText}>
                Get a degree or certificate with edX online
            </Text>
            <Pressable style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/assets/program1.jpg" }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Master's program</Text>
                    <Text style={styles.subtext}>
                        <Text>Earn a{' '}</Text>
                        <Text style={{ fontWeight: 'bold' }}>full master's{' '}</Text>
                        <Text>degree from top-ranked university</Text>
                    </Text>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Graduate-level</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Master's Degree</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Affordable & flexible</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/assets/program02.jpg" }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>MicroMaster's Program</Text>
                    <Text style={styles.subtext}>
                        <Text style={{ fontWeight: 'bold' }}>Start your master's{' '}</Text>
                        <Text>degree and advance your career</Text>
                    </Text>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Graduate-level</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Degree path</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Affordable & flexible</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/assets/program03.jpg" }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>MicroBachelor's Program</Text>
                    <Text style={styles.subtext}>
                        <Text style={{ fontWeight: 'bold' }}>Start your bachelor's{' '}</Text>
                        <Text>degree</Text>
                    </Text>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Undergraduate-level</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Degree path</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Career advancement</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/assets/program04.jpg" }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Professional Certificate</Text>
                    <Text style={styles.subtext}>
                        <Text>Learn{' '}</Text>
                        <Text style={{ fontWeight: 'bold' }}>career-relevant{' '}</Text>
                        <Text>skills and stand out at work</Text>
                    </Text>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>In-demand career skills</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>edX certificate</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Career advancement</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
            <Pressable style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: "https://raw.githubusercontent.com/Munggon221133/mobile-app-edx/main/assets/program05.jpg" }}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>X-Series Program</Text>
                    <Text style={styles.subtext}>
                        <Text>Explore{' '}</Text>
                        <Text style={{ fontWeight: 'bold' }}>popular topics{' '}</Text>
                        <Text>and earn an edX certificate</Text>
                    </Text>
                    <View style={{ marginTop: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Popular topics</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>edX certificate</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons name="check" size={20} color="cyan" style={{ marginLeft: 10 }} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Life-long learning</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 39,
        color: '#04242c',
        marginTop: 30,
        marginHorizontal: 15,
        fontWeight: '700',
    },
    subTitleText: {
        fontSize: 25,
        color: '#04242c',
        marginLeft: 15,
        fontWeight: '700',
        marginTop: 15,
    },
    container: {
        marginHorizontal: 15,
        marginTop: 20,
        height: 230,
        elevation: 3,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 420,
        height: 200,
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        buttom: 0,
        right: 0,
        left: 0,
        height: 200,
        backgroundColor: '#04242c',
        paddingHorizontal: 20,
        marginTop: 30,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        marginTop: 15,
        marginHorizontal: 10,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white'
    },
    subtext: {
        color: 'white',
        marginTop: 15,
        marginHorizontal: 10,
    },
})
import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Image } from 'react-native'
import { Card, CardItem, Body } from 'native-base';
import bloodDonorChart from '../../../Image/Blood_Donors_Chart.jpg';

const BloodTypes = (props) => {
    return (
        <SafeAreaView style={styles.maniContainer}>
            <ScrollView style={{padding: 20}} persistentScrollbar={true}>
                <View style={styles.one}>
                    <Text style={{ fontFamily: 'Lato-Regular' }}>Blood types are determined by the presence or absence of certain antigens –
                    substances that can trigger an immune response if they are foreign to the body.
                    Since some antigens can trigger a patient's immune system to attack the transfused blood,
                    safe blood transfusions depend on careful blood typing and cross-matching.{'\n'}</Text>
                    <Text style={{ fontFamily: 'Lato-Regular' }}>There are four major blood groups determined by
                    the presence or absence of two antigens – A and B – on the surface of red blood cells. In addition
                    to the A and B antigens, there is a protein called the Rh factor, which can be either present (+)
                    or absent (–), creating the 8 most common blood types (A+, A-,  B+, B-,  O+, O-,  AB+, AB-).</Text>
                </View>
                <View style={styles.two}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '700', fontSize: 30 }}>The ABO system</Text>
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '400', fontSize: 15, marginTop: 5 }}>There are 4 main blood groups defined by the ABO system:</Text>

                    <View style={{ padding: 15 }}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        blood group A – has A antigens on the red blood cells with anti-B antibodies in the plasma
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        blood group B – has B antigens with anti-A antibodies in the plasma
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        blood group O – has no antigens, but both anti-A and anti-B antibodies in the plasma
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        blood group AB – has both A and B antigens, but no antibodies
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                    <Text>
                        Blood group O is the most common blood group. Almost half of the UK population (48%) has blood group O.{'\n'}{'\n'}
                        Receiving blood from the wrong ABO group can be life threatening. For example, if someone with group B blood is given group A blood, their anti-A antibodies will attack the group A cells.{'\n'}{'\n'}
                        This is why group A blood must never be given to someone who has group B blood and vice versa.{'\n'}{'\n'}
                        As group O red blood cells do not have any A or B antigens, it can safely be given to any other group.{'\n'}{'\n'}
                        The NHS Blood and Transplant (NHSBT) website has more information about the different blood groups.{'\n'}
                    </Text>
                </View>
                <View style={styles.two}>
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '700', fontSize: 30 }}>The Rh system{'\n'}</Text>
                    <Text>
                        Red blood cells sometimes have another antigen, a protein known as the RhD antigen.
                        If this is present, your blood group is RhD positive. If it's absent, your blood group is RhD negative.{'\n'}{'\n'}
                    </Text>
                    <Text>
                        This means you can be 1 of 8 blood groups:{'\n'}
                    </Text>
                    <View style={{ padding: 15 }}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        A RhD positive (A+)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        A RhD negative (A-)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        B RhD positive (B+)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        B RhD negative (B-)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        O RhD positive (O+)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        O RhD negative (O-)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        AB RhD positive (AB+)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>
                                        AB RhD negative (AB-)
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <Text>
                    {'\n'}
                        About 85% of the UK population is RhD positive (36% of the population has O+, the most common type).{'\n'}{'\n'}
                        In most cases, O RhD negative blood (O-) can safely be given to anyone. It's often used in medical emergencies when the blood type is not immediately known.{'\n'}{'\n'}
                        It's safe for most recipients because it does not have any A, B or RhD antigens on the surface of the cells, and is compatible with every other ABO and RhD blood group.{'\n'}{'\n'}
                        The NHS Blood and Transplant (NHSBT) website has more information about the Rh system.{'\n'}{'\n'}
                    </Text>
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '700', fontSize: 30 }}>Blood Types and Transfusion{'\n'}</Text>
                    <Text style={{ fontFamily: 'Lato-Regular', fontWeight: '300', fontSize: 15, marginTop: 10 }}>Each year 4.5 million lives are saved by blood transfusions.</Text>
                    <Text>
                        There are very specific ways in which blood types must be matched for a safe transfusion. The right blood transfusion can mean the difference between life and death.
                        Every 2 seconds someone in the US needs a blood transfusion.{'\n'}{'\n'}
                        Use the interactive graphic below to learn more about matching blood types for transfusions.{'\n'}{'\n'}
                        Also, Rh-negative blood is given to Rh-negative patients, and Rh-positive or Rh-negative blood may be given to Rh-positive patients. The rules for plasma are the reverse.{'\n'}{'\n'}
                    </Text>
                </View>
                <View>
                    <Image style={{ width: 350, height: 200 }} source={bloodDonorChart} />
                </View>
                <Text>{'\n'}{'\n'}</Text>
            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    maniContainer: {
        flex: 1,
    },
    one: {
        flex: 1,
    },
    two: {
        marginTop: 10,
    }

})

export default BloodTypes;

import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const Guest = () => {
    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)
    const [infents, setInfents] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Adult</Text>
                    <Text style={styles.description}>Age 13 or above</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setAdult(adult + 1)}

                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,marginHorizontal:20}}>{adult}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>  adult>0?setAdult(adult - 1):setAdult(0)}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Children</Text>
                    <Text style={styles.description}>Age 2-12</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setChildren(children + 1)}

                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,marginHorizontal:20}}>{children}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>  children>0?setChildren(children - 1):setChildren(0)}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>Infants</Text>
                    <Text style={styles.description}>Under 2</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setInfents(infents + 1)}

                    >
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:16,marginHorizontal:20}}>{infents}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>  infents>0?setInfents(infents - 1):setInfents(0)}
                    >
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

export default Guest

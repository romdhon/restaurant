import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Feather from '@expo/vector-icons/Feather'



function SearchBar({term, onSetTerm, onSubmitText}) {
  return (
    <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name='search' />
        <TextInput 
            style={styles.textInputStyle} 
            placeholder='Search' 
            autoCapitalize='none'
            autoCorrect={false}
            value={term}
            onChangeText={onSetTerm}
            onEndEditing={onSubmitText}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#dedede',
        height: 50,
        borderRadius: 12,
        marginHorizontal: 12,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginLeft: 6
    },
    textInputStyle: {
        marginHorizontal: 6,
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar
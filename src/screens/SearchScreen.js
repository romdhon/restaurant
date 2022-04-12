import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
import SearchBar from '../components/SearchBar';

function SearchScreen() {
    const [term, setTerm] = React.useState("");

    return (
        <SearchBar
            term={term}
            onSetTerm={setTerm}
            onSubmitText={() => console.log('End editting')}
        />
    )
}

export default SearchScreen
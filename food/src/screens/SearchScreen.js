import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResutsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errerMessage] = useResults();
   
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)} 
            />
            {errerMessage ? <Text>{errerMessage}</Text> : null}
            
            <ScrollView>
                <ResutsList   results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResutsList   results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResutsList   results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResutsList   results={filterResultsByPrice('$$$$')} title="Exclusive Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginLeft: 15
    }
});

export default SearchScreen;

import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

const picker = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("Java");
    return (
        <View>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue:any, itemIndex:number) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="Java" />
                <Picker.Item label="JavaScript" value="JavaScript" />
            </Picker>
            <Text>Selectes Language : {selectedLanguage}</Text>
        </View>
    )
}

export default picker
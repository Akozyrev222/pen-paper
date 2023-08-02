import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { ColorPicker, toHsv } from 'react-native-color-picker'

export const PickerColor = () => {


    const [color, setColor] = useState('');

    const onColorChange = (color: any) => {
        setColor( color )
    }

        return (
            <View style={{flex: 1, padding: 45, backgroundColor: '#212021'}}>
                <ColorPicker
                    onColorSelected={color => console.log(`Color selected: ${color}`)}
                   /* onOldColorSelected={color => alert(`Old color selected: ${color}`)}*/
                    style={{flex: 1}}
                />
            </View>
        )
    }


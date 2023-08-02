import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { useTheme } from '@/Hooks';
import ToggleSwitch from 'toggle-switch-react-native';

interface Props {
  name: string
  control: ControllerProps
  text: string
}

const Switch = (props: Props) => {
  const { Fonts, Gutters, Layout, Common, Colors} = useTheme()

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={[]}>
      <ToggleSwitch
        value={isEnabled}
        isOn={isEnabled}
        onColor={Colors.field}
        offColor={Colors.field}
        trackOnStyle={[ Common.backgroundSwitch ]}
        trackOffStyle={[ Common.backgroundSwitch ]}
        thumbOnStyle={[ Common.backgroundSwitchIconOn ]}
        thumbOffStyle={[ Common.backgroundSwitchIconOff ]}
//         labelStyle={{color: "black", fontWeight: "900" }}
        onToggle={() => setIsEnabled(isOn => !isOn)}
        animationSpeed={150}
      />
    </View>
  )
}


export default Switch
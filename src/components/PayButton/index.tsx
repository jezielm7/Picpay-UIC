/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, Label } from './styles';

interface PayButtonProps {
  onPress(): void;
  focused: boolean;
}

function PayButton({ onPress, focused }: PayButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#ccc']
            : ['#00fc6c', '#00ac4a']
        }
        startPoint={[1, 0.2]}
      >
        <Icon
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default PayButton;

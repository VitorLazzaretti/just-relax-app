import React from 'react';
import { IconContainer } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '../../contexts/theme';
import { StyleProp, ViewStyle } from 'react-native';

type IconMIProps = {
  name: keyof typeof MaterialIcons.glyphMap;
  size: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const IconMI: React.FC<IconMIProps> = ({
  color,
  name,
  size,
  style,
  onPress
}) => {
  const { theme } = useTheme();

  return (
    <IconContainer onPress={onPress} style={style}>
      <MaterialIcons name={name} size={size} color={color || theme.colors.icon} />
    </IconContainer>
  )
}


export default IconMI;
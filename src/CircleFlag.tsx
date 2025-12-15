import {
  Image,
  type ImageSourcePropType,
  type ImageStyle,
  type StyleProp,
} from 'react-native';

export interface CircleFlagProps {
  source: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ImageStyle>;
}

export function CircleFlag({ source, size = 32, style }: CircleFlagProps) {
  return (
    <Image
      source={source}
      style={[{ width: size, height: size, borderRadius: size / 2 }, style]}
    />
  );
}

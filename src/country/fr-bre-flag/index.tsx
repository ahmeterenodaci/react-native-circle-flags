import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FrBreFlagSource = require('./fr-bre.webp');

export default function FrBreFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FrBreFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NaFlagSource = require('./na.webp');

export default function NaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NaFlagSource} />;
}

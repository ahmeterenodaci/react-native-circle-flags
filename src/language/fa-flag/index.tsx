import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FaFlagSource = require('./fa.webp');

export default function FaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FaFlagSource} />;
}

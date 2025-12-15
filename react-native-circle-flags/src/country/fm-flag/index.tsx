import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FmFlagSource = require('./fm.webp');

export default function FmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FmFlagSource} />;
}

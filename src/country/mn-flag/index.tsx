import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MnFlagSource = require('./mn.webp');

export default function MnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MnFlagSource} />;
}

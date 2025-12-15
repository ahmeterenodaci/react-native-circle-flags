import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BoFlagSource = require('./bo.webp');

export default function BoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BoFlagSource} />;
}

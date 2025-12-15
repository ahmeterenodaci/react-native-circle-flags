import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SrFlagSource = require('./sr.webp');

export default function SrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SrFlagSource} />;
}

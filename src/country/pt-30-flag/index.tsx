import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const Pt30FlagSource = require('./pt-30.webp');

export default function Pt30Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={Pt30FlagSource} />;
}

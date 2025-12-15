import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PkJkFlagSource = require('./pk-jk.webp');

export default function PkJkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={PkJkFlagSource} />;
}

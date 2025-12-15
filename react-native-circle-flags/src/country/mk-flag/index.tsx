import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MkFlagSource = require('./mk.webp');

export default function MkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MkFlagSource} />;
}

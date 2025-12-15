import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MvFlagSource = require('./mv.webp');

export default function MvFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MvFlagSource} />;
}

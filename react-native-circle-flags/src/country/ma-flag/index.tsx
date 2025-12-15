import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MaFlagSource = require('./ma.webp');

export default function MaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MaFlagSource} />;
}

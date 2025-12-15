import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MiFlagSource = require('./mi.webp');

export default function MiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MiFlagSource} />;
}

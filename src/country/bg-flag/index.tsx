import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BgFlagSource = require('./bg.webp');

export default function BgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BgFlagSource} />;
}

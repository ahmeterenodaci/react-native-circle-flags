import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LvFlagSource = require('./lv.webp');

export default function LvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LvFlagSource} />;
}

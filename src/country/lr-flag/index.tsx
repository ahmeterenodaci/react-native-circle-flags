import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LrFlagSource = require('./lr.webp');

export default function LrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LrFlagSource} />;
}

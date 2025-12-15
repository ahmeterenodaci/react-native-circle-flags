import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ElFlagSource = require('./el.webp');

export default function ElFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ElFlagSource} />;
}

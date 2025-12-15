import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KgFlagSource = require('./kg.webp');

export default function KgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KgFlagSource} />;
}

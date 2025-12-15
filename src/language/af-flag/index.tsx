import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AfFlagSource = require('./af.webp');

export default function AfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AfFlagSource} />;
}

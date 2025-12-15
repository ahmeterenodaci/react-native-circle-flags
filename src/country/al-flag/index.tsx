import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AlFlagSource = require('./al.webp');

export default function AlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AlFlagSource} />;
}

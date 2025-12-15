import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InMnFlagSource = require('./in-mn.webp');

export default function InMnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={InMnFlagSource} />;
}

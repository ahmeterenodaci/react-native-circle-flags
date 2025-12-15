import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SlFlagSource = require('./sl.webp');

export default function SlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SlFlagSource} />;
}

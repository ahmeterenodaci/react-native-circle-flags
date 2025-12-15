import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const XxFlagSource = require('./xx.webp');

export default function XxFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={XxFlagSource} />;
}

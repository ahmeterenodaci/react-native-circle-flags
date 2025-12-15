import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ZhFlagSource = require('./zh.webp');

export default function ZhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ZhFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsInFlagSource = require('./us-in.webp');

export default function UsInFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsInFlagSource} />;
}

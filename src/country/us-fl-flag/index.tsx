import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsFlFlagSource = require('./us-fl.webp');

export default function UsFlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsFlFlagSource} />;
}

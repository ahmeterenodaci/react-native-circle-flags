import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsAkFlagSource = require('./us-ak.webp');

export default function UsAkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsAkFlagSource} />;
}

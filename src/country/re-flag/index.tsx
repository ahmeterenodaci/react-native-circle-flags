import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ReFlagSource = require('./re.webp');

export default function ReFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ReFlagSource} />;
}

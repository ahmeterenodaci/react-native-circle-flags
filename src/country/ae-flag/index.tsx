import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AeFlagSource = require('./ae.webp');

export default function AeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AeFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AvFlagSource = require('./av.webp');

export default function AvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AvFlagSource} />;
}

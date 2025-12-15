import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OmFlagSource = require('./om.webp');

export default function OmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={OmFlagSource} />;
}

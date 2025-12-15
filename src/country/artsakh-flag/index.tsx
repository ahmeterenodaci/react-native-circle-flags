import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ArtsakhFlagSource = require('./artsakh.webp');

export default function ArtsakhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ArtsakhFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UnFlagSource = require('./un.webp');

export default function UnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UnFlagSource} />;
}

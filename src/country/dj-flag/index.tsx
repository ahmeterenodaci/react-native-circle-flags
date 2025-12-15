import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DjFlagSource = require('./dj.webp');

export default function DjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={DjFlagSource} />;
}

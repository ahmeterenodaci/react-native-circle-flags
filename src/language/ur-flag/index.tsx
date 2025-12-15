import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UrFlagSource = require('./ur.webp');

export default function UrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UrFlagSource} />;
}

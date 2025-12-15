import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TcFlagSource = require('./tc.webp');

export default function TcFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TcFlagSource} />;
}

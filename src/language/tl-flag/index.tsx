import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TlFlagSource = require('./tl.webp');

export default function TlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TlFlagSource} />;
}

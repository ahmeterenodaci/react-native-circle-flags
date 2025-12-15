import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ZuFlagSource = require('./zu.webp');

export default function ZuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ZuFlagSource} />;
}

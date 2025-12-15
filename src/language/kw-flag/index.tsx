import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KwFlagSource = require('./kw.webp');

export default function KwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KwFlagSource} />;
}

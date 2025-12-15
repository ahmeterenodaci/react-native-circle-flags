import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CxFlagSource = require('./cx.webp');

export default function CxFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CxFlagSource} />;
}

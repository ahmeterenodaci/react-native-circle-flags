import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ChmFlagSource = require('./chm.webp');

export default function ChmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ChmFlagSource} />;
}

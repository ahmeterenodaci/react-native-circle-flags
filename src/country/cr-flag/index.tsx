import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CrFlagSource = require('./cr.webp');

export default function CrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CrFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PmsFlagSource = require('./pms.webp');

export default function PmsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PmsFlagSource} />;
}

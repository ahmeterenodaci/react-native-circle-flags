import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LtFlagSource = require('./lt.webp');

export default function LtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LtFlagSource} />;
}

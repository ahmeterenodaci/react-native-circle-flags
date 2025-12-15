import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AwFlagSource = require('./aw.webp');

export default function AwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AwFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RsFlagSource = require('./rs.webp');

export default function RsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RsFlagSource} />;
}

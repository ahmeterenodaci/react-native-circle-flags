import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MsFlagSource = require('./ms.webp');

export default function MsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MsFlagSource} />;
}

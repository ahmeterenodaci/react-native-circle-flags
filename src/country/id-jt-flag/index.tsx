import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IdJtFlagSource = require('./id-jt.webp');

export default function IdJtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IdJtFlagSource} />;
}

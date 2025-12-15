import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TtFlagSource = require('./tt.webp');

export default function TtFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TtFlagSource} />;
}

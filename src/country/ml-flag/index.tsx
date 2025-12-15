import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MlFlagSource = require('./ml.webp');

export default function MlFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MlFlagSource} />;
}

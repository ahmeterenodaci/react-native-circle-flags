import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OsFlagSource = require('./os.webp');

export default function OsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={OsFlagSource} />;
}

import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsFlagSource = require('./us.webp');

export default function UsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsFlagSource} />;
}

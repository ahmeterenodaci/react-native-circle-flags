import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MyFlagSource = require('./my.webp');

export default function MyFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MyFlagSource} />;
}

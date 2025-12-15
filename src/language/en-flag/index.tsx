import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnFlagSource = require('./en.webp');

export default function EnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnFlagSource} />;
}

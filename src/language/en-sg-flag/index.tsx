import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnSgFlagSource = require('./en-sg.webp');

export default function EnSgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnSgFlagSource} />;
}

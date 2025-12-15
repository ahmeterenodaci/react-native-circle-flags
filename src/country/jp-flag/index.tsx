import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JpFlagSource = require('./jp.webp');

export default function JpFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={JpFlagSource} />;
}

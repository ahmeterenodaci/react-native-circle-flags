import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const QaFlagSource = require('./qa.webp');

export default function QaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={QaFlagSource} />;
}

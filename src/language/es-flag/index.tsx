import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsFlagSource = require('./es.webp');

export default function EsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsFlagSource} />;
}

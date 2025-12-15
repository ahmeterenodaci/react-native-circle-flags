import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IrFlagSource = require('./ir.webp');

export default function IrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={IrFlagSource} />;
}

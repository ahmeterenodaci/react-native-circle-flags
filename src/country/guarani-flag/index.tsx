import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GuaraniFlagSource = require('./guarani.webp');

export default function GuaraniFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GuaraniFlagSource} />;
}

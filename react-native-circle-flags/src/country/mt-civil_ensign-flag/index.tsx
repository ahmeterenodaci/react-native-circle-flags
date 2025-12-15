import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MtCivilEnsignFlagSource = require('./mt-civil_ensign.webp');

export default function MtCivilEnsignFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MtCivilEnsignFlagSource} />;
}

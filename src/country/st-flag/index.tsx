import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const StFlagSource = require('./st.webp');

export default function StFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={StFlagSource} />;
}

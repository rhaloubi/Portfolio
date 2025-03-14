import { TiBatteryFull, TiBatteryHigh, TiBatteryMid, TiBatteryLow } from "react-icons/ti";
import { LuBatteryWarning } from "react-icons/lu";

interface BatteryIndicatorProps {
  messageCount: number;
}

export const BatteryIndicator = ({ messageCount }: BatteryIndicatorProps) => {
  const getBatteryIcon = () => {
    if (messageCount <= 2) return <TiBatteryFull className="h-5 w-7 mr-1 text-green-500" />;
    if (messageCount <= 4) return <TiBatteryHigh className="h-5 w-7 mr-1 text-green-400" />;
    if (messageCount <= 6) return <TiBatteryMid className="h-5 w-7 mr-1 text-yellow-500" />;
    if (messageCount <= 8) return <TiBatteryLow className="h-5 w-7 mr-1 text-orange-500" />;
    return <LuBatteryWarning className="h-5 w-7 mr-1 text-red-500" />;
  };

  return (
    <div className="flex items-center">
      {getBatteryIcon()}
    </div>
  );
};
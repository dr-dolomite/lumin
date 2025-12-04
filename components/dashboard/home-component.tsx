import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { TbArrowDownDashed, TbArrowUpDashed } from "react-icons/tb";
import {
  ArrowUpIcon,
  CardSimIcon,
  ChevronRightIcon,
  CircleChevronRightIcon,
  CircleDotDashedIcon,
  TrendingUpIcon,
} from "lucide-react";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import NetworkStatusComponent from "./network-status";
import DeviceStatus from "./device-status";
import LTEStatusComponent from "./lte-status";
import NrStatusComponent from "./nr-status";
import { SignalHistoryComponent } from "./signal-history";

const HomeComponent = () => {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-6 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-5">
      <div className="grid gap-4 @xl/main:col-span-3 @5xl/main:col-span-3 col-span-1 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs">
        <NetworkStatusComponent />
        <div className="grid grid-cols-1 @xl/main:grid-cols-2 @5xl/main:grid-cols-2 grid-flow-row gap-4 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs">
          <LTEStatusComponent />
          <NrStatusComponent />
        </div>
      </div>
      <div className="@xl/main:col-span-2 @5xl/main:col-span-2 col-span-1 h-full *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs *:data-[slot=card]:h-full">
        <DeviceStatus />
      </div>

      <div className="col-span-1 xl:col-span-5 *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs">
        <SignalHistoryComponent />
      </div>
    </div>
  );
};

export default HomeComponent;

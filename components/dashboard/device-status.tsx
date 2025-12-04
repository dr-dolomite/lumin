import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";

const DeviceStatus = () => {
  return (
    <Card className="@container/card col-span-2">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-center">
          Device Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="flex items-center justify-center mb-8">
            <div className="size-44 bg-primary/15 rounded-full p-4 flex items-center justify-center">
              <img
                src="/device-icon.svg"
                alt="Device Icon"
                className="size-full rounded-full drop-shadow-md"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Manufacturer
              </p>
              <p className="font-semibold xl:text-md text-sm">Quectel</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Model
              </p>
              <p className="font-semibold xl:text-md text-sm">RM551E-GL</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Firmware Version
              </p>
              <p className="font-semibold xl:text-md text-sm">RM551EGL00AAR01A04M8G</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Build Date
              </p>
              <p className="font-semibold xl:text-md text-sm">Jun 25 2025</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Device IMEI
              </p>
              <p className="font-semibold xl:text-md text-sm">866792052000123</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Running Time
              </p>
              <p className="font-semibold xl:text-md text-sm">5h 23m 32s</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <p className="font-semibold text-muted-foreground xl:text-md text-sm">
                Connection Uptime
              </p>
              <p className="font-semibold xl:text-md text-sm">5h 23m 32s</p>
            </div>
            <Separator />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceStatus;

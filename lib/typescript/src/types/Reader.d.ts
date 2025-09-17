import type { Location, LocationStatus, StripeError } from './';
export declare namespace Reader {
    type DiscoveryMethod = IOS.DiscoveryMethod | Android.DiscoveryMethod;
    type Type = IOS.Type & Android.Type & {
        id: string;
        label?: string;
        batteryLevel?: number;
        serialNumber: string;
        locationId?: string;
        deviceSoftwareVersion?: string;
        simulated?: boolean;
        availableUpdate?: SoftwareUpdate;
        ipAddress?: string;
        locationStatus: LocationStatus;
        location?: Location;
        deviceType: DeviceType;
        status: NetworkStatus;
    };
    namespace IOS {
        type Type = {
            batteryStatus: BatteryStatus;
            isCharging?: number;
        };
        /**
         * Supported DiscoveryMethod for discovering devices.
         *
         * @remarks
         * USB is in private preview for iPads with M-series chips. Contact Stripe support to join the preview if interested.
         */
        type DiscoveryMethod = 'bluetoothProximity' | 'bluetoothScan' | 'internet' | 'tapToPay' | 'usb';
    }
    namespace Android {
        type Type = {
            baseUrl?: string;
            bootloaderVersion?: string;
            configVersion?: string;
            emvKeyProfileId?: string;
            firmwareVersion?: string;
            hardwareVersion?: string;
            macKeyProfileId?: string;
            pinKeyProfileId?: string;
            trackKeyProfileId?: string;
            settingsVersion?: string;
            pinKeysetId?: string;
        };
        type DiscoveryMethod = 'bluetoothScan' | 'internet' | 'tapToPay' | 'handoff' | 'usb';
    }
    type BatteryStatus = 'critical' | 'low' | 'nominal' | 'unknown';
    type BatteryLevel = {
        batteryLevel: number;
        batteryStatus: BatteryStatus;
        isCharging: boolean;
    };
    type NetworkStatus = 'offline' | 'online';
    type SoftwareUpdate = {
        deviceSoftwareVersion: string;
        estimatedUpdateTime: EstimatedUpdateTime;
        requiredAt?: string;
    };
    type EstimatedUpdateTime = 'estimate1To2Minutes' | 'estimate2To5Minutes' | 'estimate5To15Minutes' | 'estimateLessThan1Minute';
    type SimulateUpdateType = 'random' | 'available' | 'none' | 'required' | 'lowBattery';
    type DeviceType = 'chipper1X' | 'chipper2X' | 'stripeM2' | 'verifoneP400' | 'wiseCube' | 'wisePad3' | 'wisePosE' | 'wisePosEDevkit' | 'wisePad3s' | 'stripeS700Devkit' | 'stripeS700' | 'stripeS710Devkit' | 'stripeS710' | 'cotsDevice' | 'tapToPay' | 'etna';
    type InputOptions = 'insertCard' | 'swipeCard' | 'tapCard';
    type DisplayMessage = 'insertCard' | 'insertOrSwipeCard' | 'multipleContactlessCardsDetected' | 'removeCard' | 'retryCard' | 'swipeCard' | 'tryAnotherCard' | 'tryAnotherReadMethod' | 'checkMobileDevice' | 'cardRemovedTooEarly';
    type ConnectionStatus = 'connected' | 'connecting' | 'notConnected' | 'discovering';
    type DisconnectReason = 'disconnectRequested' | 'rebootRequested' | 'securityReboot' | 'criticallyLowBattery' | 'poweredOff' | 'bluetoothDisabled' | 'bluetoothSignalLost' | 'usbDisconnected' | 'idlePowerDown' | 'unknown';
    type ReaderSettings = {
        accessibility?: Accessibility;
        error?: undefined;
    } | {
        accessibility?: undefined;
        error?: StripeError;
    };
    type Accessibility = {
        textToSpeechStatus: ReaderTextToSpeechStatus;
        error?: StripeError;
    };
    type ReaderTextToSpeechStatus = 'off' | 'headphones' | 'speakers';
    type ReaderSettingsParameters = {
        textToSpeechViaSpeakers: boolean;
    };
    type ReaderSupportParams = {
        deviceType: DeviceType;
        simulated?: boolean;
        discoveryMethod: Reader.DiscoveryMethod;
    };
    type ReaderSupportResult = {
        error?: StripeError;
        readerSupportResult: boolean;
    };
}

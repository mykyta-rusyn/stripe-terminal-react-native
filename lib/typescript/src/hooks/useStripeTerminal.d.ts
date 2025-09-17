import type { DiscoverReadersParams, Reader, CreatePaymentIntentParams, GetLocationsParams, Cart, CreateSetupIntentParams, CollectSetupIntentPaymentMethodParams, RefundParams, CollectPaymentMethodParams, StripeError, PaymentStatus, UserCallbacks, OfflineStatus, ICollectInputsParameters, ConfirmPaymentMethodParams, ConfirmSetupIntentMethodParams, CancelSetupIntentMethodParams, CancelPaymentMethodParams, CollectDataParams, TapToPayUxConfiguration, ConnectBluetoothReaderParams, ConnectUsbReaderParams, ConnectTapToPayParams, ConnectHandoffParams, ConnectInternetReaderParams, PrintContent } from '../types';
import type EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
export declare const FETCH_TOKEN_PROVIDER: any, CHANGE_CONNECTION_STATUS: any, CHANGE_PAYMENT_STATUS: any, FINISH_DISCOVERING_READERS: any, FINISH_INSTALLING_UPDATE: any, REQUEST_READER_DISPLAY_MESSAGE: any, REQUEST_READER_INPUT: any, REPORT_AVAILABLE_UPDATE: any, REPORT_UPDATE_PROGRESS: any, START_INSTALLING_UPDATE: any, UPDATE_DISCOVERED_READERS: any, START_READER_RECONNECT: any, READER_RECONNECT_SUCCEED: any, READER_RECONNECT_FAIL: any, CHANGE_OFFLINE_STATUS: any, FORWARD_PAYMENT_INTENT: any, REPORT_FORWARDING_ERROR: any, DISCONNECT: any, UPDATE_BATTERY_LEVEL: any, REPORT_LOW_BATTERY_WARNING: any, REPORT_READER_EVENT: any, ACCEPT_TERMS_OF_SERVICE: any;
/**
 *  useStripeTerminal hook Props
 */
export type Props = UserCallbacks;
/**
 * useStripeTerminal hook.
 * This hook gives you an acesss to all available SDK methods
 * as well as the state of the current connection
 *
 * @example
 * ```ts
 * const { discoverReaders } = useStripeTerminal({
 *   onUpdateDiscoveredReaders: (readers) => {
 *     setDisoveredReaders(readers)
 *   }
 *   onDidReportReaderSoftwareUpdateProgress: (progress) => {
 *     setCurrentProgress(progress)
 *   }
 * })
 * ```
 */
export declare function useStripeTerminal(props?: Props): {
    initialize: () => Promise<{
        reader?: Reader.Type | undefined;
        error?: undefined;
    } | {
        error: StripeError<import("../types").CommonError>;
        reader?: undefined;
    } | {
        error: {
            code: string;
            message: string;
        };
        reader: undefined;
    }>;
    discoverReaders: (params: DiscoverReadersParams) => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    cancelDiscovering: () => Promise<{
        error?: StripeError<import("../types").CommonError> | undefined;
    }>;
    connectReader: (params: ConnectBluetoothReaderParams | ConnectUsbReaderParams | ConnectTapToPayParams | ConnectHandoffParams | ConnectInternetReaderParams, discoveryMethod: Reader.DiscoveryMethod) => Promise<import("../types").ConnectReaderResultType>;
    disconnectReader: () => Promise<import("../types").DisconnectReaderResultType | undefined>;
    rebootReader: () => Promise<import("../types").RebootReaderResultType | undefined>;
    createPaymentIntent: (params: CreatePaymentIntentParams) => Promise<import("../types").PaymentIntentResultType>;
    collectPaymentMethod: (params: CollectPaymentMethodParams) => Promise<import("../types").PaymentIntentResultType>;
    retrievePaymentIntent: (clientSecret: string) => Promise<import("../types").PaymentIntentResultType>;
    getLocations: (params: GetLocationsParams) => Promise<import("../types").GetLocationsResultType>;
    confirmPaymentIntent: (param: ConfirmPaymentMethodParams) => Promise<import("../types").PaymentIntentResultType>;
    createSetupIntent: (params: CreateSetupIntentParams) => Promise<import("../types").SetupIntentResultType>;
    cancelPaymentIntent: (params: CancelPaymentMethodParams) => Promise<import("../types").PaymentIntentResultType>;
    installAvailableUpdate: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelInstallingUpdate: () => Promise<{
        error?: StripeError | undefined;
    }>;
    setReaderDisplay: (cart: Cart) => Promise<{
        error?: StripeError | undefined;
    }>;
    clearReaderDisplay: () => Promise<import("../types").ClearReaderDisplayResultType>;
    retrieveSetupIntent: (clientSecret: string) => Promise<import("../types").SetupIntentResultType>;
    collectSetupIntentPaymentMethod: (params: CollectSetupIntentPaymentMethodParams) => Promise<import("../types").SetupIntentResultType>;
    cancelSetupIntent: (params: CancelSetupIntentMethodParams) => Promise<import("../types").SetupIntentResultType>;
    confirmSetupIntent: (params: ConfirmSetupIntentMethodParams) => Promise<import("../types").SetupIntentResultType>;
    simulateReaderUpdate: (update: Reader.SimulateUpdateType) => Promise<{
        error?: StripeError | undefined;
    }>;
    collectRefundPaymentMethod: (params: RefundParams) => Promise<{
        error?: StripeError | undefined;
    }>;
    confirmRefund: () => Promise<import("../types").ConfirmRefundResultType>;
    clearCachedCredentials: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelCollectPaymentMethod: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelCollectRefundPaymentMethod: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelCollectSetupIntent: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelConfirmPaymentIntent: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelConfirmSetupIntent: () => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelConfirmRefund: () => Promise<{
        error?: StripeError | undefined;
    }>;
    setSimulatedCard: (cardNumber: string) => Promise<{
        error?: StripeError | undefined;
    }>;
    setSimulatedOfflineMode: (simulatedOffline: boolean) => Promise<{
        error?: StripeError | undefined;
    }>;
    setSimulatedCollectInputsResult: (simulatedCollectInputsBehavior: string) => Promise<{
        error?: StripeError | undefined;
    }>;
    getOfflineStatus: () => Promise<OfflineStatus>;
    getPaymentStatus: () => Promise<PaymentStatus>;
    getConnectionStatus: () => Promise<import("../types").ConnectionStatus>;
    getConnectedReader: () => Promise<Reader.Type>;
    getReaderSettings: () => Promise<Reader.ReaderSettings>;
    setReaderSettings: (params: Reader.ReaderSettingsParameters) => Promise<Reader.ReaderSettings>;
    collectInputs: (params: ICollectInputsParameters) => Promise<import("../types").ICollectInputsResults>;
    cancelCollectInputs: () => Promise<{
        error?: StripeError | undefined;
    }>;
    collectData: (params: CollectDataParams) => Promise<import("../types").CollectDataResultType>;
    cancelCollectData: () => Promise<{
        error?: StripeError | undefined;
    }>;
    print: (content: PrintContent) => Promise<{
        error?: StripeError | undefined;
    }>;
    cancelReaderReconnection: () => Promise<{
        error?: StripeError | undefined;
    }>;
    supportsReadersOfType: (params: Reader.ReaderSupportParams) => Promise<Reader.ReaderSupportResult>;
    setTapToPayUxConfiguration: (params: TapToPayUxConfiguration) => Promise<{
        error?: StripeError | undefined;
    }>;
    getNativeSdkVersion: () => Promise<string>;
    emitter: EventEmitter | undefined;
    discoveredReaders: Reader.Type[];
    connectedReader: Reader.Type | null | undefined;
    isInitialized: boolean;
    getIsInitialized: () => boolean;
    loading: boolean;
};

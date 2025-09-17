import type { InitParams, StripeError, DiscoverReadersParams, DiscoverReadersResultType, CancelDiscoveringResultType, DisconnectReaderResultType, RebootReaderResultType, Reader, CreatePaymentIntentParams, CollectSetupIntentPaymentMethodParams, PaymentIntentResultType, Cart, SetupIntentResultType, CreateSetupIntentParams, ClearReaderDisplayResultType, GetLocationsParams, GetLocationsResultType, RefundParams, CollectRefundPaymentMethodType, ConfirmRefundResultType, SetConnectionTokenParams, ConnectReaderResultType, CollectPaymentMethodParams, OfflineStatus, ICollectInputsParameters, ICollectInputsResults, PaymentStatus, ConnectionStatus, ConfirmPaymentMethodParams, ConfirmSetupIntentMethodParams, CancelSetupIntentMethodParams, CancelPaymentMethodParams, CollectDataParams, CollectDataResultType, TapToPayUxConfiguration, ConnectReaderParams, PrintContent } from './types';
type InitializeResultNativeType = Promise<{
    error?: StripeError;
    reader?: Reader.Type;
}>;
interface InternalInitParams extends InitParams {
    reactNativeVersion: string;
}
export interface StripeTerminalSdkType {
    initialize(params: InternalInitParams): InitializeResultNativeType;
    setConnectionToken(params: SetConnectionTokenParams): Promise<void>;
    discoverReaders(params: DiscoverReadersParams): DiscoverReadersResultType;
    cancelDiscovering(): CancelDiscoveringResultType;
    connectReader(params: ConnectReaderParams, discoveryMethod: Reader.DiscoveryMethod): Promise<ConnectReaderResultType>;
    disconnectReader(): Promise<DisconnectReaderResultType>;
    rebootReader(): Promise<RebootReaderResultType>;
    createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntentResultType>;
    collectPaymentMethod(params: CollectPaymentMethodParams): Promise<PaymentIntentResultType>;
    retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResultType>;
    confirmPaymentIntent(params: ConfirmPaymentMethodParams): Promise<PaymentIntentResultType>;
    createSetupIntent(params: CreateSetupIntentParams): Promise<SetupIntentResultType>;
    cancelPaymentIntent(params: CancelPaymentMethodParams): Promise<PaymentIntentResultType>;
    collectSetupIntentPaymentMethod(params: CollectSetupIntentPaymentMethodParams): Promise<SetupIntentResultType>;
    installAvailableUpdate(): Promise<void>;
    cancelInstallingUpdate(): Promise<void>;
    setReaderDisplay(cart: Cart): Promise<{
        error?: StripeError;
    }>;
    clearReaderDisplay(): Promise<ClearReaderDisplayResultType>;
    retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResultType>;
    cancelSetupIntent(params: CancelSetupIntentMethodParams): Promise<SetupIntentResultType>;
    getLocations(params: GetLocationsParams): Promise<GetLocationsResultType>;
    confirmSetupIntent(params: ConfirmSetupIntentMethodParams): Promise<SetupIntentResultType>;
    simulateReaderUpdate(update: Reader.SimulateUpdateType): Promise<void>;
    collectRefundPaymentMethod(params: RefundParams): Promise<CollectRefundPaymentMethodType>;
    cancelCollectRefundPaymentMethod(): Promise<{
        error?: StripeError;
    }>;
    confirmRefund(): Promise<ConfirmRefundResultType>;
    clearCachedCredentials(): Promise<{
        error?: StripeError;
    }>;
    cancelCollectPaymentMethod(): Promise<{
        error?: StripeError;
    }>;
    cancelCollectSetupIntent(): Promise<{
        error?: StripeError;
    }>;
    cancelConfirmPaymentIntent(): Promise<{
        error?: StripeError;
    }>;
    cancelConfirmSetupIntent(): Promise<{
        error?: StripeError;
    }>;
    cancelConfirmRefund(): Promise<{
        error?: StripeError;
    }>;
    setSimulatedCard(cardNumber: string): Promise<{
        error?: StripeError;
    }>;
    setSimulatedOfflineMode(simulatedOffline: boolean): Promise<{
        error?: StripeError;
    }>;
    setSimulatedCollectInputsResult(simulatedCollectInputsBehavior: string): Promise<{
        error?: StripeError;
    }>;
    getOfflineStatus(): Promise<OfflineStatus>;
    getPaymentStatus(): Promise<PaymentStatus>;
    getConnectionStatus(): Promise<ConnectionStatus>;
    getConnectedReader(): Promise<Reader.Type>;
    getReaderSettings(): Promise<Reader.ReaderSettings>;
    setReaderSettings(params: Reader.ReaderSettingsParameters): Promise<Reader.ReaderSettings>;
    collectInputs(params: ICollectInputsParameters): Promise<ICollectInputsResults>;
    cancelCollectInputs(): Promise<{
        error?: StripeError;
    }>;
    collectData(params: CollectDataParams): Promise<CollectDataResultType>;
    cancelCollectData(): Promise<{
        error?: StripeError;
    }>;
    /**
     * Prints the specified content to the connected reader's printer, if available.
     * @param content The content to print. Must be an image (JPEG/PNG) encoded as a base64 string or 'data:' URI scheme.
     * @returns A promise that resolves to an empty object if the print succeeds, or an object containing a `StripeError` if the print fails.
     */
    print(content: PrintContent): Promise<{
        error?: StripeError;
    }>;
    cancelReaderReconnection(): Promise<{
        error?: StripeError;
    }>;
    supportsReadersOfType(params: Reader.ReaderSupportParams): Promise<Reader.ReaderSupportResult>;
    setTapToPayUxConfiguration(params: TapToPayUxConfiguration): Promise<{
        error?: StripeError;
    }>;
    getNativeSdkVersion(): Promise<string>;
}
declare const _default: StripeTerminalSdkType;
export default _default;

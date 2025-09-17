import type { InitParams, InitializeResultType, DiscoverReadersParams, DiscoverReadersResultType, CancelDiscoveringResultType, DisconnectReaderResultType, RebootReaderResultType, CreatePaymentIntentParams, CollectSetupIntentPaymentMethodParams, PaymentIntentResultType, GetLocationsParams, GetLocationsResultType, StripeError, Cart, CreateSetupIntentParams, ClearReaderDisplayResultType, SetupIntentResultType, Reader, RefundParams, ConfirmRefundResultType, ConnectReaderResultType, CollectPaymentMethodParams, OfflineStatus, ICollectInputsParameters, ICollectInputsResults, PaymentStatus, ConnectionStatus, ConfirmPaymentMethodParams, ConfirmSetupIntentMethodParams, CancelSetupIntentMethodParams, CancelPaymentMethodParams, CollectDataParams, CollectDataResultType, TapToPayUxConfiguration, ConnectReaderParams, PrintContent } from './types';
export declare function initialize(params: InitParams): Promise<InitializeResultType>;
export declare function setConnectionToken(token?: string, error?: string, callbackId?: string): Promise<void>;
export declare function discoverReaders(params: DiscoverReadersParams): Promise<DiscoverReadersResultType>;
export declare function cancelDiscovering(): Promise<CancelDiscoveringResultType>;
export declare function connectReader(params: ConnectReaderParams, discoveryMethod: Reader.DiscoveryMethod): Promise<ConnectReaderResultType>;
export declare function disconnectReader(): Promise<DisconnectReaderResultType>;
export declare function rebootReader(): Promise<RebootReaderResultType>;
export declare function createPaymentIntent(params: CreatePaymentIntentParams): Promise<PaymentIntentResultType>;
export declare function createSetupIntent(params: CreateSetupIntentParams): Promise<SetupIntentResultType>;
export declare function collectPaymentMethod(params: CollectPaymentMethodParams): Promise<PaymentIntentResultType>;
export declare function retrievePaymentIntent(clientSecret: string): Promise<PaymentIntentResultType>;
export declare function getLocations(params: GetLocationsParams): Promise<GetLocationsResultType>;
export declare function confirmPaymentIntent(params: ConfirmPaymentMethodParams): Promise<PaymentIntentResultType>;
export declare function cancelPaymentIntent(params: CancelPaymentMethodParams): Promise<PaymentIntentResultType>;
export declare function installAvailableUpdate(): Promise<{
    error?: StripeError;
}>;
export declare function setReaderDisplay(cart: Cart): Promise<{
    error?: StripeError;
}>;
export declare function cancelInstallingUpdate(): Promise<{
    error?: StripeError;
}>;
export declare function retrieveSetupIntent(clientSecret: string): Promise<SetupIntentResultType>;
export declare function collectSetupIntentPaymentMethod(params: CollectSetupIntentPaymentMethodParams): Promise<SetupIntentResultType>;
export declare function clearReaderDisplay(): Promise<ClearReaderDisplayResultType>;
export declare function cancelSetupIntent(params: CancelSetupIntentMethodParams): Promise<SetupIntentResultType>;
export declare function confirmSetupIntent(params: ConfirmSetupIntentMethodParams): Promise<SetupIntentResultType>;
export declare function simulateReaderUpdate(update: Reader.SimulateUpdateType): Promise<{
    error?: StripeError;
}>;
export declare function setSimulatedCard(cardNumber: string): Promise<{
    error?: StripeError;
}>;
export declare function setSimulatedOfflineMode(simulatedOffline: boolean): Promise<{
    error?: StripeError;
}>;
export declare function setSimulatedCollectInputsResult(simulatedCollectInputsBehavior: string): Promise<{
    error?: StripeError;
}>;
export declare function collectRefundPaymentMethod(params: RefundParams): Promise<{
    error?: StripeError;
}>;
export declare function confirmRefund(): Promise<ConfirmRefundResultType>;
export declare function clearCachedCredentials(): Promise<{
    error?: StripeError;
}>;
export declare function cancelCollectPaymentMethod(): Promise<{
    error?: StripeError;
}>;
export declare function cancelCollectRefundPaymentMethod(): Promise<{
    error?: StripeError;
}>;
export declare function cancelCollectSetupIntent(): Promise<{
    error?: StripeError;
}>;
export declare function cancelConfirmPaymentIntent(): Promise<{
    error?: StripeError;
}>;
export declare function cancelConfirmSetupIntent(): Promise<{
    error?: StripeError;
}>;
export declare function cancelConfirmRefund(): Promise<{
    error?: StripeError;
}>;
export declare function getOfflineStatus(): Promise<OfflineStatus>;
export declare function getPaymentStatus(): Promise<PaymentStatus>;
export declare function getConnectionStatus(): Promise<ConnectionStatus>;
export declare function getConnectedReader(): Promise<Reader.Type>;
export declare function getReaderSettings(): Promise<Reader.ReaderSettings>;
export declare function setReaderSettings(params: Reader.ReaderSettingsParameters): Promise<Reader.ReaderSettings>;
export declare function collectInputs(params: ICollectInputsParameters): Promise<ICollectInputsResults>;
export declare function cancelCollectInputs(): Promise<{
    error?: StripeError;
}>;
export declare function collectData(params: CollectDataParams): Promise<CollectDataResultType>;
export declare function cancelCollectData(): Promise<{
    error?: StripeError;
}>;
export declare function print(content: PrintContent): Promise<{
    error?: StripeError;
}>;
export declare function cancelReaderReconnection(): Promise<{
    error?: StripeError;
}>;
export declare function supportsReadersOfType(params: Reader.ReaderSupportParams): Promise<Reader.ReaderSupportResult>;
export declare function setTapToPayUxConfiguration(params: TapToPayUxConfiguration): Promise<{
    error?: StripeError;
}>;
export declare function getNativeSdkVersion(): Promise<string>;

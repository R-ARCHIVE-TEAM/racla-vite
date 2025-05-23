export interface ErrorLogData {
  clientPlatform?: string
  clientOs?: string
  clientBrowser?: string
  clientUserAgent?: string
  clientLanguage?: string
  clientDevice?: string
  clientLogLevel: 'ERROR' | 'WARN' | 'INFO'
  clientLogMessage: string
  clientLogStacktrace?: string
  clientAdditionalInfo?: any
}

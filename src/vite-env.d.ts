/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_SECRET_KEY: string;
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

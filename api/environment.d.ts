declare global {
namespace NodeJS {
    interface ProcessEnv {
        PORT: number,
        SETLISTFM_API_KEY: string
    }
  }
}
export {};
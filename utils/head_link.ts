const url = "https://github.com/cataclysmbnteam/Cataclysm-BN/blob/upload"

export const head_link = <const T extends string>(path: T) => `${url}/${path}` as const

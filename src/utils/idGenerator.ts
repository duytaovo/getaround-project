export const iDGenerator = (prefix: string): string => `${prefix}-${crypto.randomUUID().substring(0, 8)}`

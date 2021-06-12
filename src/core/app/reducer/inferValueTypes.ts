/**
 * Представляет собой список возвращаемых типов из переданных в него экшенов
 */
export type InferValuesTypes<T> = T extends { [key: string]: infer U } ? U : never;
